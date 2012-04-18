/*!
 * Copyright 2012 Reveal IT.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 */
"use strict";

var fs = require('fs'),
    jade = require('jade'),
    path = require('path');

// Run the rendering flow.
var run = module.exports.run = function () {
  var pages = JSON.parse(fs.readFileSync(path.join(__dirname, 'pages.json'), 'utf-8')),
      template = jade.compile(fs.readFileSync(path.join(__dirname, 'page.jade'), 'utf-8'));

  Object.keys(pages).forEach(function (code) {
    fs.writeFileSync(path.join(__dirname, 'public', code + '.html'), template({
      documentTitle: code + ' ' + pages[code].title,
      title: pages[code].title,
      explanation: pages[code].explanation
    }), 'utf-8');
  });
};


run();

