import google.generativeai as genai
from datetime import datetime

genai.configure(api_key="AIzaSyCE48rOCFD9RJK0lrr5jfOzVSyk5SkC5SY")
model = genai.GenerativeModel('gemini-pro')


def convert_sms_to_json(sms):
  response = model.generate_content([
  "Convert the following SMS to standard JSON format telling the sender, receiver, and message content.",
  """
  Example: 

  Instructions:

  1. If the msg is says that "SENT" then the sender is the bank and the receiver is the payee. If the msg says "RECEIVED" then the sender is the payee and the receiver is the bank.
  2. The message should contain the amount, from_account, date, UPI_ref, and fraud_url.
  3. The message should be in JSON format.
  4. The sentStamp should be the timestamp of the SMS.
  5. The number should be the number.
  
  SMS: Sent Rs.175.00 from Kotak Bank AC X1085 to paytmqr2810050501010dylgsy81le8@paytm on 06-04-24.UPI Ref 446384026558. Not you, kotak.com/fraud
  OUTPUT: in JSON Format
  
  "sender": "Kotak Bank",
  "type": "SENT",
  "timestamp": "2024-04-06T12:00:00Z",
  "receiver": "paytmqr2810050501010dylgsy81le8@paytm",
  "number": "9876543210",
  "message": {
    "amount": 175.00,
    "from_account": "X1085",
    "date": "06-04-24",
    "UPI_ref": "446384026558",
    "fraud_url": "kotak.com/fraud"
  }
  
  
  """
  f"""
  SMS: {sms['text']}
  sentStamp: {datetime.utcfromtimestamp(sms['sentStamp']/ 1000).strftime('%Y-%m-%dT%H:%M:%SZ')}
  number: {sms['user_number']} 
  """
  ])

  response.resolve()
  open("./fun/dummy.json", "w").write(response.text)

  return response.text;



