



var bio={
	"name":"The Cat in The Hat",
	"role":"children's Entertainer",
	"contacts":
		{"mobile":"000-000", "email":"catinthehat@gmail.com", "twitter":"@cathat", "github":"@clevercat", "location":"La Jolla, CA"},
				
	"welcomemessage":"Why do you sit there like that? I know it wet and the Sun is not sunny but we can have lots of good fun that is funny!!",
	"skills":["Entertainer","creative", "clever","persistant","adventurous", "fun",],
	"biopic":"images/cat.jpg"
	};



var education={"schools":[
					{"name":"Cat's University","location":"CA","degree":"Entertainment","major":"Tricks and games","dates":"1952"}],
				"onlineCourses": [
					{"title":"Cat cleverness","school":"Just for cats","dates":"2015", "url":"beclever.com"},
					{"title":"Master tricks","school":"Just for cats","dates":"2015", "url":"betricalatious.com"}]
		
		};
		 
var work={"jobs":[
		{"employer":"English-speaking children of the world","title":"entertainer","location":"USA", "dates":"1956-present","description":"Entertain children by playing awesome tricks and games"},
		{"employer":"English-speaking children of the world","title":"entertainer","location":"USA", "dates":"1956-present","description":"Entertain children by playing awesome tricks and games"},
		{"employer":"English-speaking children of the world","title":"entertainer","location":"USA", "dates":"1956-present","description":"Entertain children by playing awesome tricks and games"},
		{"employer":"English-speaking children of the world","title":"entertainer","location":"USA", "dates":"1956-present","description":"Entertain children by playing awesome tricks and games"}
			]
			
		};	 
		 
		 
var projects={"projects":[
		{"title": "Fun-in-a-box","dates":"1956","description":"A big red wood box with two things that love to play games","images":"images/redbox.jpg"},
		{"title":"Two things","dates":"1956","description":"Two little creatures who loves to fly kites in the house","images":"images/twothings.jpg"},
		
		{"title":"Pick up toys machine","dates":"1956","description":"The fastest and most efficient pick up toy machine you will ever see","images":"images/redmachine.jpg"}
			]
		};	 

		
		
bio.display= function(){
var formattedName=HTMLheaderName.replace("%data%", bio.name);
var formattedRole=HTMLheaderRole.replace("%data%" , bio.role);
var formattedBioPic=HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMessage=HTMLWelcomeMsg.replace("%data%", bio.welcomemessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMessage);

}
bio.display();



bio.displayContacts= function(){
	    
	var formattedMobile=HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail=HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter=HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGitHub=HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation=HTMLlocation.replace("%data%", bio.contacts.location);
		
		$("#topContacts:last").append(formattedMobile);
		$("#topContacts:last").append(formattedEmail);
		$("#topContacts:last").append(formattedTwitter);
		$("#topContacts:last").append(formattedGitHub);
		$("#topContacts:last").append(formattedLocation);




}

bio.displayContacts();	
		
bio.displaySkills= function(){		
	if(bio.skills.length>0){
		$("#header").append(HTMLskillsStart);
	var formattedSkills=HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkills);
	var formattedSkills=HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkills);
	var formattedSkills=HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkills);
	var formattedSkills=HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkills);
	var formattedSkills=HTMLskills.replace("%data%", bio.skills[4]); 
		$("#skills").append(formattedSkills);
	var formattedSkills=HTMLskills.replace("%data%", bio.skills[5]);
		$("#skills").append(formattedSkills);

	
}
}
bio.displaySkills();


 


	work.display= function (){
		for (job in work.jobs){
			$("#workExperience").append(HTMLworkStart);
		var formattedEmployer=HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle=HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle= formattedEmployer + formattedTitle;
		var formattedDates=HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation=HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription=HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedDatesLocation= formattedDates + formattedLocation;
	

			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedDatesLocation);
			$(".work-entry:last").append(formattedDescription);
	
	
	}
	}
	work.display();
	
	
	
	projects.display= function(){
		for(project in projects.projects){
			$("#projects").append(HTMLprojectStart);
		
			var formattedprojectTitle=HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			var formattedprojectDates=HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			var formattedprojectDescription=HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			var formattedprojectTitleDates=formattedprojectTitle + formattedprojectDates;
			$(".project-entry:last").append(formattedprojectTitleDates);
			$(".project-entry:last").append(formattedprojectDescription);
		
			if(projects.projects[project].images.length>0){
				var formattedImage=HTMLprojectImage.replace("%data%", projects.projects[project].images);
				$(".project-entry:last").append ( formattedImage);		
			}
		}
	}
	projects.display();
	
	education.display= function(){
		for(school in education.schools){
			$("#education").append(HTMLschoolStart );
			var formattedSchoolName=HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedSchoolDegree=HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolDates=HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedSchoolLocation=HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedSchoolDatesLocation= formattedSchoolDates + formattedSchoolLocation;
			var formattedSchoolMajor=HTMLschoolMajor.replace("%data%", education.schools[school].major);
			var formattedSchoolNameDegree= formattedSchoolName + formattedSchoolDegree;
	
		$(".education-entry:last").append(formattedSchoolNameDegree) ;
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolMajor);
		
		}
	}
	education.display();
	
	education.displayOnlineEducation= function(){
	if (education.onlineCourses.length>0){
		$("#education").append( HTMLonlineClasses);
		$("#education").append(HTMLschoolStart );
		for (course in education.onlineCourses){
		
			var formattedOnlineTitle=HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedOnlineSchool=HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedOnlineTitleSchool= formattedOnlineTitle + formattedOnlineSchool;
			var formattedOnlineDates=HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			var formattedOnlineURL=HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			$(".education-entry:last").append( formattedOnlineTitleSchool);
			$(".education-entry:last").append( formattedOnlineDates);
			$(".education-entry:last").append( formattedOnlineURL);		
		}
	}
	}
	education.displayOnlineEducation();
	
	
	$("#mapDiv").append(googleMap);
	
	
	
	
	
	bio.displayFooterContacts= function(){
	    
	var formattedMobile=HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail=HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter=HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGitHub=HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation=HTMLlocation.replace("%data%", bio.contacts.location);
		
		$("#footerContacts:last").append(formattedMobile);
		$("#footerContacts:last").append(formattedEmail);
		$("#footerContacts:last").append(formattedTwitter);
		$("#footerContacts:last").append(formattedGitHub);
		$("#footerContacts:last").append(formattedLocation);




}

bio.displayFooterContacts();