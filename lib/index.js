'use strict';

var fs = require('fs');
var request = require('request-promise');

function Nudb() {
  this.host = "";
  this.db = "";
  this.url = "";
}

Nudb.prototype.connect = function(host, db) {
  this.host = host;
  this.db = db;
}

Nudb.prototype.search = async function(query) {
  let url = this.host + "query";
  var options = {
    method: 'GET',
    url: url,
    qs: {db: this.db, matchmode: "BestMatch", q: query, out: 'json'}
  }

  return exec(options);
}

Nudb.prototype.rget = async function(rid) {
  let url = this.host + "rget";
  var options = {
    method: 'GET',
    url: url,
    qs: {db: this.db, rid: rid, out: 'json'}
  }

  return exec(options);
}

Nudb.prototype.rputJSON = async function(data) {
  let url = this.host + "rput";
  var options = {
    method: 'POST',
    url: url,
    qs: {db: this.db, data: JSON.stringify(data), format: 'json'}
  }

  return exec(options);
}

Nudb.prototype.fputJSON = async function(filePath) {
  let url = this.host + "fput";
  var options = {
    method: 'POST',
    url: url,
    formData: {
      file: fs.createReadStream(filePath)
    },
    qs: {db: this.db, format: 'json'}
  }

  return exec(options);
}

Nudb.prototype.fputRec = async function(filePath, recbeg) {
  let url = this.host + "fput";
  var options = {
    method: 'POST',
    url: url,
    formData: {
      file: fs.createReadStream(filePath)
    },
    qs: {db: this.db, recbeg: recbeg , format: 'text'}
  }

  return exec(options);
}

Nudb.prototype.rdel = async function(rid) {
  let url = this.host + "rdel";
  var options = {
    method: 'POST',
    url: url,
    qs: {db: this.db, rid: rid, out: 'json'}
  }

  return exec(options);
}

async function exec(options) {
  try {
    let body = await request(options);
    return body;
  } catch(err) {
    console.log('Got an error:', err.message)
    return err;
  }
}

module.exports = exports = new Nudb();
