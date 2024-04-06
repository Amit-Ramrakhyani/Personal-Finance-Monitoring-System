import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.ensemble import IsolationForest
from pymongo import MongoClient
from datetime import datetime
from dotenv import load_dotenv
import calendar
import json
import os

load_dotenv()

def piecharrt(df, start_date, end_date):
    df['transaction_date'] = pd.to_datetime(df['transaction_date'])
    filtered_df = df[(df['transaction_date'] >= start_date) & (df['transaction_date'] <= end_date)]
    debit_df = filtered_df[filtered_df['transaction_type']=="Debit"]['amount'].sum()
    credit_df = filtered_df[filtered_df['transaction_type']=="Credit"]['amount'].sum()

    debit_df, credit_df = int(debit_df), int(credit_df)

    try:
        with open('data.json', 'r') as f:
            data = json.load(f)
    except (FileNotFoundError, json.decoder.JSONDecodeError):
        data = {}
    
    # Update JSON data
    data['piechart'] = {'debit': debit_df, 'credit': credit_df}
    
    # Write JSON data back to the file
    with open('data.json', 'w') as f:
        json.dump(data, f)

    fig, ax = plt.subplots()
    ax.pie([debit_df, credit_df], labels=['Debit', 'Credit'], autopct='%1.1f%%')
    plt.show()

def line_graph(df, start_date, end_date):
    df['transaction_date'] = pd.to_datetime(df['transaction_date'])
    filtered_df = df[(df['transaction_date'] >= start_date) & (df['transaction_date'] <= end_date)]

    # Filter DataFrame for debit and credit transactions separately
    debit_df = filtered_df[filtered_df['transaction_type'] == "Debit"]
    credit_df = filtered_df[filtered_df['transaction_type'] == "Credit"]

    # Group by transaction date and sum the amounts for each group
    expense = debit_df.groupby('transaction_date')['amount'].sum()
    income = credit_df.groupby('transaction_date')['amount'].sum()

    try:
        with open('data.json', 'r') as f:
            data = json.load(f)
    except (FileNotFoundError, json.decoder.JSONDecodeError):
        data = {}

    # Convert Timestamp keys to strings
    expense_dict = {str(date): amount for date, amount in expense.items()}
    income_dict = {str(date): amount for date, amount in income.items()}

    # Update JSON data
    data['linechart'] = {'expense': expense_dict, 'income': income_dict}

    # Write JSON data back to the file
    with open('data.json', 'w') as f:
        json.dump(data, f)

    fig, ax = plt.subplots()
    ax.plot(expense, label='Expense')
    ax.plot(income, label='Income')
    ax.legend()
    plt.show()

def plot_savings(df, start_date, end_date):

        transaction_date = pd.to_datetime(df['transaction_date'], utc=True)
        filtered_df = df[(transaction_date >= start_date) & (transaction_date <= end_date)]

        total_income = filtered_df[filtered_df['transaction_type'] == "Credit"]['amount'].sum()
        total_spent = filtered_df[filtered_df['transaction_type'] == "Debit"]['amount'].sum()

        savings = total_income - total_spent

        dates = pd.date_range(start=start_date, end=end_date)

        savings = []
        for date in dates:
            filtered_df = df[(df['transaction_date'] >= start_date) & (df['transaction_date'] <= date)]
            total_income = filtered_df[filtered_df['transaction_type'] == "Credit"]['amount'].sum()
            total_spent = filtered_df[filtered_df['transaction_type'] == "Debit"]['amount'].sum()
            savings.append(total_income - total_spent)

        try:
            with open('data.json', 'r') as f:
                data = json.load(f)
        except (FileNotFoundError, json.decoder.JSONDecodeError):
            data = {}

        # Convert Timestamp keys to strings
        savings_dict = {str(date): float(amount) for date, amount in zip(dates, savings)}

        # Update JSON data
        data['linechart'] = {'savings': savings_dict} 

        # Write JSON data back to the file
        with open('data.json', 'w') as f:
            json.dump(data, f)       

        plt.figure(figsize=(10, 6))
        plt.plot(dates, savings, marker='o', linestyle='-')
        plt.title('Savings Over Time')
        plt.xlabel('Date')
        plt.ylabel('Savings')
        plt.xticks(rotation=45)
        plt.grid(True)
        plt.tight_layout()
        plt.show()

def outliers():
    grouped_data = df.groupby('category')['amount'].apply(list).reset_index()

    for index, row in grouped_data.iterrows():
        # category = row[X]
        amounts = row['amount']

        X = np.array(amounts).reshape(-1, 1)
        clf = IsolationForest(max_samples='auto', random_state=0)
        clf.fit(X)
        y_pred = clf.predict(X)
        outliers = X[y_pred == -1]

        return outliers

def line_graph_outliers():
        # Group data by category and create a list of amounts for each category
        grouped_data = df.groupby('category')['amount'].apply(list).reset_index()
        print(grouped_data.head())

        # Create subplots for line charts
        fig, ax = plt.subplots(2, 3, figsize=(20, 10))

        # Limiting the number of categories to be plotted to the size of the subplot grid
        categories_to_plot = grouped_data['category'].unique()[:6]

        # Plot line charts for each category
        for index, category in enumerate(categories_to_plot):
            amounts = grouped_data[grouped_data['category'] == category]['amount'].iloc[0]
            ax[index // 3, index % 3].plot(amounts, label=category)
            ax[index // 3, index % 3].set_title(category)
            ax[index // 3, index % 3].legend()

        plt.show()

if __name__ == '__main__':
    # Load data from mongoDB
    client = MongoClient(os.getenv("MONGODB_CLIENT_URI"))
    db = client['buildify']
    collection = db['transactions']
    data = collection.find()
    df = pd.DataFrame(list(data))
    print(df.head())

    start_date = input("Enter the start date in the format YYYY-MM-DD: ")
    end_date = input("Enter the end date in the format YYYY-MM-DD: ")

    start_date = pd.to_datetime(start_date, utc=True)
    end_date = pd.to_datetime(end_date, utc=True)

    piecharrt(df, start_date, end_date)
    line_graph(df, start_date, end_date)
    plot_savings(df, start_date, end_date)
    print(outliers())
    line_graph_outliers()
