# coding: utf-8
from flask.ext.script import Manager
from flask.ext.migrate import Migrate, MigrateCommand
from tuistudio import app
from tuistudio.models import db

manager = Manager(app)

migrate = Migrate(app, db)
manager.add_command('db', MigrateCommand)


@manager.command
def run():
    """启动app"""
    app.run(debug=True, port=10000)


@manager.command
def test():
    pass


if __name__ == "__main__":
    manager.run()