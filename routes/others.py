from flask import Blueprint, jsonify

other_bp = Blueprint('other', __name__)

@other_bp.route('/other')
def other_route():
    return jsonify({'message': 'This is another route!'})
