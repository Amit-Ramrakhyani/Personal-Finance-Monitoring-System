from flask import Blueprint, jsonify, request
import pandas as pd
import numpy as np
from pymongo import MongoClient

client = MongoClient("mongodb+srv://admin:admin@buildify-main.hwxwq82.mongodb.net/?retryWrites=true&w=majority&appName=Buildify-Main")
db = client['buildify']
collection = db['transactions']

analysis_bp = Blueprint('analysis', __name__)

@analysis_bp.route('/analysis', methods=['GET'])
def index():
    return jsonify({'message': 'Welcome to the Analysis route!'})

def monthly_savings(df, date):
    date = pd.to_datetime(date, utc=True)
    month = date.month

    transaction_date = pd.to_datetime(df['transaction_date'], utc=True)
    filtered_df = df[transaction_date.dt.month == month]

    total_income = filtered_df[filtered_df['transaction_type'] == "Credit"]['amount'].sum()
    total_spent = filtered_df[filtered_df['transaction_type'] == "Debit"]['amount'].sum()

    savings = total_income - total_spent
    return savings

def weekly_savings(df, date):
    date = pd.to_datetime(date, utc=True)
    start_date = date - pd.DateOffset(weeks=1)
    end_date = date

    transaction_date = pd.to_datetime(df['transaction_date'], utc=True)
    filtered_df = df[(transaction_date >= start_date) & (transaction_date <= end_date)]

    total_income = filtered_df[filtered_df['transaction_type'] == "Credit"]['amount'].sum()
    total_spent = filtered_df[filtered_df['transaction_type'] == "Debit"]['amount'].sum()

    savings = total_income - total_spent
    return savings

def average_savings(df):
    transaction_date = pd.to_datetime(df['transaction_date'], utc=True)

    total_income = df[df['transaction_type'] == "Credit"]['amount'].sum()
    total_spent = df[df['transaction_type'] == "Debit"]['amount'].sum()

    savings = total_income - total_spent / len(df)
    return savings

def monthly_expense(df, date):
    date = pd.to_datetime(date, utc=True)
    month = date.month

    transaction_date = pd.to_datetime(df['transaction_date'], utc=True)

    filtered_df = df[transaction_date.dt.month == month]
    
    total_spent = filtered_df[filtered_df['transaction_type'] == "Debit"]['amount'].sum()
    return total_spent

def weekly_expense(df, date):
    date = pd.to_datetime(date, utc=True)
    start_date = date - pd.DateOffset(weeks=1)
    end_date = date

    transaction_date = pd.to_datetime(df['transaction_date'], utc=True)
    filtered_df = df[(transaction_date >= start_date) & (transaction_date <= end_date)]

    total_spent = filtered_df[filtered_df['transaction_type'] == "Debit"]['amount'].sum()
    return total_spent

def average_expense(df):
    transaction_date = pd.to_datetime(df['transaction_date'], utc=True)

    total_spent = df[df['transaction_type'] == "Debit"]['amount'].sum()
    return total_spent / len(df)

def monthly_income(df, date):

    date = pd.to_datetime(date, utc=True)
    month = date.month

    transaction_date = pd.to_datetime(df['transaction_date'], utc=True)
    filtered_df = df[transaction_date.dt.month == month]

    total_income = filtered_df[filtered_df['transaction_type'] == "Credit"]['amount'].sum()
    return total_income

def weekly_income(df, date):
    date = pd.to_datetime(date, utc=True)
    start_date = date - pd.DateOffset(weeks=1)
    end_date = date

    transaction_date = pd.to_datetime(df['transaction_date'], utc=True)
    filtered_df = df[(transaction_date >= start_date) & (transaction_date <= end_date)]

    total_income = filtered_df[filtered_df['transaction_type'] == "Credit"]['amount'].sum()
    return total_income

def average_income(df):
    transaction_date = pd.to_datetime(df['transaction_date'], utc=True)

    total_income = df[df['transaction_type'] == "Credit"]['amount'].sum()
    return total_income / len(df)




# Define route to calculate monthly savings
@analysis_bp.route('/analysis', methods=['POST'])
def expense():
    data = collection.find()
    df = pd.DataFrame(list(data))

    start_date = pd.to_datetime("2024-04-01", utc=True)

    x = monthly_expense(df, start_date)
    y = weekly_expense(df, start_date)
    z = average_expense(df)

    a = monthly_savings(df, start_date)
    b = weekly_savings(df, start_date)
    c = average_savings(df)


    return jsonify({'monthly_expense': x, 'weekly_expense': y, 'average_expense': z, 'monthly_savings': a, 'weekly_savings': b, 'average_savings': c})


