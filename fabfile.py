from fabric.api import run, env, cd, prefix
from tuistudio import config


def deploy():
    env.host_string = config.HOST_STRING
    with cd('/var/www/tuistudio'):
        run('git pull')
        run('bower install --allow-root')
        run('bower update --allow-root')
        with prefix('source venv/bin/activate'):
            run('pip install -r requirements.txt')
        run('supervisorctl restart tuistudio')


def restart():
    env.host_string = config.HOST_STRING
    run('supervisorctl restart tuistudio')