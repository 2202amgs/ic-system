'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b79214be8377ba8e980e26fc8af4b370",
".git/config": "e72c273b80b102e80ded33db104a6886",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bee83dcf3ead45a96fb9df248bd9f55b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3dee5f379a8ada348cc24eaf85102900",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cffb86649f521c378e44157b741686c7",
".git/logs/refs/heads/main": "4c4b79de5ddca4dee32c89ad15dc40cf",
".git/logs/refs/remotes/origin/main": "be42a5102c38155ce7135be18c6e25c8",
".git/objects/03/db45f7dfb7afb04b49cb48b74544e842bb699e": "fce8110111c55b9c17b71d16511c849f",
".git/objects/05/fc0f8d62c86d7421623effd7091f5610e3eca8": "6a6ff57b1e19c1f3dff8bb8b56dd5141",
".git/objects/07/94a5fd8adb6f9fc523a023403a5ad22e5dec28": "1a3c4ccb34fa75cb55c0c69f8d55201d",
".git/objects/08/e7a18152bcc84e2a32204dbd82bc8feb2c4fa1": "5cae11bf1adbd4a49021968573150d36",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/12/0ddd2b3c38e2ba46ba293f351b3527f8cce79b": "63ea4079af3c15e9a0b75dfd4edbb855",
".git/objects/18/03638e27e1b7e83fb9686c61ed3b2a07c82bd7": "9169f77d7261e1698e64e7565bf5edd5",
".git/objects/1b/9ccadb2b567583f4a0e4e34de2d33c4ffae14c": "f0a6ab1eb602c33bddeff3d6a0aec744",
".git/objects/21/0ff52055f9171afde0b67048140e635b99a206": "5b00e48e1c5aee484cf3f94534f250c4",
".git/objects/23/7da50f92acc1deec2d2389be80c76b7028b570": "53697271892e3a068af68a23a2904ee0",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/addcfb79038e97cbe5d448977bce28a11019dd": "082d8865950b8b386138ea9f24710211",
".git/objects/2b/e22213ea954dec1f5eb32b463a5f099208e177": "f9ef7dfa1617db5292bccafccb10226e",
".git/objects/2c/63931e74998601f3b55fecc97b35ba499df970": "4bff75075a4cbea82678e07eaa04ba20",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/7523b2add288d58eb4ab00a7bbdc9bc9c67053": "78d0007b48be9d135e03cff1213bad60",
".git/objects/34/5b7fe0e9834f7d76d378fbab1b732f9e05712c": "2ceed1f90744faa4dc2fd34f3f744707",
".git/objects/34/91a21eba828f32569ffa224b1d5fde87602297": "171c576e7807bce1f7df5cd88c54f0d7",
".git/objects/35/12aa737fa83b8c6e75108364ff7fdb4a4cf1a8": "4ef2d13d73ef08c99b8f5398d057f243",
".git/objects/3b/ea1cd1295a05150c76a2042c7fbc3c54dc464b": "f7989cbdddc1d9c86a62c1ea742fed19",
".git/objects/3c/0ece3222acf908d80b25bd0dea395e25e672f7": "5816eecc1e71268937442a0fad5ad5b1",
".git/objects/3d/ffe90cdd6ea2ef2d2858012a0878397292401a": "c119cc2d14fe30089e52db7415f3afbd",
".git/objects/47/58d9af24dfecf6c209e71d118a43552119df2a": "2ea2c79c67cba6bd634c6f6d6e0d1c51",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/906849044fd3e9fbb25a7e61ea43449d86702b": "29028c38aaa0bb9701b26d6409eceaaa",
".git/objects/4f/d28ccc0a16a78fa0abdc08d27acddddba0dbab": "c4df53ec509782342daf3dcead80ba64",
".git/objects/51/9e12ffecaca9820ee288adf3f8b4bf96be986f": "33606e586c8d062b71d36fe5b1563c80",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/54/f93433138613b618a638a35d4d556e65045b49": "57b6288f415b1b87695d28fda282d802",
".git/objects/60/f725c889433d396cf1e57c4ec78b8ef5e0aa07": "ffcc651b840a4d2d8ceb678aa7e48714",
".git/objects/62/5de595f054d95573dcf2b3e79ccaed422e7d95": "f09723cf33f8dbb32aceadf69c99a7d5",
".git/objects/67/945ec7d3aab3850a2fb367da730c34bce65d7f": "9e3c07dfe0f72deff9250651a65c8538",
".git/objects/6f/d8e4f8bbecd2534295426f4b7e551e9cf33b98": "10560e938d67086cc4be51dd86214003",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/936fa25fcb0b1477e69b3da4f05c51b2f84cbd": "5b4a1a1c7008c0f107e988b0e67dada1",
".git/objects/77/f128fb7ccd8a3e4d72baab6a475bd4de4c7fdb": "753e852d80d29a7216d915c5cd3058ef",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/9986445776635b2831ce887da4ea03ef27bb1a": "4699413aafa67f771d2fbf7c7376132f",
".git/objects/7e/1a7283d92698859142494777b97ac84feb6a39": "90fc775d483edd7eca1bf4c027dff0f8",
".git/objects/82/4391f9ae693ac67bd9fb9ca5a8e6be87081e02": "31c3614edb99edd1ba00616ced1e5ebb",
".git/objects/84/b8eb313d219922e39442e5b61dc0e12da39722": "fea75fee969024df7056a3fc669834ec",
".git/objects/88/2ba0b07b30e58520e8982d9a22276e0c824042": "99670e3cd60805ed166c62c68004a41b",
".git/objects/88/f62835e3749a76aefdda500f0f0ddcac2d84af": "e9819e646ef4f897c35940c5513d0c61",
".git/objects/89/8c454fb6fe50c7f05cdc2db89df05001d7789a": "f59660eb83869db55bb29a29b3834420",
".git/objects/8c/a53f42413de38977a3d21b38b4bbe92777fd26": "7af5f47d1837c17124a8fe1fc609f18d",
".git/objects/93/1ee617111c7e87f508be0924fc85205e719049": "c8178394b9a902ddcb1b3afcfbdebea4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/ace208b5b67ad6ee2bab8cfbed020baec2e669": "5ded1692ef7570268e5f6c8c733edfb8",
".git/objects/b8/f215cb836030cf02e9d72e786cf2d6d1238822": "d9883ab63f3ffcdc9bd36a6de2af7520",
".git/objects/bf/df19bb6728a9db2592e9bb8a84dfcaf840a811": "9d96d7634d9e214e8ac80a4ba0a17921",
".git/objects/c0/206dae6b85e345803757dc03eeb32a220e3bb9": "82be370ef986701721233b7871d67dd4",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c7/ce672819b32defb092455549d43cfdc9f96554": "d8dc92b74d428a6810053a627cc76238",
".git/objects/ca/527968b8667e51f5d9b308956ac791ebf2c286": "ac82e0f27a96de114246ab995446a836",
".git/objects/cc/c05cd2d0d15144a92a395512f8beaa0fd2a9a6": "8d278b54cbc3f4b10d45bfff3f974663",
".git/objects/cc/ca88af7dcc30819a4ed746685d45e641bbfef3": "64aeee6b98fa33163f8d51d8fcfa0f2d",
".git/objects/ce/376b7a31e7bb74aee0d14ce81ee1ef20a101e4": "7a4626bc9987b9e9e532a5e7ca8bb8e8",
".git/objects/d2/c3230d733037c0a7bd0a1298cce11e8463dbb3": "e9c6a04f956f0fc08b667632800c2134",
".git/objects/d6/06c0a1d35ec14a0b3ac9581787af5b9405c071": "f6b90007af574b4f960e673d59c39ab2",
".git/objects/d8/64a1b136d624574e97cab9440d03ce2c70c667": "54919578de198621b071a28793add888",
".git/objects/dd/aafc09c2bb6ea55f5e0730c27ef7b457dec0b6": "e694853d8b3ccb96fff5648160855383",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/eebed46665071307c5dff3fca405e6391c1ca5": "1cf299bdd5b4ba603a861025e4e72aca",
".git/objects/ec/2be79262725d92e45c3dbd9536af1203e11846": "fb545ecff82155febbb92e36e8f2e608",
".git/objects/ed/6c4b5520602235790315865ed925dbce196ef6": "671531ab07f548acca53f01c61d8b25c",
".git/objects/ef/e670d347e9f702532f063738cf24a6fb75cd2b": "701d41cd5fa4472fc85f3ee245df8244",
".git/objects/fb/8cb294a25c94c3d1b573cfa68a61dc351c2ee3": "48a67175217e1f8218cba4605dc78901",
".git/ORIG_HEAD": "fe3e29f12be74de9d00192f0c775bdd7",
".git/refs/heads/main": "81dda3217bf6a3d3b2488683e9a768a3",
".git/refs/remotes/origin/main": "81dda3217bf6a3d3b2488683e9a768a3",
"assets/AssetManifest.json": "2d38d68eb5415ca85e5744d7235e3e5b",
"assets/assets/%25D9%2586%25D8%25A7%25D8%25B5%25D8%25B1.png": "6d2be076541a309d591dddf40d522826",
"assets/assets/1.jpg": "96eb2861cc791c643eb91d2e4c09cacd",
"assets/assets/1_1.jpg": "8f40335acc757f7281b50fa2f1f5332c",
"assets/assets/2_2.jpg": "1e0ad1e4649debe8c6959f030a8ad18a",
"assets/assets/2_2.png": "1e0ad1e4649debe8c6959f030a8ad18a",
"assets/assets/3_3.jpg": "526c32154ba518b66d17cacc271eaea1",
"assets/assets/4_4.jpg": "0b446a84debbb3043e4701ec3dd36d76",
"assets/assets/5_5.jpg": "35ed2de6effd54ea49abc2bd705bbb7e",
"assets/assets/alahly.jpg": "8e27c7ff362d4a9e96aaf34ed5d0b359",
"assets/assets/bank%2520misr.png": "4f5690aa92fa3c8bfe5eb99c725bba94",
"assets/assets/cairo.jpg": "9ab24dfab8c4941dafdab008661ac7c0",
"assets/assets/cib.jpg": "ce7da0da16528c8c8fc4ed3ea7f33f6d",
"assets/assets/eskan.jpg": "581cc810d47ef0a8a834d3fc9748b455",
"assets/assets/fonts/jannah.ttf": "0655ac2529565b93080fef53a0e85ffe",
"assets/assets/logo.jpg": "451a5a290700a28c8576e669dcb3d0bd",
"assets/assets/logo.png": "451a5a290700a28c8576e669dcb3d0bd",
"assets/assets/m.jpg": "2cadfab9eb7c1fc282885b130b6a0811",
"assets/assets/p.pdf": "fc58fd19703db83ac7b95ebefd78945d",
"assets/assets/ss.jpg": "113a453281b87f71115ec99486937106",
"assets/assets/zra3i.jpg": "fa2a2793dc29c2fa8e49483e0f44522a",
"assets/FontManifest.json": "eab1a378e61cec69e059b97f654dc483",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "821d6daec9a739e555ec743d3e1cd259",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "e2eee463bfecaf90979b58b2106308e2",
"icons/Icon-192.png": "506dd554171fa7dabb9e4506b619f46a",
"icons/Icon-512.png": "db43efa40fb0ab965239f3cd3c08be6d",
"icons/Icon-maskable-192.png": "0f0350a5cf551038c5a97e8c73ff1b0a",
"icons/Icon-maskable-512.png": "da28bd1e3efb40b9de87fb4e994f6afe",
"index.html": "857ce94d274c040443b2af4b2257ae27",
"/": "857ce94d274c040443b2af4b2257ae27",
"main.dart.js": "d8301250c55e62c1c6a27911f58a4739",
"manifest.json": "c864079c9a8c7f207e9b7eec27ed6357",
"splash/img/dark-1x.png": "e6308e35471023ee6c19b85656c44bf8",
"splash/img/dark-2x.png": "87062eaf1e89025eb6bf97c365dd1e55",
"splash/img/dark-3x.png": "ca46241ec3d62fe864cd1c95c915b016",
"splash/img/dark-4x.png": "d2184d1c3a40bd4dff51c623b989fac1",
"splash/img/light-1x.png": "e6308e35471023ee6c19b85656c44bf8",
"splash/img/light-2x.png": "87062eaf1e89025eb6bf97c365dd1e55",
"splash/img/light-3x.png": "ca46241ec3d62fe864cd1c95c915b016",
"splash/img/light-4x.png": "d2184d1c3a40bd4dff51c623b989fac1",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "3979c95d9a8eb983d84ecdf10cec8e71",
"version.json": "b784914e4b91bd09b0c9b47f2664e85c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
