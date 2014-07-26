var cs = require('checksum');

var modes = {
	1: 'md4',
	2: 'md5',
	4: 'sha',
	8: 'sha1',
	16: 'sha224',
	32: 'sha256',
	64: 'sha384',
	128: 'sha512'
};

module.exports = function(analyte, mode) {
	mode = mode || 10;
	var s = {};
	var e = [];
	for (var i = 1; i < 256; i *= 2) {
		var a = i;
		if (mode & i) {
			s[modes[i]] = cs(analyte, {algorithm: modes[i]});
			(function(a) {
				e.push(function(cso) {
					return s[modes[a]] == cso[modes[a]];
				});
			})(i);
		}
	}
	s._ = function(cso) {
		for (var i = 0; i < e.length; i++) {
			if (!e[i](cso)) {
				return false;
			}
		}
		return true;
	}
	return s;
}

