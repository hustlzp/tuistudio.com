# coding: utf-8
from flask_wtf import Form
from wtforms import StringField, TextAreaField, SelectField, ValidationError, SelectMultipleField, \
    FieldList
from wtforms.validators import DataRequired, Email


class BusinessForm(Form):
    """项目意向"""
    type = SelectMultipleField(choices=[
        ('WM', 'Web & Mobile'),
        ('GG', 'GeoEngine & GeoDatastore'),
        ('SS', 'System & Server')
    ], default=['WM'])
    bugget = SelectField(validators=[DataRequired()],
                         choices=[
                             ('Project Bugget', 'Project Bugget'),
                             ('≤ $3K', '≤ $3K'),
                             ('> $3K and ≤ $10K', '> $3K and ≤ $10K'),
                             ('> $10K and ≤ $25K', '> $10K and ≤ $25K'),
                             ('≥ $50K', '≥ $50K')
                         ])
    period = SelectField(validators=[DataRequired()],
                         choices=[
                             ('Project Period', 'Project Period'),
                             ('a month', 'a month'),
                             ('a quarter', 'a quarter'),
                             ('half year', 'half year'),
                             ('a year', 'a year')
                         ])
    hire_type = SelectField(validators=[DataRequired()],
                            choices=[
                                ('Hire Type', 'Hire Type'),
                                ('dedicated', 'dedicated'),
                                ('affiliated + fulfilled', 'affiliated + fulfilled'),
                                ('contracted', 'contracted')
                            ])
    desc = TextAreaField(validators=[DataRequired()])
    name = StringField(validators=[DataRequired()])
    email = StringField(validators=[DataRequired(), Email()])

    def validate_bugget(self, field):
        if field.data == 'Project Bugget':
            raise ValidationError()

    def validate_period(self, field):
        if field.data == 'Project Period':
            raise ValidationError()

    def validate_hire_type(self, field):
        if field.data == 'Hire Type':
            raise ValidationError()