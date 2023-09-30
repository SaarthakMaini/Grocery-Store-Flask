from flask import Flask,render_template,request
from flask_sqlalchemy import SQLAlchemy

from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"],deprecated="auto")

def hash(password: str):
    return pwd_context.hash(password)

def verify(plain_password,hashed_password):
    return pwd_context.verify(plain_password,hashed_password)

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///grocery.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']= False
db = SQLAlchemy(app)
app.app_context().push()
class User(db.Model):
    id = db.Column(db.Integer(),primary_key=True)
    username= db.Column(db.String(length=30),nullable=False,unique=True)
    email_address = db.Column(db.String(length=50),nullable=False,unique=True)
    password_hash = db.Column(db.String(length=60),nullable=False)

    def __repr__(self):
        return f'{self.username}'

db.create_all()
@app.route('/registration',methods=['POST'])
def create_user():
    hashed_password = hash(request.form['password'])
    user = User(username =request.form['username'],email_address = request.form['email'],password_hash=hashed_password)
    db.session.add(user)
    db.session.commit()

    return render_template('customer.html')

@app.route('/login',methods=['POST','GET'])
def login_user():
    user = User.query.filter_by(username = request.form['username'])
    if user ==None:
        raise Exception("User does not exist")
    
    if verify(request.form['password'],user.password_hash):
        return render_template('customer-dashboard.html')
    raise Exception("Password not valid")

if __name__ == "__main__":
    app.run(debug=True)