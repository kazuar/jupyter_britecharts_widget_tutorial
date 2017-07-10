from ._version import version_info, __version__

from .example import *

def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': 'jupyter_britecharts_widget_tutorial',
        'require': 'jupyter_britecharts_widget_tutorial/extension'
    }]
