import { Meteor } from 'meteor/meteor';
import { Banco } from "../imports/api/banco";

Meteor.startup(function () {
var username = 'dhandarah1996@gmail.com'; 
var password = 'rodrigues1996';
var server = 'smtp.gmail.com';
var port = '465/';


process.env.MAIL_URL = 'smtps://' +
encodeURIComponent(username) + ':' +
encodeURIComponent(password) + '@' +
encodeURIComponent(server) + ':' + port;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
});

Meteor.methods({
	createItem(bd) {
		Banco.insert(bd);
	}
});




