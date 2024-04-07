from flask import Flask, request, jsonify
import json
import requests
app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def webhook():
    req = request.get_json(silent=True, force=True)
    if req['queryResult']['intent']['displayName'] == 'monthly review':
        monthly_savings_url = "http://35.154.233.250:6004/analysis/monthly_savings"
        monthly_expenses_url = "http://35.154.233.250:6004//analysis/monthly_expense"

        monthly_saving = requests.post(monthly_savings_url)
        monthly_expense = requests.post(monthly_expenses_url)
        
        monthly_saving = monthly_saving.json()["monthly_savings"]
        monthly_expense = monthly_expense.json()["monthly_expense"]
        return jsonify({
            "fulfillmentText": f"Your monthly savings is {monthly_saving} and your monthly expense is {monthly_expense}"
        })


    if req['queryResult']['intent']['displayName'] == 'week review':
        weekly_expenses_url = "http://35.154.233.250:6004//analysis/weekly_expense"
        weekly_savings_url = "http://35.154.233.250:6004/analysis/weekly_savings"

        weekly_saving = requests.post(weekly_savings_url)
        weekly_expense = requests.post(weekly_expenses_url)

        weekly_saving = weekly_saving.json()["weekly_savings"]
        weekly_expense = weekly_expense.json()["weekly_expense"]

        print(weekly_saving, weekly_expense)
        return jsonify({
            "fulfillmentText": f"Your weekly savings is {weekly_saving} and your weekly expense is {weekly_expense}"
        })
    
    if req['queryResult']['intent']['displayName'] == 'status':
        monthly_savings_url = "http://35.154.233.250:6004/analysis/monthly_savings"
        monthly_expenses_url = "http://35.154.233.250:6004//analysis/monthly_expense"
        weekly_expenses_url = "http://35.154.233.250:6004//analysis/weekly_expense"
        weekly_savings_url = "http://35.154.233.250:6004/analysis/weekly_savings"
        average_savings = "http://35.154.233.250:6004/analysis/average_savings"
        average_expense = "http://35.154.233.250:6004/analysis/average_expense"

        monthly_saving = requests.post(monthly_savings_url)
        monthly_expense = requests.post(monthly_expenses_url)
        weekly_saving = requests.post(weekly_savings_url)
        weekly_expense = requests.post(weekly_expenses_url)
        average_savings = requests.post(average_savings)
        #average_expense = requests.post(average_expense)


        #print(average_expense.json()    )
        print(average_savings.json())
        monthly_saving = monthly_saving.json()["monthly_savings"]
        monthly_expense = monthly_expense.json()["monthly_expense"]
        weekly_saving = weekly_saving.json()["weekly_savings"]
        weekly_expense = weekly_expense.json()["weekly_expense"]
        average_savings = float(average_savings.json()["average_savings"]).__round__(2)
        #average_expense = average_expense.json()["average_expense"]

        print(monthly_saving, monthly_expense, weekly_saving, weekly_expense, average_savings)

        res_text = f"Your monthly savings is {monthly_saving}, your monthly expense is {monthly_expense}, your weekly savings is {weekly_saving}, your weekly expense is {weekly_expense}, your average savings is {average_savings}."

        return jsonify({
            "fulfillmentText": res_text
        })
    

    return jsonify({
        "fulfillmentText": "I am sorry, I did not understand"
    })




if __name__ == '__main__':
    app.run(port=5000)
