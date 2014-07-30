# coding: utf-8
from flask import render_template, Blueprint, redirect, flash, url_for
from ..forms import BusinessForm
from ..models import db, Project

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
        project = Project(**form.data)
        # 若未选中任何值，则使用form.type的默认值
        if form.type.data:
            project.type = " + ".join(form.type.data)
        else:
            project.type = form.type.default
        db.session.add(project)
        db.session.commit()
        flash('Got it! We will reply to you soon.')
        return redirect(url_for('.index'))
    return render_template('site/business.html', form=form)