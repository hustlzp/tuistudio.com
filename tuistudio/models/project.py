# coding: utf-8
import datetime
from ._base import db


class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(50))
    bugget = db.Column(db.String(50))
    period = db.Column(db.String(50))
    desc = db.Column(db.Text)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100))
    created_at = db.Column(db.DateTime, default=datetime.datetime.now)

    def __repr__(self):
        return '<Project %s>' % self.id