p5.prototype.stroke = function() {
  this._renderer._setProperty('_strokeSet', true);
  this._renderer._setProperty('_doStroke', true);
  this._renderer.stroke.apply(this._renderer, invertColor(arguments));
  return this;
};

p5.prototype.fill = function() {
  this._renderer._setProperty('_fillSet', true);
  this._renderer._setProperty('_doFill', true);
  this._renderer.fill.apply(this._renderer, invertColor(arguments));
  return this;
};
const listTime = [{"d":"Jul 05 2013 14:32:28 GMT+0200","h":14,"m":32},{"d":"Aug 22 2013 14:04:08 GMT+0200","h":14,"m":4},{"d":"Aug 30 2013 12:27:56 GMT+0200","h":12,"m":27},{"d":"Sep 07 2013 14:20:39 GMT+0200","h":14,"m":20},{"d":"Oct 05 2013 18:12:26 GMT+0200","h":18,"m":12},{"d":"Oct 06 2013 14:02:56 GMT+0200","h":14,"m":2},{"d":"Oct 16 2013 10:12:29 GMT+0200","h":10,"m":12},{"d":"Oct 17 2013 17:37:09 GMT+0200","h":17,"m":37},{"d":"Oct 27 2013 14:11:39 GMT+0100","h":14,"m":11},{"d":"Nov 04 2013 11:50:52 GMT+0100","h":11,"m":50},{"d":"Nov 19 2013 20:39:19 GMT+0100","h":20,"m":39},{"d":"Nov 20 2013 10:42:04 GMT+0100","h":10,"m":42},{"d":"Nov 25 2013 10:59:22 GMT+0100","h":10,"m":59},{"d":"Nov 27 2013 16:43:40 GMT+0100","h":16,"m":43},{"d":"Dec 07 2013 11:56:45 GMT+0100","h":11,"m":56},{"d":"Dec 25 2013 11:45:47 GMT+0100","h":11,"m":45},{"d":"Jan 03 2014 11:15:31 GMT+0100","h":11,"m":15},{"d":"Jan 05 2014 17:29:42 GMT+0100","h":17,"m":29},{"d":"Jan 14 2014 09:47:03 GMT+0100","h":9,"m":47},{"d":"Jan 16 2014 10:43:46 GMT+0100","h":10,"m":43},{"d":"Jan 17 2014 10:55:08 GMT+0100","h":10,"m":55},{"d":"Jan 19 2014 15:57:39 GMT+0100","h":15,"m":57},{"d":"Feb 06 2014 12:15:35 GMT+0100","h":12,"m":15},{"d":"Feb 13 2014 16:03:30 GMT+0100","h":16,"m":3},{"d":"Feb 20 2014 10:18:57 GMT+0100","h":10,"m":18},{"d":"Feb 20 2014 10:19:07 GMT+0100","h":10,"m":19},{"d":"Feb 28 2014 11:15:28 GMT+0100","h":11,"m":15},{"d":"Mar 02 2014 22:24:57 GMT+0100","h":22,"m":24},{"d":"Mar 02 2014 22:24:59 GMT+0100","h":22,"m":24},{"d":"Mar 21 2014 10:20:52 GMT+0100","h":10,"m":20},{"d":"Mar 23 2014 17:06:55 GMT+0100","h":17,"m":6},{"d":"Apr 03 2014 11:37:22 GMT+0200","h":11,"m":37},{"d":"Apr 17 2014 20:46:26 GMT+0200","h":20,"m":46},{"d":"Apr 17 2014 20:47:28 GMT+0200","h":20,"m":47},{"d":"Apr 27 2014 20:13:32 GMT+0200","h":20,"m":13},{"d":"May 28 2014 13:08:39 GMT+0200","h":13,"m":8},{"d":"Jun 12 2014 21:28:28 GMT+0200","h":21,"m":28},{"d":"Jun 14 2014 14:53:03 GMT+0200","h":14,"m":53},{"d":"Jun 14 2014 14:53:47 GMT+0200","h":14,"m":53},{"d":"Jun 19 2014 13:51:49 GMT+0200","h":13,"m":51},{"d":"Jun 23 2014 13:18:12 GMT+0200","h":13,"m":18},{"d":"Jun 25 2014 17:42:33 GMT+0200","h":17,"m":42},{"d":"Jun 27 2014 08:31:04 GMT+0200","h":8,"m":31},{"d":"Jun 29 2014 16:20:19 GMT+0200","h":16,"m":20},{"d":"Jul 10 2014 13:20:02 GMT+0200","h":13,"m":20},{"d":"Jul 26 2014 12:39:44 GMT+0200","h":12,"m":39},{"d":"Sep 03 2014 15:00:11 GMT+0200","h":15,"m":0},{"d":"Sep 06 2014 18:37:33 GMT+0200","h":18,"m":37},{"d":"Sep 08 2014 17:47:50 GMT+0200","h":17,"m":47},{"d":"Sep 08 2014 17:48:11 GMT+0200","h":17,"m":48},{"d":"Sep 08 2014 20:33:23 GMT+0200","h":20,"m":33},{"d":"Sep 08 2014 20:59:11 GMT+0200","h":20,"m":59},{"d":"Sep 14 2014 22:03:40 GMT+0200","h":22,"m":3},{"d":"Sep 15 2014 15:42:42 GMT+0200","h":15,"m":42},{"d":"Sep 30 2014 11:21:18 GMT+0200","h":11,"m":21},{"d":"Oct 09 2014 14:31:59 GMT+0200","h":14,"m":31},{"d":"Nov 04 2014 11:00:08 GMT+0100","h":11,"m":0},{"d":"Nov 10 2014 19:55:40 GMT+0100","h":19,"m":55},{"d":"Nov 11 2014 14:35:44 GMT+0100","h":14,"m":35},{"d":"Nov 17 2014 16:09:18 GMT+0100","h":16,"m":9},{"d":"Nov 21 2014 08:09:37 GMT+0100","h":8,"m":9},{"d":"Nov 24 2014 15:24:27 GMT+0100","h":15,"m":24},{"d":"Nov 30 2014 17:30:08 GMT+0100","h":17,"m":30},{"d":"Dec 01 2014 18:11:35 GMT+0100","h":18,"m":11},{"d":"Dec 01 2014 18:18:22 GMT+0100","h":18,"m":18},{"d":"Dec 03 2014 15:19:38 GMT+0100","h":15,"m":19},{"d":"Dec 07 2014 13:03:49 GMT+0100","h":13,"m":3},{"d":"Dec 13 2014 10:01:55 GMT+0100","h":10,"m":1},{"d":"Dec 18 2014 15:36:08 GMT+0100","h":15,"m":36},{"d":"Dec 21 2014 15:54:25 GMT+0100","h":15,"m":54},{"d":"Dec 22 2014 14:31:35 GMT+0100","h":14,"m":31},{"d":"Dec 23 2014 22:13:09 GMT+0100","h":22,"m":13},{"d":"Jan 05 2015 16:39:54 GMT+0100","h":16,"m":39},{"d":"Jan 05 2015 16:58:33 GMT+0100","h":16,"m":58},{"d":"Jan 07 2015 21:05:13 GMT+0100","h":21,"m":5},{"d":"Jan 16 2015 08:40:55 GMT+0100","h":8,"m":40},{"d":"Jan 17 2015 10:56:57 GMT+0100","h":10,"m":56},{"d":"Jan 19 2015 10:26:57 GMT+0100","h":10,"m":26},{"d":"Jan 20 2015 17:28:06 GMT+0100","h":17,"m":28},{"d":"Jan 25 2015 12:25:34 GMT+0100","h":12,"m":25},{"d":"Feb 07 2015 15:16:34 GMT+0100","h":15,"m":16},{"d":"Feb 08 2015 11:06:54 GMT+0100","h":11,"m":6},{"d":"Feb 10 2015 12:45:30 GMT+0100","h":12,"m":45},{"d":"Feb 10 2015 13:42:14 GMT+0100","h":13,"m":42},{"d":"Feb 13 2015 19:01:46 GMT+0100","h":19,"m":1},{"d":"Feb 14 2015 19:04:30 GMT+0100","h":19,"m":4},{"d":"Mar 02 2015 12:09:56 GMT+0100","h":12,"m":9},{"d":"Mar 02 2015 12:10:18 GMT+0100","h":12,"m":10},{"d":"Mar 02 2015 22:55:24 GMT+0100","h":22,"m":55},{"d":"Mar 03 2015 17:08:00 GMT+0100","h":17,"m":8},{"d":"Mar 08 2015 11:15:12 GMT+0100","h":11,"m":15},{"d":"Mar 10 2015 20:44:50 GMT+0100","h":20,"m":44},{"d":"Mar 13 2015 09:29:09 GMT+0100","h":9,"m":29},{"d":"Mar 15 2015 18:31:14 GMT+0100","h":18,"m":31},{"d":"Mar 18 2015 14:08:23 GMT+0100","h":14,"m":8},{"d":"Mar 20 2015 20:47:30 GMT+0100","h":20,"m":47},{"d":"Apr 13 2015 12:30:10 GMT+0200","h":12,"m":30},{"d":"Apr 25 2015 16:00:40 GMT+0200","h":16,"m":0},{"d":"May 02 2015 19:05:47 GMT+0200","h":19,"m":5},{"d":"May 03 2015 08:27:19 GMT+0200","h":8,"m":27},{"d":"May 12 2015 14:30:50 GMT+0200","h":14,"m":30},{"d":"May 18 2015 18:12:01 GMT+0200","h":18,"m":12},{"d":"May 22 2015 20:35:13 GMT+0200","h":20,"m":35},{"d":"May 23 2015 14:21:23 GMT+0200","h":14,"m":21},{"d":"Jun 02 2015 12:49:00 GMT+0200","h":12,"m":49},{"d":"Jun 07 2015 10:03:10 GMT+0200","h":10,"m":3},{"d":"Jun 07 2015 15:53:45 GMT+0200","h":15,"m":53},{"d":"Jun 08 2015 10:18:23 GMT+0200","h":10,"m":18},{"d":"Jun 10 2015 16:34:27 GMT+0200","h":16,"m":34},{"d":"Jun 12 2015 12:29:31 GMT+0200","h":12,"m":29},{"d":"Jun 12 2015 21:52:43 GMT+0200","h":21,"m":52},{"d":"Jun 14 2015 09:59:52 GMT+0200","h":9,"m":59},{"d":"Jun 22 2015 17:31:56 GMT+0200","h":17,"m":31},{"d":"Jun 23 2015 17:58:09 GMT+0200","h":17,"m":58},{"d":"Jun 23 2015 19:29:01 GMT+0200","h":19,"m":29},{"d":"Jun 23 2015 21:38:53 GMT+0200","h":21,"m":38},{"d":"Jul 05 2015 19:22:39 GMT+0200","h":19,"m":22},{"d":"Jul 07 2015 21:36:34 GMT+0200","h":21,"m":36},{"d":"Jul 21 2015 15:08:08 GMT+0200","h":15,"m":8},{"d":"Jul 22 2015 09:41:32 GMT+0200","h":9,"m":41},{"d":"Jul 29 2015 19:02:14 GMT+0200","h":19,"m":2},{"d":"Aug 24 2015 12:00:37 GMT+0200","h":12,"m":0},{"d":"Aug 27 2015 16:02:39 GMT+0200","h":16,"m":2},{"d":"Sep 03 2015 20:17:41 GMT+0200","h":20,"m":17},{"d":"Sep 04 2015 15:31:26 GMT+0200","h":15,"m":31},{"d":"Sep 15 2015 11:27:07 GMT+0200","h":11,"m":27},{"d":"Sep 24 2015 19:30:08 GMT+0200","h":19,"m":30},{"d":"Oct 08 2015 12:58:21 GMT+0200","h":12,"m":58},{"d":"Oct 10 2015 20:45:36 GMT+0200","h":20,"m":45},{"d":"Oct 11 2015 13:34:33 GMT+0200","h":13,"m":34},{"d":"Oct 11 2015 15:02:11 GMT+0200","h":15,"m":2},{"d":"Oct 12 2015 14:43:26 GMT+0200","h":14,"m":43},{"d":"Oct 13 2015 12:21:14 GMT+0200","h":12,"m":21},{"d":"Oct 14 2015 13:53:21 GMT+0200","h":13,"m":53},{"d":"Oct 17 2015 21:20:50 GMT+0200","h":21,"m":20},{"d":"Oct 17 2015 22:34:12 GMT+0200","h":22,"m":34},{"d":"Oct 19 2015 00:08:32 GMT+0200","h":0,"m":8},{"d":"Oct 19 2015 15:36:01 GMT+0200","h":15,"m":36},{"d":"Oct 19 2015 15:42:00 GMT+0200","h":15,"m":42},{"d":"Oct 20 2015 14:13:43 GMT+0200","h":14,"m":13},{"d":"Oct 20 2015 14:44:13 GMT+0200","h":14,"m":44},{"d":"Oct 20 2015 23:20:49 GMT+0200","h":23,"m":20},{"d":"Oct 21 2015 12:24:42 GMT+0200","h":12,"m":24},{"d":"Oct 21 2015 18:52:07 GMT+0200","h":18,"m":52},{"d":"Oct 21 2015 23:14:04 GMT+0200","h":23,"m":14},{"d":"Oct 25 2015 21:53:05 GMT+0100","h":21,"m":53},{"d":"Oct 26 2015 16:24:48 GMT+0100","h":16,"m":24},{"d":"Oct 26 2015 23:26:51 GMT+0100","h":23,"m":26},{"d":"Oct 27 2015 23:34:11 GMT+0100","h":23,"m":34},{"d":"Oct 31 2015 19:03:17 GMT+0100","h":19,"m":3},{"d":"Nov 01 2015 18:55:38 GMT+0100","h":18,"m":55},{"d":"Nov 01 2015 18:57:32 GMT+0100","h":18,"m":57},{"d":"Nov 02 2015 17:08:25 GMT+0100","h":17,"m":8},{"d":"Nov 02 2015 17:08:47 GMT+0100","h":17,"m":8},{"d":"Nov 03 2015 16:35:39 GMT+0100","h":16,"m":35},{"d":"Nov 03 2015 17:51:50 GMT+0100","h":17,"m":51},{"d":"Nov 03 2015 17:54:23 GMT+0100","h":17,"m":54},{"d":"Nov 04 2015 12:16:35 GMT+0100","h":12,"m":16},{"d":"Nov 04 2015 12:40:10 GMT+0100","h":12,"m":40},{"d":"Nov 05 2015 12:12:21 GMT+0100","h":12,"m":12},{"d":"Nov 06 2015 23:02:27 GMT+0100","h":23,"m":2},{"d":"Nov 07 2015 18:21:07 GMT+0100","h":18,"m":21},{"d":"Nov 08 2015 03:05:47 GMT+0100","h":3,"m":5},{"d":"Nov 08 2015 03:06:39 GMT+0100","h":3,"m":6},{"d":"Nov 10 2015 14:54:23 GMT+0100","h":14,"m":54},{"d":"Nov 10 2015 18:31:31 GMT+0100","h":18,"m":31},{"d":"Nov 10 2015 22:24:09 GMT+0100","h":22,"m":24},{"d":"Nov 11 2015 15:06:00 GMT+0100","h":15,"m":6},{"d":"Nov 11 2015 17:08:33 GMT+0100","h":17,"m":8},{"d":"Nov 11 2015 19:23:38 GMT+0100","h":19,"m":23},{"d":"Nov 12 2015 02:20:32 GMT+0100","h":2,"m":20},{"d":"Nov 12 2015 13:41:52 GMT+0100","h":13,"m":41},{"d":"Nov 12 2015 18:45:14 GMT+0100","h":18,"m":45},{"d":"Nov 12 2015 18:48:04 GMT+0100","h":18,"m":48},{"d":"Nov 14 2015 13:24:39 GMT+0100","h":13,"m":24},{"d":"Nov 14 2015 15:47:33 GMT+0100","h":15,"m":47},{"d":"Nov 15 2015 14:25:36 GMT+0100","h":14,"m":25},{"d":"Nov 16 2015 10:26:06 GMT+0100","h":10,"m":26},{"d":"Nov 16 2015 12:14:05 GMT+0100","h":12,"m":14},{"d":"Nov 16 2015 12:24:39 GMT+0100","h":12,"m":24},{"d":"Nov 17 2015 14:30:43 GMT+0100","h":14,"m":30},{"d":"Nov 17 2015 22:23:46 GMT+0100","h":22,"m":23},{"d":"Nov 18 2015 11:49:21 GMT+0100","h":11,"m":49},{"d":"Nov 21 2015 12:55:00 GMT+0100","h":12,"m":55},{"d":"Nov 22 2015 13:13:24 GMT+0100","h":13,"m":13},{"d":"Nov 23 2015 19:23:03 GMT+0100","h":19,"m":23},{"d":"Nov 24 2015 19:03:09 GMT+0100","h":19,"m":3},{"d":"Nov 25 2015 01:12:06 GMT+0100","h":1,"m":12},{"d":"Nov 25 2015 13:49:22 GMT+0100","h":13,"m":49},{"d":"Nov 26 2015 10:16:34 GMT+0100","h":10,"m":16},{"d":"Nov 26 2015 12:45:26 GMT+0100","h":12,"m":45},{"d":"Nov 26 2015 12:48:37 GMT+0100","h":12,"m":48},{"d":"Nov 26 2015 23:13:35 GMT+0100","h":23,"m":13},{"d":"Nov 27 2015 20:22:48 GMT+0100","h":20,"m":22},{"d":"Nov 28 2015 22:56:33 GMT+0100","h":22,"m":56},{"d":"Nov 29 2015 16:39:46 GMT+0100","h":16,"m":39},{"d":"Nov 30 2015 10:29:23 GMT+0100","h":10,"m":29},{"d":"Dec 02 2015 14:12:33 GMT+0100","h":14,"m":12},{"d":"Dec 05 2015 12:47:48 GMT+0100","h":12,"m":47},{"d":"Dec 06 2015 12:49:18 GMT+0100","h":12,"m":49},{"d":"Dec 06 2015 14:00:56 GMT+0100","h":14,"m":0},{"d":"Dec 07 2015 22:12:49 GMT+0100","h":22,"m":12},{"d":"Dec 08 2015 12:12:21 GMT+0100","h":12,"m":12},{"d":"Dec 08 2015 16:03:43 GMT+0100","h":16,"m":3},{"d":"Dec 08 2015 16:12:33 GMT+0100","h":16,"m":12},{"d":"Dec 08 2015 17:51:17 GMT+0100","h":17,"m":51},{"d":"Dec 09 2015 11:07:15 GMT+0100","h":11,"m":7},{"d":"Dec 09 2015 11:10:09 GMT+0100","h":11,"m":10},{"d":"Dec 09 2015 13:17:09 GMT+0100","h":13,"m":17},{"d":"Dec 09 2015 13:45:22 GMT+0100","h":13,"m":45},{"d":"Dec 09 2015 16:12:04 GMT+0100","h":16,"m":12},{"d":"Dec 09 2015 16:17:14 GMT+0100","h":16,"m":17},{"d":"Dec 09 2015 17:01:33 GMT+0100","h":17,"m":1},{"d":"Dec 10 2015 10:25:06 GMT+0100","h":10,"m":25},{"d":"Dec 10 2015 17:42:16 GMT+0100","h":17,"m":42},{"d":"Dec 11 2015 12:34:32 GMT+0100","h":12,"m":34},{"d":"Dec 12 2015 16:40:53 GMT+0100","h":16,"m":40},{"d":"Dec 12 2015 22:29:46 GMT+0100","h":22,"m":29},{"d":"Dec 13 2015 12:53:04 GMT+0100","h":12,"m":53},{"d":"Dec 14 2015 23:50:35 GMT+0100","h":23,"m":50},{"d":"Dec 17 2015 11:35:05 GMT+0100","h":11,"m":35},{"d":"Dec 17 2015 15:37:51 GMT+0100","h":15,"m":37},{"d":"Dec 17 2015 17:07:05 GMT+0100","h":17,"m":7},{"d":"Dec 17 2015 17:13:53 GMT+0100","h":17,"m":13},{"d":"Dec 17 2015 18:01:00 GMT+0100","h":18,"m":1},{"d":"Dec 18 2015 02:18:08 GMT+0100","h":2,"m":18},{"d":"Dec 19 2015 14:04:23 GMT+0100","h":14,"m":4},{"d":"Dec 20 2015 02:30:11 GMT+0100","h":2,"m":30},{"d":"Dec 20 2015 15:35:07 GMT+0100","h":15,"m":35},{"d":"Dec 25 2015 12:58:12 GMT+0100","h":12,"m":58},{"d":"Dec 26 2015 13:45:32 GMT+0100","h":13,"m":45},{"d":"Dec 27 2015 11:40:54 GMT+0100","h":11,"m":40},{"d":"Jan 06 2016 17:08:50 GMT+0100","h":17,"m":8},{"d":"Jan 07 2016 14:46:41 GMT+0100","h":14,"m":46},{"d":"Jan 07 2016 15:13:26 GMT+0100","h":15,"m":13},{"d":"Jan 08 2016 13:05:41 GMT+0100","h":13,"m":5},{"d":"Jan 11 2016 12:47:55 GMT+0100","h":12,"m":47},{"d":"Jan 11 2016 13:45:56 GMT+0100","h":13,"m":45},{"d":"Jan 11 2016 17:25:16 GMT+0100","h":17,"m":25},{"d":"Jan 11 2016 22:41:14 GMT+0100","h":22,"m":41},{"d":"Jan 12 2016 15:30:32 GMT+0100","h":15,"m":30},{"d":"Jan 14 2016 22:10:07 GMT+0100","h":22,"m":10},{"d":"Jan 17 2016 12:27:23 GMT+0100","h":12,"m":27},{"d":"Jan 18 2016 15:19:06 GMT+0100","h":15,"m":19},{"d":"Jan 18 2016 17:26:47 GMT+0100","h":17,"m":26},{"d":"Jan 19 2016 17:59:48 GMT+0100","h":17,"m":59},{"d":"Jan 20 2016 19:04:59 GMT+0100","h":19,"m":4},{"d":"Jan 23 2016 00:50:36 GMT+0100","h":0,"m":50},{"d":"Jan 24 2016 11:10:03 GMT+0100","h":11,"m":10},{"d":"Jan 24 2016 21:11:09 GMT+0100","h":21,"m":11},{"d":"Jan 25 2016 19:24:32 GMT+0100","h":19,"m":24},{"d":"Jan 27 2016 11:28:45 GMT+0100","h":11,"m":28},{"d":"Jan 27 2016 14:54:27 GMT+0100","h":14,"m":54},{"d":"Jan 28 2016 12:46:58 GMT+0100","h":12,"m":46},{"d":"Jan 29 2016 17:14:29 GMT+0100","h":17,"m":14},{"d":"Jan 31 2016 13:44:55 GMT+0100","h":13,"m":44},{"d":"Jan 31 2016 16:18:36 GMT+0100","h":16,"m":18},{"d":"Jan 31 2016 17:25:28 GMT+0100","h":17,"m":25},{"d":"Feb 01 2016 16:31:32 GMT+0100","h":16,"m":31},{"d":"Feb 01 2016 18:40:44 GMT+0100","h":18,"m":40},{"d":"Feb 01 2016 20:11:10 GMT+0100","h":20,"m":11},{"d":"Feb 02 2016 15:56:33 GMT+0100","h":15,"m":56},{"d":"Feb 02 2016 23:57:13 GMT+0100","h":23,"m":57},{"d":"Feb 03 2016 11:58:07 GMT+0100","h":11,"m":58},{"d":"Feb 03 2016 12:02:02 GMT+0100","h":12,"m":2},{"d":"Feb 03 2016 14:48:51 GMT+0100","h":14,"m":48},{"d":"Feb 04 2016 19:31:31 GMT+0100","h":19,"m":31},{"d":"Feb 05 2016 13:03:14 GMT+0100","h":13,"m":3},{"d":"Feb 06 2016 15:50:53 GMT+0100","h":15,"m":50},{"d":"Feb 06 2016 16:33:46 GMT+0100","h":16,"m":33},{"d":"Feb 06 2016 20:55:39 GMT+0100","h":20,"m":55},{"d":"Feb 07 2016 04:37:14 GMT+0100","h":4,"m":37},{"d":"Feb 07 2016 18:42:48 GMT+0100","h":18,"m":42},{"d":"Feb 07 2016 22:29:30 GMT+0100","h":22,"m":29},{"d":"Feb 07 2016 22:50:51 GMT+0100","h":22,"m":50},{"d":"Feb 08 2016 00:16:34 GMT+0100","h":0,"m":16},{"d":"Feb 10 2016 10:23:52 GMT+0100","h":10,"m":23},{"d":"Feb 10 2016 16:16:00 GMT+0100","h":16,"m":16},{"d":"Feb 11 2016 10:23:49 GMT+0100","h":10,"m":23},{"d":"Feb 11 2016 17:08:08 GMT+0100","h":17,"m":8},{"d":"Feb 11 2016 20:03:54 GMT+0100","h":20,"m":3},{"d":"Feb 12 2016 11:59:45 GMT+0100","h":11,"m":59},{"d":"Feb 13 2016 13:08:17 GMT+0100","h":13,"m":8},{"d":"Feb 14 2016 11:28:47 GMT+0100","h":11,"m":28},{"d":"Feb 14 2016 13:22:08 GMT+0100","h":13,"m":22},{"d":"Feb 15 2016 07:43:00 GMT+0100","h":7,"m":43},{"d":"Feb 17 2016 14:16:10 GMT+0100","h":14,"m":16},{"d":"Feb 18 2016 13:26:01 GMT+0100","h":13,"m":26},{"d":"Feb 18 2016 14:43:40 GMT+0100","h":14,"m":43},{"d":"Feb 19 2016 09:51:38 GMT+0100","h":9,"m":51},{"d":"Feb 19 2016 11:36:22 GMT+0100","h":11,"m":36},{"d":"Feb 20 2016 12:41:02 GMT+0100","h":12,"m":41},{"d":"Feb 21 2016 18:49:57 GMT+0100","h":18,"m":49},{"d":"Feb 28 2016 14:54:07 GMT+0100","h":14,"m":54},{"d":"Feb 29 2016 19:28:37 GMT+0100","h":19,"m":28},{"d":"Feb 29 2016 21:28:34 GMT+0100","h":21,"m":28},{"d":"Mar 02 2016 17:49:26 GMT+0100","h":17,"m":49},{"d":"Mar 07 2016 00:50:48 GMT+0100","h":0,"m":50},{"d":"Mar 08 2016 07:55:46 GMT+0100","h":7,"m":55},{"d":"Mar 08 2016 11:19:45 GMT+0100","h":11,"m":19},{"d":"Mar 10 2016 20:40:46 GMT+0100","h":20,"m":40},{"d":"Mar 11 2016 09:43:59 GMT+0100","h":9,"m":43},{"d":"Mar 11 2016 09:58:15 GMT+0100","h":9,"m":58},{"d":"Mar 11 2016 20:28:05 GMT+0100","h":20,"m":28},{"d":"Mar 17 2016 10:27:35 GMT+0100","h":10,"m":27},{"d":"Mar 17 2016 12:31:23 GMT+0100","h":12,"m":31},{"d":"Mar 17 2016 19:57:19 GMT+0100","h":19,"m":57},{"d":"Mar 26 2016 13:10:32 GMT+0100","h":13,"m":10},{"d":"Mar 30 2016 11:14:10 GMT+0200","h":11,"m":14},{"d":"Mar 30 2016 11:55:41 GMT+0200","h":11,"m":55},{"d":"Apr 02 2016 00:26:20 GMT+0200","h":0,"m":26},{"d":"Apr 02 2016 13:42:11 GMT+0200","h":13,"m":42},{"d":"Apr 03 2016 21:29:58 GMT+0200","h":21,"m":29},{"d":"Apr 08 2016 10:24:52 GMT+0200","h":10,"m":24},{"d":"Apr 08 2016 16:12:09 GMT+0200","h":16,"m":12},{"d":"Apr 09 2016 13:05:29 GMT+0200","h":13,"m":5},{"d":"Apr 11 2016 15:30:39 GMT+0200","h":15,"m":30},{"d":"Apr 11 2016 21:52:08 GMT+0200","h":21,"m":52},{"d":"Apr 11 2016 22:07:08 GMT+0200","h":22,"m":7},{"d":"Apr 13 2016 00:31:14 GMT+0200","h":0,"m":31},{"d":"Apr 13 2016 10:07:36 GMT+0200","h":10,"m":7},{"d":"Apr 16 2016 12:31:54 GMT+0200","h":12,"m":31},{"d":"Apr 17 2016 15:36:07 GMT+0200","h":15,"m":36},{"d":"Apr 17 2016 20:29:33 GMT+0200","h":20,"m":29},{"d":"Apr 18 2016 12:32:27 GMT+0200","h":12,"m":32},{"d":"Apr 18 2016 21:43:20 GMT+0200","h":21,"m":43},{"d":"Apr 20 2016 18:10:52 GMT+0200","h":18,"m":10},{"d":"Apr 21 2016 10:03:13 GMT+0200","h":10,"m":3},{"d":"Apr 21 2016 13:02:19 GMT+0200","h":13,"m":2},{"d":"Apr 21 2016 13:37:39 GMT+0200","h":13,"m":37},{"d":"Apr 22 2016 13:36:19 GMT+0200","h":13,"m":36},{"d":"Apr 22 2016 17:36:23 GMT+0200","h":17,"m":36},{"d":"Apr 22 2016 19:07:27 GMT+0200","h":19,"m":7},{"d":"Apr 24 2016 22:39:51 GMT+0200","h":22,"m":39},{"d":"Apr 25 2016 11:37:54 GMT+0200","h":11,"m":37},{"d":"Apr 29 2016 15:32:03 GMT+0200","h":15,"m":32},{"d":"Apr 30 2016 13:30:01 GMT+0200","h":13,"m":30},{"d":"May 01 2016 10:12:06 GMT+0200","h":10,"m":12},{"d":"May 03 2016 20:09:07 GMT+0200","h":20,"m":9},{"d":"May 04 2016 16:47:24 GMT+0200","h":16,"m":47},{"d":"May 08 2016 02:13:19 GMT+0200","h":2,"m":13},{"d":"May 11 2016 13:02:17 GMT+0200","h":13,"m":2},{"d":"May 11 2016 14:07:11 GMT+0200","h":14,"m":7},{"d":"May 11 2016 14:07:21 GMT+0200","h":14,"m":7},{"d":"May 11 2016 14:07:31 GMT+0200","h":14,"m":7},{"d":"May 11 2016 20:34:48 GMT+0200","h":20,"m":34},{"d":"May 12 2016 13:32:12 GMT+0200","h":13,"m":32},{"d":"May 13 2016 17:02:22 GMT+0200","h":17,"m":2},{"d":"May 13 2016 17:54:17 GMT+0200","h":17,"m":54},{"d":"May 17 2016 16:55:55 GMT+0200","h":16,"m":55},{"d":"May 18 2016 16:58:49 GMT+0200","h":16,"m":58},{"d":"May 19 2016 16:31:54 GMT+0200","h":16,"m":31},{"d":"May 20 2016 11:16:00 GMT+0200","h":11,"m":16},{"d":"May 24 2016 11:24:29 GMT+0200","h":11,"m":24},{"d":"May 25 2016 00:15:15 GMT+0200","h":0,"m":15},{"d":"May 25 2016 23:10:02 GMT+0200","h":23,"m":10},{"d":"May 26 2016 23:53:04 GMT+0200","h":23,"m":53},{"d":"May 27 2016 16:25:20 GMT+0200","h":16,"m":25},{"d":"May 27 2016 17:50:36 GMT+0200","h":17,"m":50},{"d":"May 27 2016 21:59:03 GMT+0200","h":21,"m":59},{"d":"May 29 2016 13:15:07 GMT+0200","h":13,"m":15},{"d":"May 30 2016 10:29:15 GMT+0200","h":10,"m":29},{"d":"May 30 2016 13:13:05 GMT+0200","h":13,"m":13},{"d":"May 30 2016 21:34:59 GMT+0200","h":21,"m":34},{"d":"May 31 2016 11:12:44 GMT+0200","h":11,"m":12},{"d":"Jun 01 2016 17:45:10 GMT+0200","h":17,"m":45},{"d":"Jun 01 2016 20:36:38 GMT+0200","h":20,"m":36},{"d":"Jun 03 2016 21:18:20 GMT+0200","h":21,"m":18},{"d":"Jun 09 2016 23:32:26 GMT+0200","h":23,"m":32},{"d":"Jun 10 2016 21:41:51 GMT+0200","h":21,"m":41},{"d":"Jun 12 2016 13:35:35 GMT+0200","h":13,"m":35},{"d":"Jun 12 2016 19:58:00 GMT+0200","h":19,"m":58},{"d":"Jun 18 2016 12:44:27 GMT+0200","h":12,"m":44},{"d":"Jun 18 2016 22:17:03 GMT+0200","h":22,"m":17},{"d":"Jun 20 2016 19:38:58 GMT+0200","h":19,"m":38},{"d":"Jun 20 2016 20:55:42 GMT+0200","h":20,"m":55},{"d":"Jun 23 2016 21:37:08 GMT+0200","h":21,"m":37},{"d":"Jun 25 2016 12:43:35 GMT+0200","h":12,"m":43},{"d":"Jun 25 2016 13:00:33 GMT+0200","h":13,"m":0},{"d":"Jun 27 2016 20:59:06 GMT+0200","h":20,"m":59},{"d":"Jul 08 2016 14:22:31 GMT+0200","h":14,"m":22},{"d":"Jul 13 2016 22:23:03 GMT+0200","h":22,"m":23},{"d":"Jul 15 2016 14:35:15 GMT+0200","h":14,"m":35},{"d":"Sep 02 2016 12:25:24 GMT+0200","h":12,"m":25},{"d":"Sep 02 2016 13:18:18 GMT+0200","h":13,"m":18},{"d":"Sep 02 2016 13:35:28 GMT+0200","h":13,"m":35},{"d":"Sep 02 2016 14:08:20 GMT+0200","h":14,"m":8},{"d":"Sep 08 2016 15:10:45 GMT+0200","h":15,"m":10},{"d":"Sep 22 2016 21:03:51 GMT+0200","h":21,"m":3},{"d":"Sep 23 2016 18:21:48 GMT+0200","h":18,"m":21},{"d":"Sep 23 2016 22:33:59 GMT+0200","h":22,"m":33},{"d":"Sep 25 2016 17:27:32 GMT+0200","h":17,"m":27},{"d":"Oct 03 2016 17:13:22 GMT+0200","h":17,"m":13},{"d":"Oct 06 2016 17:38:05 GMT+0200","h":17,"m":38},{"d":"Oct 06 2016 22:28:07 GMT+0200","h":22,"m":28},{"d":"Oct 12 2016 11:15:33 GMT+0200","h":11,"m":15},{"d":"Oct 12 2016 19:08:59 GMT+0200","h":19,"m":8},{"d":"Oct 14 2016 17:08:48 GMT+0200","h":17,"m":8},{"d":"Oct 17 2016 21:30:14 GMT+0200","h":21,"m":30},{"d":"Oct 18 2016 02:34:39 GMT+0200","h":2,"m":34},{"d":"Nov 01 2016 10:16:10 GMT+0100","h":10,"m":16},{"d":"Nov 08 2016 13:57:19 GMT+0100","h":13,"m":57},{"d":"Nov 12 2016 20:52:59 GMT+0100","h":20,"m":52},{"d":"Nov 15 2016 09:52:35 GMT+0100","h":9,"m":52},{"d":"Nov 25 2016 10:51:16 GMT+0100","h":10,"m":51},{"d":"Nov 25 2016 11:05:22 GMT+0100","h":11,"m":5},{"d":"Nov 29 2016 19:30:06 GMT+0100","h":19,"m":30},{"d":"Dec 01 2016 18:11:51 GMT+0100","h":18,"m":11},{"d":"Dec 22 2016 14:08:07 GMT+0100","h":14,"m":8},{"d":"Dec 25 2016 16:16:31 GMT+0100","h":16,"m":16},{"d":"Dec 25 2016 16:21:22 GMT+0100","h":16,"m":21},{"d":"Jan 08 2017 18:33:05 GMT+0100","h":18,"m":33},{"d":"Jan 10 2017 13:14:48 GMT+0100","h":13,"m":14},{"d":"Jan 13 2017 21:19:14 GMT+0100","h":21,"m":19},{"d":"Jan 20 2017 16:17:40 GMT+0100","h":16,"m":17},{"d":"Jan 22 2017 12:33:09 GMT+0100","h":12,"m":33},{"d":"Jan 23 2017 12:08:09 GMT+0100","h":12,"m":8},{"d":"Feb 18 2017 10:27:14 GMT+0100","h":10,"m":27},{"d":"Feb 20 2017 10:37:54 GMT+0100","h":10,"m":37},{"d":"Feb 20 2017 10:40:06 GMT+0100","h":10,"m":40},{"d":"Feb 24 2017 13:44:51 GMT+0100","h":13,"m":44},{"d":"Feb 25 2017 12:20:15 GMT+0100","h":12,"m":20},{"d":"Feb 25 2017 16:10:50 GMT+0100","h":16,"m":10},{"d":"Feb 25 2017 18:58:36 GMT+0100","h":18,"m":58},{"d":"Feb 26 2017 14:55:16 GMT+0100","h":14,"m":55},{"d":"Mar 05 2017 14:08:29 GMT+0100","h":14,"m":8},{"d":"Mar 05 2017 15:05:12 GMT+0100","h":15,"m":5},{"d":"Mar 07 2017 11:02:14 GMT+0100","h":11,"m":2},{"d":"Mar 14 2017 16:33:49 GMT+0100","h":16,"m":33},{"d":"Mar 19 2017 13:59:17 GMT+0100","h":13,"m":59},{"d":"Mar 27 2017 11:24:52 GMT+0200","h":11,"m":24},{"d":"Apr 01 2017 14:43:35 GMT+0200","h":14,"m":43},{"d":"Apr 03 2017 16:18:45 GMT+0200","h":16,"m":18},{"d":"Apr 05 2017 22:47:11 GMT+0200","h":22,"m":47},{"d":"Apr 06 2017 15:55:42 GMT+0200","h":15,"m":55},{"d":"Apr 06 2017 16:05:39 GMT+0200","h":16,"m":5},{"d":"Apr 12 2017 11:29:28 GMT+0200","h":11,"m":29},{"d":"Apr 13 2017 21:20:36 GMT+0200","h":21,"m":20},{"d":"Apr 19 2017 20:34:29 GMT+0200","h":20,"m":34},{"d":"Apr 24 2017 17:42:35 GMT+0200","h":17,"m":42},{"d":"Apr 25 2017 20:44:38 GMT+0200","h":20,"m":44},{"d":"Apr 25 2017 21:04:18 GMT+0200","h":21,"m":4},{"d":"Apr 26 2017 21:34:26 GMT+0200","h":21,"m":34},{"d":"Apr 26 2017 22:08:04 GMT+0200","h":22,"m":8},{"d":"Apr 27 2017 00:35:39 GMT+0200","h":0,"m":35},{"d":"Apr 28 2017 22:24:41 GMT+0200","h":22,"m":24},{"d":"May 07 2017 11:55:02 GMT+0200","h":11,"m":55},{"d":"May 08 2017 00:25:13 GMT+0200","h":0,"m":25},{"d":"May 08 2017 10:01:03 GMT+0200","h":10,"m":1},{"d":"May 09 2017 15:35:58 GMT+0200","h":15,"m":35},{"d":"May 10 2017 10:51:40 GMT+0200","h":10,"m":51},{"d":"May 15 2017 11:32:59 GMT+0200","h":11,"m":32},{"d":"May 18 2017 11:46:01 GMT+0200","h":11,"m":46},{"d":"May 22 2017 08:39:17 GMT+0200","h":8,"m":39},{"d":"May 22 2017 16:51:39 GMT+0200","h":16,"m":51},{"d":"May 24 2017 09:56:43 GMT+0200","h":9,"m":56},{"d":"May 31 2017 19:50:59 GMT+0200","h":19,"m":50},{"d":"Jun 09 2017 21:58:37 GMT+0200","h":21,"m":58},{"d":"Jun 16 2017 16:39:01 GMT+0200","h":16,"m":39},{"d":"Jun 21 2017 07:07:22 GMT+0200","h":7,"m":7},{"d":"Jun 28 2017 20:09:00 GMT+0200","h":20,"m":9},{"d":"Jun 30 2017 14:50:33 GMT+0200","h":14,"m":50},{"d":"Jul 13 2017 12:34:17 GMT+0200","h":12,"m":34},{"d":"Jul 13 2017 16:48:08 GMT+0200","h":16,"m":48},{"d":"Jul 17 2017 13:35:13 GMT+0200","h":13,"m":35},{"d":"Jul 30 2017 11:53:11 GMT+0200","h":11,"m":53},{"d":"Aug 07 2017 21:12:04 GMT+0200","h":21,"m":12},{"d":"Aug 27 2017 15:14:20 GMT+0200","h":15,"m":14},{"d":"Sep 02 2017 17:43:22 GMT+0200","h":17,"m":43},{"d":"Sep 05 2017 12:44:14 GMT+0200","h":12,"m":44},{"d":"Sep 09 2017 19:05:08 GMT+0200","h":19,"m":5},{"d":"Sep 14 2017 10:42:03 GMT+0200","h":10,"m":42},{"d":"Sep 16 2017 18:10:59 GMT+0200","h":18,"m":10},{"d":"Sep 17 2017 19:07:59 GMT+0200","h":19,"m":7},{"d":"Sep 19 2017 09:55:30 GMT+0200","h":9,"m":55},{"d":"Sep 21 2017 16:45:33 GMT+0200","h":16,"m":45},{"d":"Sep 21 2017 19:00:49 GMT+0200","h":19,"m":0},{"d":"Sep 22 2017 11:37:35 GMT+0200","h":11,"m":37},{"d":"Sep 23 2017 16:01:51 GMT+0200","h":16,"m":1},{"d":"Sep 23 2017 19:39:38 GMT+0200","h":19,"m":39},{"d":"Sep 29 2017 10:18:38 GMT+0200","h":10,"m":18},{"d":"Oct 01 2017 21:22:36 GMT+0200","h":21,"m":22},{"d":"Oct 03 2017 11:02:41 GMT+0200","h":11,"m":2},{"d":"Oct 09 2017 13:35:28 GMT+0200","h":13,"m":35},{"d":"Oct 13 2017 11:05:23 GMT+0200","h":11,"m":5},{"d":"Oct 13 2017 14:49:22 GMT+0200","h":14,"m":49},{"d":"Oct 13 2017 16:17:00 GMT+0200","h":16,"m":17},{"d":"Oct 20 2017 12:15:08 GMT+0200","h":12,"m":15},{"d":"Oct 20 2017 19:43:18 GMT+0200","h":19,"m":43},{"d":"Oct 26 2017 08:43:44 GMT+0200","h":8,"m":43},{"d":"Oct 27 2017 22:14:30 GMT+0200","h":22,"m":14},{"d":"Oct 29 2017 12:47:52 GMT+0100","h":12,"m":47},{"d":"Oct 30 2017 00:18:07 GMT+0100","h":0,"m":18},{"d":"Oct 30 2017 15:04:33 GMT+0100","h":15,"m":4},{"d":"Nov 04 2017 22:06:06 GMT+0100","h":22,"m":6},{"d":"Nov 13 2017 14:13:14 GMT+0100","h":14,"m":13},{"d":"Nov 14 2017 11:56:44 GMT+0100","h":11,"m":56},{"d":"Nov 26 2017 22:04:14 GMT+0100","h":22,"m":4}]

let arcsDump=[];
let nuit = true;
let arcs= listTime;

function preload(){
  font = loadFont("assets/AndaleMono.ttf");
}

function setup() {
  textFont(font);
  createCanvas(windowWidth, windowHeight);
}
function draw() {
// every 5 frames change the array
  frameCount%5===0&&arcsDump.length!==arcs.length?arcsDump = arcs.slice(0,(frameCount/5)):"";
  background(0,60);
  translate(width/2,height/2);
// clock background && connection number
        for(let h = 0;h<24;h++){
          let _size=2;
          push();
          rotate((h%24/24)*2*3.14)
          strokeWeight(0);
          textSize(16*_size)
          textAlign(CENTER);
          fill(0,10);
          text(h,0,-130*_size);
          pop();
        }
        
        textAlign(CENTER);
        textSize(35);
        fill(100,80);
        text(arcsDump.length +"\n connections",0,0);
        arcsDump.length>0?text(arcsDump[arcsDump.length-1].d,0,200*2):"";
// Act
  arcsDump.length!==arcs.length&&arcsDump.length>0?Act(arcsDump[arcsDump.length-1].h,2):"";
// All
  arcsDump.forEach(obj=>{
    Arc(obj.h,2);
  });
}

let Arc = (_h,_size,_t) =>{
  let rad = (_h%24/24)*2*3.14;
  push()
  translate(0,0);
  rotate(rad);
  _t?stroke(100,100,200,125):stroke(200,50,50,2);
  strokeWeight(30*_size/1.5);
  line(0,-80*_size,0,-100*_size);
  strokeWeight(0);
  textSize(16*_size);
  textAlign(CENTER);
  _t?fill(255,0,0255):fill(0,1);
  text(_h,0,-130*_size);
  pop();
}
let Act = (_h,_size) =>{
    let rad = (_h%24/24)*2*3.14;
    push()
    translate(0,0);
    rotate(rad);
    stroke(90,90,200,125);
    strokeWeight(35*_size/1.5);
    line(0,-80*_size,0,-100*_size);
    strokeWeight(1);
    line(0,0*_size,0,-120*_size);
    strokeWeight(0);
    textSize(16*_size);
    textAlign(CENTER);
    fill(255,0,0,255);
    text(_h,0,-130*_size);
    pop();
}
