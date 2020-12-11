const staticCacaheName = 'site-static';
const assets = [
	'/',
	'/index.html',
	'/js/app.js',
	'/js/ui.js',
	'/js/materialize.min.js',
	'/css/styles.css',
	'/css/materialize.min.css',
	'https://fonts.googleapis.com/icon?family=Material+Icons',
];

//install sevice worker
self.addEventListener('install', (evt) => {
	//console.log('service worker has been installed');
	evt.waitUntil(
		caches.open(staticCacaheName).then((cache) => {
			console.log('caching shell assets');
			cache.addAll(assets);
		}),
	);
});

//activate event
self.addEventListener('activate', (evt) => {
	//console.log('service worker has been activated');
});

//fetch event
self.addEventListener('fetch', (evt) => {
	//console.log('fetch event', evt);
});
