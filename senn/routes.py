import requests
from senn import app
from flask import render_template, request

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/seguranca")
def security():
    return render_template("seguranca.html")


@app.route("/privacidade")
def privacy():
    return render_template("privacidade.html")

@app.route('/consultar', methods=["POST"])
def query():
    address_ip = request.form['ip']
    url_key = f"http://ip-api.com/json/{address_ip}?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query"

    response = requests.get(url_key).json()

    return render_template("index.html", data=response)