// Copyright (c) 2016, Frappe Technologies and contributors
// For license information, please see license.txt

frappe.ui.form.on('Participant', {
	refresh: function(frm) {
		cur_frm.add_fetch("ticket","cost", "cost");
	}
});