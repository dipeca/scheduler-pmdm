// Userlist data array for filling in info box
var userListData = [];

// DOM Ready =============================================================
$(document).ready(function() {

    var calendar = $('#calendar').calendar({
        events_source: [{
            "id": 293,
            "title": "Event 1",
            "url": "http://example.com",
            "class": "event-important",
            "start": 1511131273265, // Milliseconds
            "end": 1511131275265 // Milliseconds
        }],
        view: 'week'
    });

    // Populate the user table on initial page load
    // populateTable();

});

// Functions =============================================================