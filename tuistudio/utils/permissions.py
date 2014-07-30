# coding: utf-8
from functools import wraps
from flask import redirect, url_for, flash
from .account import check_admin


def require_visitor(func):
    """Check if no user login"""

    @wraps(func)
    def decorator(*args, **kwargs):
        if check_admin():
            return redirect(url_for('admin.index'))
        return func(*args, **kwargs)

    return decorator


def require_admin(func):
    """Check if user login"""

    @wraps(func)
    def decorator(*args, **kwargs):
        if not check_admin():
            flash('此操作需要登录账户')
            return redirect(url_for('account.signin'))
        return func(*args, **kwargs)

    return decorator
