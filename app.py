from flask import Flask, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
from routes import init_app

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app)

init_app(app)


# Enable CORS for all routes
CORS(app)

# Define a simple route
@app.route('/')
def hello_world():
    return "Hello World"

if __name__ == '__main__':
    # Use the PORT environment variable if available, otherwise default to 5000
    port = int(6004)
    app.run(host='0.0.0.0', port=port, debug=True)
