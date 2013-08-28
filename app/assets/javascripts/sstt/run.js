var sstt = {  
             projects: {},
             projects_info : {}
           };

$(function() {
    sstt.projects = sstt.Project.start($("#project_list"));
    sstt.projects_info = sstt.ProjectInfo.start();    
});
