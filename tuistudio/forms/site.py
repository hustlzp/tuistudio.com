# coding: utf-8
from flask_wtf import Form
from wtforms import TextField, TextAreaField, SelectField
from wtforms.validators import DataRequired, Email


class BusinessForm(Form):
    """提交项目意向"""
    bugget = SelectField('Bugget', validators=[DataRequired('Bugget cannot be none.')])
    period = SelectField('Period', validators=[DataRequired('Period cannot be none.')])
    desc = TextAreaField('Supplement')
    name = TextField('Your name')
    contact = TextField('Contact')