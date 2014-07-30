# coding: utf-8
from flask import render_template, Blueprint, redirect, url_for
from ..forms import SigninForm
from ..utils.account import signin_user, signout_user
from ..utils.permissions import require_visitor

bp = Blueprint('account', __name__)


@bp.route('/signin', methods=['GET', 'POST'])
@require_visitor
def signin():
    """登入"""
    form = SigninForm()
    if form.validate_on_submit():
        signin_user()
        return redirect(url_for('admin.index'))
    return render_template('account/signin.html', form=form)


@bp.route('/signout')
def signout():
    """登出"""
    signout_user()
    return redirect(url_for('site.index'))
