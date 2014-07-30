# coding: utf-8
from flask import render_template, Blueprint, redirect, flash, url_for

bp = Blueprint('admin', __name__)


@bp.route('/')
def index():
    """管理首页"""
    return render_template('admin/index.html')


