#Checkr

A secure way of storing passwords and other sensitive identification information on a database is to store the checksums of the data, instead of storing the data itself. If a database is hacked or otherwise inappropriately accessed, only the checksums can be obtained, making it very hard to discover the actual password used to login. When a login is requested, the checksums of the login password and the password stored in the database can be compared. Checkr provides a simple interface for verifying passwords, whose checksum objects or individual checksums can be easily stored on and read from a database.

##Include Checkr

	var checkr = require('checkr');

##Create a Checkr hash object

	var phash = checkr('password');

##Checkr hash levels

	1: 'md4',
	2: 'md5',
	4: 'sha',
	8: 'sha1',
	16: 'sha224',
	32: 'sha256',
	64: 'sha384',
	128: 'sha512'

The hashtypes can be used as bitfields, to customize verification.
Note: sha is sha-0.

	Examples:
	255:		full check
	1 | 2:		md4 and md5
	16 | 32: 	sha224 and sha256
	2 | 8:		md5 and sha1

The standard (default) hashtype is 10, which uses md5 and sha1 to verify.

##Checkr verify hash objects

	phash._(qhash);

Returns a boolean, representing whether the objects are hash-equivalent.

##Example

	var checkr = require('checkr');
	var phash = checkr('password');
	phash._(checkr('password')); // Returns true
	phash._(checkr('spassword')); // Returns false

##Speedtest

True Cases  
1 Million Comprehensive Checks - Cached:	325.990 ms  
1 Million Standard Checks - Cached:		89.565 ms  
1 Million Basic Checks - Cached:		49.664 ms  


1 Thousand Comprehensive Checks - Cached:	0.340 ms  
1 Thousand Standard Checks - Cached:		0.097 ms  
1 Thousand Basic Checks - Cached:		0.057 ms  


1 Thousand Comprehensive Checks - Evaluated:	209.295 ms  
1 Thousand Standard Checks - Evaluated:		67.475 ms  
1 Thousand Basic Checks - Evaluated:		16.026 ms  


False Cases  
1 Million Comprehensive Checks - Cached:	52.042 ms  
1 Million Standard Checks - Cached:		51.740 ms  
1 Million Basic Checks - Cached:		51.869 ms  


1 Thousand Comprehensive Checks - Cached:	0.057 ms  
1 Thousand Standard Checks - Cached:		0.056 ms  
1 Thousand Basic Checks - Cached:		0.185 ms  


1 Thousand Comprehensive Checks - Evaluated:	194.986 ms  
1 Thousand Standard Checks - Evaluated:		40.793 ms  
1 Thousand Basic Checks - Evaluated:		40.871 ms  



