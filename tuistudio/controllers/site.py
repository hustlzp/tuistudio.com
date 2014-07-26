# coding: utf-8
from flask import render_template, Blueprint, redirect, flash, url_for
from ..forms import BusinessForm

bp = Blueprint('site', __name__)


@bp.route('/')
def index():
    """首页"""
    return render_template('site/index.html')


@bp.route('/about')
def about():
    """关于页"""
    return render_template('site/about.html')


@bp.route('/business', methods=['GET', 'POST'])
def business():
    """Start Your Business"""
    form = BusinessForm()
    if form.validate_on_submit():
        flash('Got it! We will reply to you soon.')
        return redirect(url_for('.index'))
    return render_template('site/business.html', form=form)