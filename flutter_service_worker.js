'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8e8aac3714c423f19557a8569acf2bc0",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "fd94fb1435bce258f1742d27861069a7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/14/cea41f99e2df229303df6938bbc080179311e5": "db29bbc2222b3f08071f0bf5abedfa78",
".git/objects/16/46d2d372fa9e7019ac6d98a4b9f27631cf00f9": "38f31d741ec69a5406ad88df34178d73",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/64a3fabcd6cdf9fa1ba5f25b923de0ab3c01c5": "d1fbd8f36c1b56402b60c406d3c142c8",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/33/45c2e2699f752f00f7f24a90e682a3012451bc": "dedbb379499dc19344ea5020f67e74f8",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/39/298ce80f5a7960b5e78fb5882a26932a1a1214": "eac78fff274309e53050b007b95f404d",
".git/objects/39/5e99c9d45220e73c95af07a0b1364590c612e4": "d18dac2bd92457bc08efb2963d67869c",
".git/objects/41/6c59d722c15279d58005ccd9fef066ca5f133f": "343021ce30946fa257cccaa24f324cac",
".git/objects/4a/7d6c4f12f6912976a4701fce7e019734a2a107": "6387210661c8a1ea0cd6edb4df89ebf4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/53/6407d5da4e5cffb01a4b048564eb3804016046": "52cd08e82feab903dc5a7fd7e6709478",
".git/objects/54/bde964e987992450409a3c20bb3444e9766e47": "a5eae21fc2ccbb46cef9cead1d53c7e0",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/6c/7cb19062e0e9c4445c469d4429aa5ff021ae7e": "adb53cf87ad10ea19e197634695027e9",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/155896ea0401fcf1258c76579ff9414313ebe5": "d633b9530d776da19164eaf34cddbac7",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/9f/aacbfc83e3c2bcdf12d436aca593723bfee06e": "b84d20cc144280e8c14f477946df5fd4",
".git/objects/a3/d6c650bbe25aaa2603b0df439b4df4d02853e7": "08b82833858184f51b1866e1b5932adc",
".git/objects/a6/0f31d704707f6fc71e2a3eb6ab5c4ea5a7ad7a": "8c058198e5d8e578d5a817f3a77c69fe",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b1/bf2f3aaa2b6c1dd0ccdb35af4cdc6f5e144dd5": "d9c99ed8fe1c93332f7e9cc4fefefe8c",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c4/4085490b476809190ff9e5a5e1705a8282c207": "357468072c367f182999d7c7bd8e1c2c",
".git/objects/c6/777997ba2e326516f8f219564aa41653c35cbf": "79cffb44212b2a276ac756d2044ff5b9",
".git/objects/c9/96c0e407cf1f3c25b48df907b49c3b59f9c286": "3a1de62987cf784a49958ac2982efcc9",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/d43923b1e938d40cf4c8368791d3f4c45eb652": "5dd6bdefa0bf98fd15ef85e30729a6ee",
".git/objects/de/3712a05122064e187c51b696b3c9e612084df0": "a9bf690b4bdc6e518dccbc63c8411e3a",
".git/objects/e7/0d434e2738af15b9d1b7d727e7b191261959c1": "90a421c91570dc510a1df90bd4c96557",
".git/objects/e9/d9a67ca4b5dbbc212fab62425f3e3483f5f781": "d11ac52b3b002f1d9cd262e7e5533823",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
".git/objects/f3/dd8ef97d044cd899f13c205fdc26baa394296d": "9163b18d4d4d3566823edb304e4f2bdb",
".git/objects/f8/d85cf8c141b80f69b7509a40d1bd55625a4a1c": "048686a1a6d7de6e370bdfbcde635f9d",
"assets/AssetManifest.bin": "a654b971f56a84b7af1e74e0041805d8",
"assets/AssetManifest.json": "89a90aada5859d07b340a1af6df7a301",
"assets/assets/images/HomeBackGroundImage.png": "6809e5a02037aafc3e94ab99c96a4c48",
"assets/assets/images/me.jpg": "36c0f3cbc52940d0ce8bc15d9b8564df",
"assets/assets/images/menew.png": "f8935d1e569159f7e10cb479e0d71ed8",
"assets/assets/images/portfolio.png": "e24c134f6a1c840360d2ad03ab2b15ca",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "92f86c9feb3245d9d4d730f10600b2a7",
"assets/NOTICES": "80086649fb8517ca3113e9013ca5272b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "e882350d8ef90f25e138a6a529f8f428",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "6fc322bfa85032bb092ab859e2339680",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b0fecb2d11e52c67a0ce34eeb81653a4",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e196ea4e3fc256656e8d6500f999c468",
"/": "1d7f2f8431c2b890b0908017af74a8f7",
"main.dart.js": "f98b373bdd9a3d22f952248824ffaeb2",
"manifest.json": "07f66434d604ccac1b4d5244f35598aa",
"MyPortfolio/.git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
"MyPortfolio/.git/config": "a6f5e43f78bccb99474220d04514b3f5",
"MyPortfolio/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"MyPortfolio/.git/FETCH_HEAD": "ae5c8180e10b4644b5842704b0cab5bf",
"MyPortfolio/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"MyPortfolio/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"MyPortfolio/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"MyPortfolio/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"MyPortfolio/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"MyPortfolio/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"MyPortfolio/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"MyPortfolio/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"MyPortfolio/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"MyPortfolio/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"MyPortfolio/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"MyPortfolio/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"MyPortfolio/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"MyPortfolio/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"MyPortfolio/.git/index": "3c0dfb47610e13f9eaa888773ae3bfe5",
"MyPortfolio/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"MyPortfolio/.git/logs/HEAD": "2e9b82c3582d0a0edcdc506ee93ee275",
"MyPortfolio/.git/logs/refs/heads/main": "2e9b82c3582d0a0edcdc506ee93ee275",
"MyPortfolio/.git/logs/refs/remotes/origin/HEAD": "7b51915029b24b02b63df29484a35f4d",
"MyPortfolio/.git/logs/refs/remotes/origin/main": "3c6fd3b9a5798b8bfa725415f813696f",
"MyPortfolio/.git/objects/00/55a65c0fb619807ad15b22794a2e2072f70a15": "3f27f9d84b1576f4d0020977d6629e0d",
"MyPortfolio/.git/objects/02/0ff813a98e469d3b03bd42b8a3b5e778cb61e8": "8567aca09f2c0d5d9ed6d03498da8c7b",
"MyPortfolio/.git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
"MyPortfolio/.git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
"MyPortfolio/.git/objects/0b/c92a8a13302cc0107a9a962d7d6b7089ffaadb": "7846bf7709e9def818ae76a71e8ff0a4",
"MyPortfolio/.git/objects/10/880d84d730fdc6bbea7325586f4940da663008": "677a05a2615697b618dfcdccfc5eb57c",
"MyPortfolio/.git/objects/14/cea41f99e2df229303df6938bbc080179311e5": "db29bbc2222b3f08071f0bf5abedfa78",
"MyPortfolio/.git/objects/16/46d2d372fa9e7019ac6d98a4b9f27631cf00f9": "38f31d741ec69a5406ad88df34178d73",
"MyPortfolio/.git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
"MyPortfolio/.git/objects/1e/64a3fabcd6cdf9fa1ba5f25b923de0ab3c01c5": "d1fbd8f36c1b56402b60c406d3c142c8",
"MyPortfolio/.git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
"MyPortfolio/.git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
"MyPortfolio/.git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
"MyPortfolio/.git/objects/24/d6a90a6490932a800d85fe343872e09b517489": "6e4e0aabcd7872372421c075de9175e5",
"MyPortfolio/.git/objects/2c/41a69b18abda4c1661b403a2eb1b08bc42f6ee": "70b52e888304b6911079519c25c6c4a3",
"MyPortfolio/.git/objects/2f/edd1f64d51f04bd06a07efa3dc7a1ff9c0e47c": "76bf4df26b02f72e5d682a4baf601f76",
"MyPortfolio/.git/objects/32/4e4bf7d9267439553380bf6687c702bc4f2edc": "f9e4a1e498e21f4ac23053a42ae5fe02",
"MyPortfolio/.git/objects/33/45c2e2699f752f00f7f24a90e682a3012451bc": "dedbb379499dc19344ea5020f67e74f8",
"MyPortfolio/.git/objects/34/58c634971116c11babdf9cec085a23361bc341": "948ef9ad15a41a329ef0b6f1130b5fc5",
"MyPortfolio/.git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
"MyPortfolio/.git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
"MyPortfolio/.git/objects/39/298ce80f5a7960b5e78fb5882a26932a1a1214": "eac78fff274309e53050b007b95f404d",
"MyPortfolio/.git/objects/39/5e99c9d45220e73c95af07a0b1364590c612e4": "d18dac2bd92457bc08efb2963d67869c",
"MyPortfolio/.git/objects/3b/cd9e2da90fb4b99a13abde3063848cc2f4dd4b": "dd7cca888491c1212b7ac4c36e0bc9c8",
"MyPortfolio/.git/objects/3c/4764fffaa2ee2c8152e9bfd6dffa6160d763cc": "dda6c10a601aa14307d6ac22425e7612",
"MyPortfolio/.git/objects/41/6c59d722c15279d58005ccd9fef066ca5f133f": "343021ce30946fa257cccaa24f324cac",
"MyPortfolio/.git/objects/4a/7d6c4f12f6912976a4701fce7e019734a2a107": "6387210661c8a1ea0cd6edb4df89ebf4",
"MyPortfolio/.git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
"MyPortfolio/.git/objects/4c/b02b84f645cfc478038b254bf1cd0445c37c5a": "6711a3f55d34686f5d766762e5eb77b6",
"MyPortfolio/.git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
"MyPortfolio/.git/objects/52/96196a2422ee5812babee8686b8516be879bab": "6b22d8a281d34b0ed807714e77b403c5",
"MyPortfolio/.git/objects/53/6407d5da4e5cffb01a4b048564eb3804016046": "52cd08e82feab903dc5a7fd7e6709478",
"MyPortfolio/.git/objects/54/409b7f3eae8ebe4bb54975a3668a40a8f8f82f": "6a3cbdee9b3e348081eead119ca90af5",
"MyPortfolio/.git/objects/54/bde964e987992450409a3c20bb3444e9766e47": "a5eae21fc2ccbb46cef9cead1d53c7e0",
"MyPortfolio/.git/objects/56/49d255895604f5c5be12070024af74bb557236": "c7af7a47b5201f40c1ced412c98799e0",
"MyPortfolio/.git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
"MyPortfolio/.git/objects/6a/ea180824ddd13ef3460f615d2a1e144b72b314": "7ce603a83d5779b30a33e52818c65309",
"MyPortfolio/.git/objects/6c/7cb19062e0e9c4445c469d4429aa5ff021ae7e": "adb53cf87ad10ea19e197634695027e9",
"MyPortfolio/.git/objects/6f/4af922639f27c1e5f751de480df246091d7f46": "2d379c11f0fe3b7326c1ebc8b0a59eb8",
"MyPortfolio/.git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
"MyPortfolio/.git/objects/7e/eecf4ca8736731ea6ba601823493c455a99a89": "4ce9bbf6e569264c216da8c8df6e6dfc",
"MyPortfolio/.git/objects/85/6030d4f7afbf871424eec918c8d60d6f836d81": "b58005b02b503d9549d1f11e87e49e6e",
"MyPortfolio/.git/objects/87/d52f5270efaad04d0ecc44a23c3493f6d49fae": "dcdf03784102eee2666e78a6cfd1dc28",
"MyPortfolio/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"MyPortfolio/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"MyPortfolio/.git/objects/8c/8b18235970a07b35517447cb1f5d327c658793": "7c59cca84ccf48eae8ce99bf570c2c29",
"MyPortfolio/.git/objects/8e/155896ea0401fcf1258c76579ff9414313ebe5": "d633b9530d776da19164eaf34cddbac7",
"MyPortfolio/.git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
"MyPortfolio/.git/objects/8f/e0ce4aa0d4539a7d8cf2a7c4fd147ba608c93a": "4d19449b42929ee443194c8c802f5772",
"MyPortfolio/.git/objects/9f/aacbfc83e3c2bcdf12d436aca593723bfee06e": "b84d20cc144280e8c14f477946df5fd4",
"MyPortfolio/.git/objects/a3/d6c650bbe25aaa2603b0df439b4df4d02853e7": "08b82833858184f51b1866e1b5932adc",
"MyPortfolio/.git/objects/a6/0f31d704707f6fc71e2a3eb6ab5c4ea5a7ad7a": "8c058198e5d8e578d5a817f3a77c69fe",
"MyPortfolio/.git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
"MyPortfolio/.git/objects/b1/bf2f3aaa2b6c1dd0ccdb35af4cdc6f5e144dd5": "d9c99ed8fe1c93332f7e9cc4fefefe8c",
"MyPortfolio/.git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
"MyPortfolio/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"MyPortfolio/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"MyPortfolio/.git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
"MyPortfolio/.git/objects/c1/8352aa585164aaee0b6b37c8892566da2f47b5": "8bdf9e13952f5bec41b0a5edf2bc8a14",
"MyPortfolio/.git/objects/c6/777997ba2e326516f8f219564aa41653c35cbf": "79cffb44212b2a276ac756d2044ff5b9",
"MyPortfolio/.git/objects/c9/2eaab0a43108d80f088e37b825f54cbf0ad563": "630fad1aa7e60ee0591cedd4b1f76ca3",
"MyPortfolio/.git/objects/c9/96c0e407cf1f3c25b48df907b49c3b59f9c286": "3a1de62987cf784a49958ac2982efcc9",
"MyPortfolio/.git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
"MyPortfolio/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"MyPortfolio/.git/objects/db/436ab71decd3cc3558aa00f4c584c68f8a65a7": "3a4fb5a3931d8fbfc5eb9b22852ebc26",
"MyPortfolio/.git/objects/dd/d43923b1e938d40cf4c8368791d3f4c45eb652": "5dd6bdefa0bf98fd15ef85e30729a6ee",
"MyPortfolio/.git/objects/de/3712a05122064e187c51b696b3c9e612084df0": "a9bf690b4bdc6e518dccbc63c8411e3a",
"MyPortfolio/.git/objects/e7/0d434e2738af15b9d1b7d727e7b191261959c1": "90a421c91570dc510a1df90bd4c96557",
"MyPortfolio/.git/objects/e8/937b81ee76603ab64ec71df48d74094e9b1c28": "1ec565f9d16cba453dc6cb0583d9250c",
"MyPortfolio/.git/objects/e9/d9a67ca4b5dbbc212fab62425f3e3483f5f781": "d11ac52b3b002f1d9cd262e7e5533823",
"MyPortfolio/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"MyPortfolio/.git/objects/ef/1eb4c7b45e54d2dd267a2c41735447f829b51b": "cb822f9c2848e517eb09bd41d921691a",
"MyPortfolio/.git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
"MyPortfolio/.git/objects/f3/dd8ef97d044cd899f13c205fdc26baa394296d": "9163b18d4d4d3566823edb304e4f2bdb",
"MyPortfolio/.git/objects/f8/d85cf8c141b80f69b7509a40d1bd55625a4a1c": "048686a1a6d7de6e370bdfbcde635f9d",
"MyPortfolio/.git/ORIG_HEAD": "144d4df10cf9ab8ddc4f60d1c1d6b0b3",
"MyPortfolio/.git/refs/heads/main": "0dbd711d5b5cd9808e94fa81ac259f2f",
"MyPortfolio/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"MyPortfolio/.git/refs/remotes/origin/main": "0dbd711d5b5cd9808e94fa81ac259f2f",
"MyPortfolio/assets/AssetManifest.bin": "a654b971f56a84b7af1e74e0041805d8",
"MyPortfolio/assets/AssetManifest.json": "89a90aada5859d07b340a1af6df7a301",
"MyPortfolio/assets/assets/images/HomeBackGroundImage.png": "6809e5a02037aafc3e94ab99c96a4c48",
"MyPortfolio/assets/assets/images/me.jpg": "36c0f3cbc52940d0ce8bc15d9b8564df",
"MyPortfolio/assets/assets/images/menew.png": "f8935d1e569159f7e10cb479e0d71ed8",
"MyPortfolio/assets/assets/images/portfolio.png": "e24c134f6a1c840360d2ad03ab2b15ca",
"MyPortfolio/assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"MyPortfolio/assets/fonts/MaterialIcons-Regular.otf": "92f86c9feb3245d9d4d730f10600b2a7",
"MyPortfolio/assets/NOTICES": "80086649fb8517ca3113e9013ca5272b",
"MyPortfolio/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"MyPortfolio/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "e882350d8ef90f25e138a6a529f8f428",
"MyPortfolio/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "6fc322bfa85032bb092ab859e2339680",
"MyPortfolio/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b0fecb2d11e52c67a0ce34eeb81653a4",
"MyPortfolio/assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"MyPortfolio/canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"MyPortfolio/canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"MyPortfolio/canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"MyPortfolio/canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"MyPortfolio/canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"MyPortfolio/canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"MyPortfolio/canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"MyPortfolio/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"MyPortfolio/flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"MyPortfolio/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"MyPortfolio/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"MyPortfolio/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"MyPortfolio/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"MyPortfolio/index.html": "1d7f2f8431c2b890b0908017af74a8f7",
"MyPortfolio/main.dart.js": "f41e010928e9ff564e4996405952833d",
"MyPortfolio/manifest.json": "07f66434d604ccac1b4d5244f35598aa",
"MyPortfolio/version.json": "7367c9ca1c69727a8bb09a7d2d21d48c",
"version.json": "7367c9ca1c69727a8bb09a7d2d21d48c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
