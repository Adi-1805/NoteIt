from website import create_app

app = create_app() 

if __name__ == '__main__':
    app.run(debug=True) # debug = true re-runs or refrshes the server everytime we make changes to the code
   
