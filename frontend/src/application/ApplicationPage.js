import React, { Component } from 'react'
import Card from './Card'
import CardModal from './CardModal'
import $ from 'jquery'

export default class CardBoard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      applications: [],
      card_titles: [],
      card_class: [],
      showModal: false
    }
    this.getData = this.getData.bind(this)
    this.groupApplication = this.groupApplication.bind(this)
    this.createCardTitle = this.createCardTitle.bind(this)
    this.createCardClass = this.createCardClass.bind(this)
  }

  getData () {
    return $.ajax({
      url: 'http://localhost:5000/applications',
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Credentials': 'true'
      },
      credentials: 'include'
    })
  }

  componentDidMount () {
    this.getData()
      .done((data) => {
        const result = this.groupApplication(data)
        const cardTitles = this.createCardTitle(result)
        const cardClass = this.createCardClass(result)
        this.setState({
          applications: data,
          card_titles: cardTitles,
          card_class: cardClass
        })
      })
  }

  renderPage (newApplications) {
    // helper function to render the page
    // rerender the page to represent the update result
    const result = this.groupApplication(newApplications)
    const cardTitle = this.createCardTitle(result)
    const cardClass = this.createCardClass(result)

    this.setState({
      applications: newApplications,
      card_titles: cardTitle,
      card_class: cardClass,
      showModal: false,
      application: null
    })
  }

  // the update function for child component
  updateCardBoard (application) {
    const newApplications = this.state.applications
    if (application.id == null) {
      // current application is a new application, create a new one and save in the backend.
      $.ajax({
        url: 'http://localhost:5000/applications', // TODO: will have to replace with production URL
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
          'Access-Control-Allow-Origin': 'http://localhost:3000',
          'Access-Control-Allow-Credentials': 'true'
        },
        async: false,
        data: JSON.stringify({
          application: application
        }),
        contentType: 'application/json',
        success: (msg) => {
          console.log(msg)
        },
        complete: function (data) {
          newApplications.push(data.responseJSON)
        }
      })
    } else {
      console.log('updating id=' + application.id)
      $.ajax({
        url: 'http://localhost:5000/applications/' + application.id,
        method: 'PUT',
        async: false,
        data: JSON.stringify({
          application: application
        }),
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
          'Access-Control-Allow-Origin': 'http://localhost:3000',
          'Access-Control-Allow-Credentials': 'true'
        },
        contentType: 'application/json',
        success: (msg) => {
          console.log(msg)
        },
        complete: function (data) {
          const updatedApp = data.responseJSON
          const idx = newApplications.findIndex(a => a.id === updatedApp.id)
          newApplications[idx] = updatedApp
        }
      })
    }
    this.renderPage(newApplications)
  }

  deleteApplication (application) {
    const newApplications = this.state.applications
    console.log('deleting id=' + application.id)
    $.ajax({
      url: 'http://localhost:5000/applications/' + application.id,
      method: 'DELETE',
      async: false,
      data: JSON.stringify({
        application: application
      }),
      contentType: 'application/json',
      success: (msg) => {
        console.log(msg)
      },
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Credentials': 'true'
      },
      complete: function (data) {
        const deletedApp = data.responseJSON
        const idx = newApplications.findIndex(a => a.id === deletedApp.id)
        newApplications.splice(idx, 1)
      }
    })
    this.renderPage(newApplications)
  }

  // open the card modal according to the application in parameter
  showEditModal (application, mode) {
    const modalMode = mode

    this.setState({
      showModal: true,
      application: application,
      modalMode: modalMode
    })
  }

  closeEditModal () {
    this.setState({
      showModal: false,
      application: null
    })
  }

  // create all cards(application) and make cards having the same class in the same column
  createCardClass (applicationsGroup) {
    return applicationsGroup.reduce((pv, v) => {
      const appClass = (
        <div className='col' key={v.title + '_class'} id={v.title + '_class'}>
          {v.applications.reduce((pv, v) => {
            const card = <Card application={v} key={v.id} showEditModal={this.showEditModal.bind(this, v, 'update')} />
            pv.push(card)
            return pv
          }, [])}
          {/* add function not implement */}
          <div className='card card-col'>
            <div className='card-body new-col' onClick={this.showEditModal.bind(this, { class: v.class }, 'create')}>
              <i className='fas fa-plus text-center' />
            </div>
          </div>
        </div>
      )
      pv.push(appClass)
      return pv
    }, [])
  }

  // create the class title
  createCardTitle (applicationsGroup) {
    return applicationsGroup.reduce((pv, v) => {
      const title = (
        <div className='col' key={v.title + '_title'}>
          <div className='card card-col'>
            <div className='card-body noPadding'>
              <div type='text' className='text-center title-col form-control-lg'>
                {v.title}
              </div>
            </div>
          </div>
        </div>
      )
      pv.push(title)
      return pv
    }, [])
  }

  // initialize the data, classify data according to their class
  groupApplication (applications) {
    const result = [
      {
        title: 'Wish list',
        applications: [],
        class: '1'
      }, {
        title: 'Waiting for referral',
        applications: [],
        class: '2'
      }, {
        title: 'Applied',
        applications: [],
        class: '3'
      }, {
        title: 'Rejected',
        applications: [],
        class: '4'
      }
    ]
    applications?.forEach(app => {
      const appClass = result.find(v => { return v.class === app.status })
      appClass?.applications.push(app)
    })
    return result
  }

  render () {
    let applicationModal = null
    if (this.state.application) {
      applicationModal = (
        <CardModal
          show={this.state.showModal}
          submitFunc={this.updateCardBoard.bind(this)}
          mode={this.state.modalMode}
          application={this.state.application}
          closeEditModal={this.closeEditModal.bind(this)}
          deleteApplication={this.deleteApplication.bind(this)}
        />
      )
    }
    return (
      <span id='tab'>
        <div className='row'>
          {this.state.card_titles}
        </div>
        <div className='row'>
          {this.state.card_class}
        </div>
        {applicationModal}
      </span>
    )
  }
}
