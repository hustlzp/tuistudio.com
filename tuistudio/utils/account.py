# coding: utf-8
from flask import session
from .. import config


def signin_user():
    """Sign in user"""
    session['user'] = config.ADMIN_USERNAME


def signout_user():
    """Sign out user"""
    session.pop('user', None)


def check_admin():
    return 'user' in session and session['user'] == config.ADMIN_USERNAME