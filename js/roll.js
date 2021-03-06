var rng = {};

rng.mod = 4294967296;

rng.random_seed = function () {
  return Math.floor(Math.random() * rng.mod);
};

rng.reseed = function () {
  rng.seed = rng.random_seed();
};

rng.next = function () {
  return Math.floor(rng.seed * 1664525 + 1013904223) % rng.mod;
}

rng.integer = function (limit) {
  var x = rng.next();
  rng.seed = x;
  return x % limit;
};

rng.sample = function (xs, k) {
  var unpack = false;
  if (k === undefined) {
    k = 1;
    unpack = true;
  }
  if (k === 0) return [];
  if (xs.length < k) throw "underflow";
  var buckets = [];
  var i = 0;
  while (i < k) {
    buckets.push(xs[i]);
    i += 1;
  }
  while (i < xs.length) {
    var j = rng.integer(i + 1);
    if (j < k) buckets[j] = xs[i];
    i += 1;
  }
  return unpack ? buckets[0] : buckets;
}

var roll = {'book': null};

roll.roll_all = function () {
  $('#seed').text(rng.seed.toString(16));
  roll.roll_name();
  roll.roll_book();
};

roll.names = ['brad', 'janet', 'riffraff', 'magenta', 'columbia', 'frank', 'rocky', 'eddie', 'dr scott', 'the crim'];

roll.roll_name = function () {
  $('#name').text(rng.sample(data.names));
};

roll.roll_book = function () {
  var book = rng.sample(data.playbooks);
  roll.book = book;
  $('#book').text(book.name);
  roll.roll_look(book);
  roll.roll_stats(book);
  roll.roll_moves(book);
  roll.roll_gear(book);
};

roll.roll_look = function (book) {
  $('#face').text(rng.sample(book.face) + ' face');
  $('#eyes').text(rng.sample(book.eyes) + ' eyes');
  $('#body').text(rng.sample(book.body) + ' body');
  $('#style').text(rng.sample(book.style));
};
/*
-3:  83.3%   16.7%    0.0%
-2:  72.2%   25.0%    2.8%
-1:  58.3%   33.3%    8.3%
+0:  41.7%   41.7%   16.7%
+1:  27.8%   44.4%   27.8%
+2:  16.7%   41.7%   41.7%
+3:   8.3%   33.3%   58.3%
*/
roll.stat_probs = {
  '-3': '16.7% successful (0% total success)',
  '-2': '27.8% successful (2.8% total success)',
  '-1': '41.6% successful (8.3% total success)',
  '+0': '58.4% successful (16.7% total success)',
  '+1': '72.2% successful (27.8% total success)',
  '+2': '83.4% successful (41.7% total success)',
  '+3': '91.6% successful (58.3% total success)'
};

roll.roll_stats = function (book) {
  var stats = rng.sample(book.stats);
  var statify = function (x) {
    var n = '&nbsp;'
    return x.toString() + n+n+n+n+n + roll.stat_probs[x];
  };
  $('#cool').html(statify(roll.format(stats[0])));
  $('#hard').html(statify(roll.format(stats[1])));
  $('#hot').html(statify(roll.format(stats[2])));
  $('#sharp').html(statify(roll.format(stats[3])));
  $('#weird').html(statify(roll.format(stats[4])));
};

roll.roll_moves = function (book) {
  $('#moves').empty();
  var moves = rng.sample(book.moves, book.num_moves);
  var add = function (m) {
    $('#moves').append('<li>' + m + '</li>');
  };
  _.each(book.set_moves, add);
  _.each(moves, add);
};

roll.roll_gear = function (book) {
  $('#gear').empty();
  var add = function (g) {
    $('#gear').append('<li>' + g + '</li>');
  };
  _.each(book.items, function (pair) {
    var count = pair[0];
    var list = pair[1];
    var mods = pair[2] || [];
    var items0 = rng.sample(list, count);
    var items = _.map(items0, function (g) {
      var allMods = _.flatten(_.map(mods, function (m) {
        var pair = rng.sample(data.mods[m]);
        return rng.sample(pair[1], pair[0]);
      }));
      if (allMods.length > 0) {
        return g + ' (' + allMods.join(', ') + ')';
      } else {
        return g;
      }
    });
    _.each(items, add);
  });
};

roll.format = function (n) {
  return (n >= 0) ? '+' + n : n.toString();
};

$(document).ready(function() {

  var tweak = function (f) {
    return function () { $("#seed").text("n/a"); f() }
  };

  $('#roll').click(function () {
    rng.reseed();
    roll.roll_all()
  });

  $('#restore').click(function () {
    var s = $('#inseed').val();
    var n = parseInt(s, 16);
    if (n >= 0 && s.length === 8) {
      rng.seed = n
      roll.roll_all()
    } else {
      alert('invalid seed: ' + s);
    }
  });

  $('#rollname').click(tweak(function () { roll.roll_name() }));
  $('#rollbook').click(tweak(function () { roll.roll_book() }));
  $('#rolllook').click(tweak(function () { roll.roll_look(roll.book) }));
  $('#rollstats').click(tweak(function () { roll.roll_stats(roll.book) }));
  $('#rollmoves').click(tweak(function () { roll.roll_moves(roll.book) }));
  $('#rollgear').click(tweak(function () { roll.roll_gear(roll.book) }));

  rng.reseed();
  roll.roll_all();
});
