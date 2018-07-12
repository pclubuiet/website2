# These are the production settings. Particularly for heroku. At least for now.
# It is recommended that you don't touch these.

from .settings import *

STATICFILES_DIRS += [os.path.join(BASE_DIR, "assets"),]

WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'bundles/',
        'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats.prod.json'),
    }
}