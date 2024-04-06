from flask import Blueprint
from .main import main_bp
from .others import other_bp
from .analysis import analysis_bp

def init_app(app):
    app.register_blueprint(main_bp)
    app.register_blueprint(other_bp)
    app.register_blueprint(analysis_bp)