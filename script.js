//script file comes here



    //"use strict";
    var taskData = [
        {"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
        {"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
        {"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
        {"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
        {"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
        {"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
        {"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }
    ];
    var tr;
    for (var i = 0; i < taskData.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>" +"<b>"+ taskData[i].name+"<b>"  + "</td>");
        tr.append("<td>" +taskData[i].date + "</td>");
        tr.append("<td>" + "<b>"+taskData[i].assigned+"</b>"+ "</td>");
        $('table').append(tr);
    }
    var task={"name":"","date":"","assigned":""};
    $('.submitBtn').click(
        function(){
            task.name = $('input[id=taskName]').val();
            task.date=$('input[id=dateInput]').val();
            task.assigned=$('input[id=assignedName]').val();
           taskData.push(task);
            tr = $('<tr/>');
            tr.append("<td>" + "<b>"+task.name +"<b>"+ "</td>");
            tr.append("<td>" +task.date + "</td>");
            tr.append("<td>" + "<b>"+task.assigned+"</b>" + "</td>");
            $('table').prepend(tr);

        });

