/*
 * YoutubeID
 * denissellu.me/projects/youtube-id
 *
 * Copyright (c) 2014 Denis Sellu
 * Licensed under the MIT license.
 */


exports.generate = function(limit) {
    if (typeof(limit) === 'undefined') {
        limit = 10;
    }
    var AlphabeticArray = {
        index: 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    };
    var id = '';
    for (var i = 0; i < limit; i++) {
        id += AlphabeticArray.index[Math.floor(Math.random() * AlphabeticArray.index.length)];
    }
    return id;
};
