var _ = require('lodash');

var defaults = {
	maxium: 5
};

var errorTemplate = _.template(
	'Descendent length for selector is too long! ' +
	'<%= length %> is more than the maximum of <%= options.maximum %>.'
);

module.exports = {
	selector: function (reporter, node, options) {
		var options = _.defaults(options, defaults);
		var descendentLength = node.selector.replace(/[\s]*([\>\+\~])[\s]*/gi, '$1').split(/[\s\>\+\~]/).length;
		if (descendentLength > options.maximum) {
			reporter.error(errorTemplate({options: options, length: descendentLength}));
		}
	}
}
