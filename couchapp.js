var couchapp = require('couchapp');

ddoc = {
	_id: '_design/tw',
	views: {},
	lists: {},
	shows: {}
}

// _id is title
ddoc.views['skinny-tiddlers'] = {
	map: function(doc) {
		emit(doc._id, doc._rev);
	}
}

couchapp.loadAttachments(ddoc, "../../../tmp");

module.exports = ddoc;
