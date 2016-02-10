



var bio={
	"name":"Simone Muro",
	"role":"Brazilian-Portuguese Linguist Expert",
	"contacts":{"mobile":"650-7037496",
				"email":"googsicle@gmail.com",
				"twitter":"@googsicle",
				"github":"googsicle@github.com",
				"location":"San Francisco Bay Area, CA"},

	"welcomemessage":"Welcome to my online Resume!!",
	"skills":["Localization","Translation","Content-Curation","HTML","CSS","javaScript", "GitHub"],
	"biopic":"images/self.jpg",

	"displayBio":function(){
		var formattedName=HTMLheaderName.replace("%data%", bio.name);
		var formattedRole=HTMLheaderRole.replace("%data%" , bio.role);
		var formattedBioPic=HTMLbioPic.replace("%data%", bio.biopic);
		var formattedWelcomeMessage=HTMLWelcomeMsg.replace("%data%", bio.welcomemessage);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").append(formattedBioPic);
		$("#header").append(formattedWelcomeMessage);
	},
	"displayContacts":function(){
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
	},

	"displaySkills":function(){		
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
	},

	"displayFooterContacts":function(){
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
	},

	"display":function(){
		bio.displayBio();
		bio.displayContacts();
		bio.displaySkills();	
		bio.displayFooterContacts();
	}
};



var education={
	"schools":[{"name":"Univale",
				"location":"Brazil",
				"degree":"BA",
				"majors":["Law"],
				"dates":"1994-1998",
				"url":"Univale.br"}
				],

	"onlineCourses":[{"title":"Python",
						"school":"Coursera",
						"date":"2014",
						"url":"coursera.com"},

						{"title":"Front-End Web Developer",
						"school":"Udacity",
						"date":"2015/2016",
						"url":"Udacity.com"}
					],
	
	"displaySchool":function(){
		for(school in education.schools){
			$("#education").append(HTMLschoolStart );
			var formattedSchoolName=HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedSchoolDegree=HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolDates=HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedSchoolLocation=HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedSchoolDatesLocation= formattedSchoolDates + formattedSchoolLocation;
			var formattedSchoolMajor=HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			var formattedSchoolNameDegree= formattedSchoolName + formattedSchoolDegree;
			var formattedSchoolUrl=HTMLschoolUrl.replace("%data%", education.schools[school].url);
			$(".education-entry:last").append(formattedSchoolNameDegree) ;
			$(".education-entry:last").append(formattedSchoolDatesLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			$(".education-entry:last").append(formattedSchoolUrl);
		
		}
	},
	"displayOnlineEducation":function(){
		if (education.onlineCourses.length>0){
			$("#education").append( HTMLonlineClasses);
			$("#education").append(HTMLschoolStart );
			for (course in education.onlineCourses){
				var formattedOnlineTitle=HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
				var formattedOnlineSchool=HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
				var formattedOnlineTitleSchool= formattedOnlineTitle + formattedOnlineSchool;
				var formattedOnlineDates=HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
				var formattedOnlineURL=HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
				$(".education-entry:last").append( formattedOnlineTitleSchool);
				$(".education-entry:last").append( formattedOnlineDates);
				$(".education-entry:last").append( formattedOnlineURL);		
		}
			}
	},
	"display":function(){
		education.displaySchool();
		education.displayOnlineEducation();
	}
};



var work={
	"jobs":[{"employer":"Linguistica International",
				"title":"Interpreter",
				"location":"West Jordan, UT",
				"dates":"2015-present",
				"description":"Perform over-the-phone interpretation for various sectors such as medical, " +
				"legal, emergency and human services."},

				{"employer":"Brazilian Portuguese Translation and Interpretation Services",
				"title":"Portuguese Language Specialist",
				"location":"San Francisco, Bay area",
				"dates":"2006-present",
				"description":"Conduct remote linguistic testing, localization, " +
					"content curation and translation for direct clients." +
					"Translating Certificates, Degrees in both Graduate and Undergraduate Studies. " +
					"Assisting with INS information, birth, marriage license, divorce document translations. " +
					"Assisting with Especial Education Law (IDEA) information and translation of all documentations such as statements, letters, medical and insurance records to support special needs student’s case during IEP. "+
					"Attending IEP meetings to provide interpretation and clarification of IEP process. " +
					"Providing interpretation services at court hearings, depositions, and INS interview meetings. " +
					"Providing general translation/interpretation services and language support within the Bay area Brazilian community."},

				{"employer":"e2f Translations",
				"title":"Tranlator/Voice-over/Content Curator",
				"location":"Santa Clara, CA",
				"dates":"2012-present",
				"description":"Content curation and translation from English into Portuguese including but not limited to:, " +
					"children’s apps, mobile applications, audio books, podcasts, telephone prompts and greetings, navigation devices, automated teller, gaming, flash animations, online courses, corporate presentations, etc. " +
					"Assist with localization efforts for Brazilian Portuguese market release. Perform voice-over recordings in Brazilian-Portuguese for audio, podcasts, telephone prompts and greetings, automated teller, " +
					"gaming and animations and a variety of children’s apps. Proofread translation content for Syntax, grammar, cultural and style errors."}
			],
	"display":function (){
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
};



var projects={"projects":[{"title":"COMING SOON!!!",
							"dates":"2016",
							"description":"Something beautiful and exciting to show off my new acquired web developer skills",
							"images":["images/project.jpg"]},

							{"title":"COMING SOON!!!",
							"dates":"2016",
							"description":"Something beautiful and exciting to show off my new acquired web developer skills",
							"images":["images/project.jpg"]},
							
							{"title":"COMING SOON!!!","dates":"2016","description":"Something beautiful and exciting to show off my new acquired web developer skills",
							"images":["images/project.jpg"]}
						],
				"display":function(){
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
							$(".project-entry:last").append (formattedImage);		
						}
					}
				}
};




/*encapsulates the bio.displayBio function outside object
bio.displayBio= function(){
var formattedName=HTMLheaderName.replace("%data%", bio.name);
var formattedRole=HTMLheaderRole.replace("%data%" , bio.role);
var formattedBioPic=HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMessage=HTMLWelcomeMsg.replace("%data%", bio.welcomemessage);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMessage);

}



/* encapsulates bio.displayContacts outside the bio object like this:
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
}*/


	bio.display();

	/*work.display= function (){
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
	}*/
	work.display();


	/*projects.display= function(){
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
	}*/
	projects.display();

	/*education.displaySchool= function(){
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
	}*/
	
	
	/*education.displayOnlineEducation= function(){
	if (education.onlineCourses.length>0){
		$("#education").append( HTMLonlineClasses);
		$("#education").append(HTMLschoolStart );
		for (course in education.onlineCourses){s
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
	}*/
	education.display();
	
	
	$("#mapDiv").append(googleMap);
	
	
	
	
	

