# coding: utf-8
from flask_wtf import Form
from wtforms import StringField, BooleanField, ValidationError
from wtforms.validators import DataRequired
from .. import config


class SigninForm(Form):
    """登陆"""
    account = StringField(validators=[DataRequired()])
    password = StringField(validators=[DataRequired()])

    def validate_account(self, field):
        if '@' in self.account.data:
            if self.account.data != config.ADMIN_EMAIL:
                raise ValidationError()
        else:
            if self.account.data != config.ADMIN_USERNAME:
                raise ValidationError()

    def validate_password(self, field):
        if self.password.data != config.ADMIN_PASSWORD:
            raise ValidationError()
