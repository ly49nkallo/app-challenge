from flask import Flask, send_from_directory, render_template
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from api.HelloApiHandler import HelloApiHandler
import os

app = Flask(__name__, 
            static_url_path='', 
            static_folder='frontend/build',
            template_folder='frontend/templates')
CORS(app) #comment this on deployment
# api = Api(app)

@app.route("/", defaults={'path':''})
@app.route('/<path:path>')
def serve(path):
     path_dir = os.path.abspath("./frontend/build") #path react build
     if path != "" and os.path.exists(os.path.join(path_dir, path+".html")):
         return send_from_directory(os.path.join(path_dir), path+'.html')
     else:
         return send_from_directory(os.path.join(path_dir),'index.html')

# api.add_resource(HelloApiHandler, '/flask/hello')

if __name__ == '__main__':
    app.run()