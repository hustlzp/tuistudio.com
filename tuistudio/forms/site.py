# coding: utf-8
from flask_wtf import Form
from wtforms import TextField, TextAreaField, SelectField
from wtforms.validators import DataRequired, Email


class BusinessForm(Form):
    """提交项目意向"""
    # type = TextField('Type', validators=[DataRequired('Project type cannot be none.')])
    bugget = TextField('Bugget', validators=[DataRequired('Bugget cannot be none.')])
    period = TextField('Period', validators=[DataRequired('Period cannot be none.')])
    desc = TextAreaField('Supplement')
    name = TextField('Your name', validators=[DataRequired('Your name cannot be none.')])
    email = TextField('Email', validators=[DataRequired('Email cannot be none.')])