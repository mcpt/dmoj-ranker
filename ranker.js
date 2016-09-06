$(document).ready(function() {
    var base_url = "https://dmoj.ca/api/user/info/";
    
    // Read users from mcpt.ca/ranks/users.json
    $.getJSON("users.json", function(users) {
        $.getJSON("problems.json", function(problems) {
            var weight = {};
            var points = {};
            
            for(var p = 0; p < problems.length; p++)
                weight[problems[p].code] = problems[p].points;
                
            for(var u = 0; u < users.length; u++) {
                var curp = 0;
                $.getJSON(base_url + users[u] + '?format=json', function(info) {
                    var solved = JSON.parse(info).solved_problems;
                    for(var s = 0; s < solved.length; s++) {
                        if(weight.hasOwnProperty(solved[s]))
                            curp += weight[solved[s]];
                    }
                    points[users[u]] = curp;
                    alert(users[u] + " " + curp);
                });
            }
        });
    });
    
    // Read problems
    
    /*
        for each user
            for all submissions
                store problem best submission
            calculate total score
    */
    
    
    // Scan through submissions
    
    // Create sorted table containing stuff
    
    // Remove preloader -> what is this http://mdbootstrap.com/components/progress-bars/#prealoaders
});
