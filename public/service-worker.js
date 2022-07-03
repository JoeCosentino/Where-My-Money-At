const APP_PREFIX = 'WhereMyMoneyAt-';
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;

const FILES_TO_CACHE = [
    './index.html',
    './js/index.js',
    './css/styles.css',
    '../routes/api.js'
];

self.addEventListener('install', function(e) {

})