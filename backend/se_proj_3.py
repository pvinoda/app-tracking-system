import requests
import fitz
import json
# Need to do pip3 install requests,PyMuPDF

# Code for extracting text from PDF
pdf = fitz.open('D:\Kruthik\Documents\Resume\Kruthik_Resume_V3.pdf')
text = ""
for page in pdf:
   text += page.get_text()
# print(text)


#Code to get a worddcloud from quickchart.io
resp = requests.post('https://quickchart.io/wordcloud', json={
    'format': 'png',
    'width': 600,
    'height': 600,
    'fontScale': 15,
    'scale': 'linear',
    'removeStopwords': True,
    'cleanWords':True,
    'minWordLength': 3,
    'text': text,
})

with open('resume_word_cloud.png', 'wb') as f:
    f.write(resp.content)

