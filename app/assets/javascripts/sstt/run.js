var sstt = {  
            demo: {},
            projects: {},
            projects_info : {},
            tories: {},
            board: {}			 
           };

$(function() {
    
     sstt.projects = sstt.Project.start($("#project_list"));
     sstt.projects_info = sstt.ProjectInfo.start();


});