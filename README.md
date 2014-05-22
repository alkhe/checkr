#Checkr

##Include Checkr

>var checkr = require('checkr');

##Create a Checkr hash object

>var phash = checkr('password');

##Checkr hash levels

>1: 'md4',
>2: 'md5',
>4: 'sha',
>8: 'sha1',
>16: 'sha224',
>32: 'sha256',
>64: 'sha384',
>128: 'sha512'

The hashtypes can be used as bitfields, to customize verification.
Note: sha is sha-0.

>Examples:
>255:		full check
>1 | 2:		md4 and md5
>16 | 32: 	sha224 and sha256
>2 | 8:		md5 and sha1

The standard (default) hashtype is 10, which uses md5 and sha1 to verify.

##Checkr verify hash objects

>phash._(qhash);

Returns a boolean, representing whether the objects are hash-equivalent.

##Example

>var checkr = require('checkr');
>var phash = checkr('password');
>phash._(checkr('password')); // Returns true
>phash._(checkr('spassword')); // Returns false

##Speedtest

True Cases
1 Million Comprehensive Checks - Cached:	0 s, 325.990 ms
1 Million Standard Checks - Cached:		0 s, 89.565 ms
1 Million Basic Checks - Cached:		0 s, 49.664 ms

1 Thousand Comprehensive Checks - Cached:	0 s, 0.340 ms
1 Thousand Standard Checks - Cached:		0 s, 0.097 ms
1 Thousand Basic Checks - Cached:		0 s, 0.057 ms

1 Thousand Comprehensive Checks - Evaluated:	0 s, 209.295 ms
1 Thousand Standard Checks - Evaluated:		0 s, 67.475 ms
1 Thousand Basic Checks - Evaluated:		0 s, 16.026 ms

False Cases
1 Million Comprehensive Checks - Cached:	0 s, 52.042 ms
1 Million Standard Checks - Cached:		0 s, 51.740 ms
1 Million Basic Checks - Cached:		0 s, 51.869 ms

1 Thousand Comprehensive Checks - Cached:	0 s, 0.057 ms
1 Thousand Standard Checks - Cached:		0 s, 0.056 ms
1 Thousand Basic Checks - Cached:		0 s, 0.185 ms

1 Thousand Comprehensive Checks - Evaluated:	0 s, 194.986 ms
1 Thousand Standard Checks - Evaluated:		0 s, 40.793 ms
1 Thousand Basic Checks - Evaluated:		0 s, 40.871 ms


