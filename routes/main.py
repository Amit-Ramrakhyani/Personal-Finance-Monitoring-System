from flask import Blueprint, jsonify, request
from fun.convert_sms import convert_sms_to_json

main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def index():
    return jsonify({'message': 'Welcome to the main route!'})

@main_bp.route('/convert-sms', methods=['POST'])
def convert_sms():
    data = request.json;
    print(data)
    data = convert_sms_to_json(data);
    print(data)
    return jsonify({'message': 'Decoded SMS to JSON', 'data': data})



