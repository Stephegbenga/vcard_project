from flask import Flask, request, render_template


app = Flask(__name__, static_url_path='',
                  static_folder='frontend/build',
                  template_folder='frontend/build')


@app.route('/')
def serve():
    return render_template("index.html")


@app.route('/data')
def data():
    return {"status":"success", "data":"olo"}



if __name__ == '__main__':
    app.run()

