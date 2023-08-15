from flask import Flask, send_from_directory, render_template
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from api.HelloApiHandler import HelloApiHandler

app = Flask(__name__, 
            static_url_path='', 
            static_folder='frontend/build',
            template_folder='frontend/templates')
CORS(app) #comment this on deployment
api = Api(app)

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

@app.route("/test", defaults={'path':''})
def test(path):
    return send_from_directory(app.static_folder,'test.html')
    # return render_template('test.html', a='fuck yeah')

api.add_resource(HelloApiHandler, '/flask/hello')