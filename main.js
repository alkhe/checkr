var checkr = require('./checkr');

var start = process.hrtime();

var elapsed_time = function(note) {
	var precision = 3;
	var elapsed = process.hrtime(start)[1] / 1000000;
	return process.hrtime(start)[0] + " s, " + elapsed.toFixed(precision) + " ms";
}

console.log("True Cases");

var phash = checkr('password', 255);

start = process.hrtime();

for (var i = 0; i < 1000000; i++)
	phash._(phash);

console.log('1 Million Comprehensive Checks - Cached:\t' + elapsed_time());

phash = checkr('password');

start = process.hrtime();

for (var i = 0; i < 1000000; i++)
	phash._(phash);

console.log('1 Million Standard Checks - Cached:\t\t' + elapsed_time());

phash = checkr('password', 1);

start = process.hrtime();

for (var i = 0; i < 1000000; i++)
	phash._(phash);

console.log('1 Million Basic Checks - Cached:\t\t' + elapsed_time());

console.log();

var phash = checkr('password', 255);

start = process.hrtime();

for (var i = 0; i < 1000; i++)
	phash._(phash);

console.log('1 Thousand Comprehensive Checks - Cached:\t' + elapsed_time());

phash = checkr('password');

start = process.hrtime();

for (var i = 0; i < 1000; i++)
	phash._(phash);

console.log('1 Thousand Standard Checks - Cached:\t\t' + elapsed_time());

phash = checkr('password', 1);

start = process.hrtime();

for (var i = 0; i < 1000; i++)
	phash._(phash);

console.log('1 Thousand Basic Checks - Cached:\t\t' + elapsed_time());

console.log();

phash = checkr('password', 255);

start = process.hrtime();

for (var i = 0; i < 1000; i++)
	phash._(checkr('password', 255));

console.log('1 Thousand Comprehensive Checks - Evaluated:\t' + elapsed_time());

phash = checkr('password');

start = process.hrtime();

for (var i = 0; i < 1000; i++)
	phash._(checkr('password'));

console.log('1 Thousand Standard Checks - Evaluated:\t\t' + elapsed_time());

phash = checkr('password', 1);

start = process.hrtime();

for (var i = 0; i < 1000; i++)
	phash._(checkr('password', 1));

console.log('1 Thousand Basic Checks - Evaluated:\t\t' + elapsed_time());

console.log();


console.log("False Cases");

phash = checkr('password', 255);
var qhash = checkr('spassword', 255);

start = process.hrtime();

for (var i = 0; i < 1000000; i++)
	phash._(qhash);

console.log('1 Million Comprehensive Checks - Cached:\t' + elapsed_time());

phash = checkr('password');
qhash = checkr('spassword');

start = process.hrtime();

for (var i = 0; i < 1000000; i++)
	phash._(qhash);

console.log('1 Million Standard Checks - Cached:\t\t' + elapsed_time());

phash = checkr('password', 1);
qhash = checkr('spassword', 1);

start = process.hrtime();

for (var i = 0; i < 1000000; i++)
	phash._(qhash);

console.log('1 Million Basic Checks - Cached:\t\t' + elapsed_time());

console.log();

phash = checkr('password', 255);
qhash = checkr('spassword', 255);

start = process.hrtime();

for (var i = 0; i < 1000; i++)
	phash._(qhash);

console.log('1 Thousand Comprehensive Checks - Cached:\t' + elapsed_time());

phash = checkr('password');
qhash = checkr('spassword');

start = process.hrtime();

for (var i = 0; i < 1000; i++)
	phash._(qhash);

console.log('1 Thousand Standard Checks - Cached:\t\t' + elapsed_time());

phash = checkr('password', 1);
phash = checkr('spassword', 1);

start = process.hrtime();

for (var i = 0; i < 1000; i++)
	phash._(qhash);

console.log('1 Thousand Basic Checks - Cached:\t\t' + elapsed_time());

console.log();

phash = checkr('password', 255);

start = process.hrtime();

for (var i = 0; i < 1000; i++)
	phash._(checkr('spassword', 255));

console.log('1 Thousand Comprehensive Checks - Evaluated:\t' + elapsed_time());

phash = checkr('password');

start = process.hrtime();

for (var i = 0; i < 1000; i++)
	phash._(checkr('spassword'));

console.log('1 Thousand Standard Checks - Evaluated:\t\t' + elapsed_time());

phash = checkr('password', 1);

start = process.hrtime();

for (var i = 0; i < 1000; i++)
	phash._(checkr('spassword', 1));

console.log('1 Thousand Basic Checks - Evaluated:\t\t' + elapsed_time());

