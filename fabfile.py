from fabric.api import run, env, cd, prefix
from tuistudio import config


def deploy():
    env.host_string = config.HOST_STRING
    with cd('/var/www/project'):
        run('git pull')
        run('bower install')
        run('bower update')
        with prefix('source venv/bin/activate'):
            run('pip install -r requirements.txt')
        run('sudo supervisorctl restart project')


def restart():
    env.host_string = config.HOST_STRING
    run('sudo supervisorctl restart project')