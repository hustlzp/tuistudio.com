# coding: utf-8
from flask import render_template, Blueprint, redirect, flash, url_for
from ..models import Project

bp = Blueprint('admin', __name__)


@bp.route('/')
def index():
    """管理首页"""
    projects = Project.query.order_by(Project.created_at.desc())
    return render_template('admin/index.html', projects=projects)


