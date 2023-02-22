var tabs = document.querySelectorAll(".tabs_wrap ul li");
var childrens = document.querySelectorAll(".children");
var womens = document.querySelectorAll(".women");
var educations = document.querySelectorAll(".education");
var oldages = document.querySelectorAll(".oldage");
// var education = document.querySelectorAll(".education");
var all = document.querySelectorAll(".item_wrap");

tabs.forEach((tab)=>{
	tab.addEventListener("click", ()=>{
		tabs.forEach((tab)=>{
			tab.classList.remove("active");
		})
		tab.classList.add("active");
		var tabval = tab.getAttribute("data-tabs");

		all.forEach((item)=>{
			item.style.display = "none";
		})

		if(tabval == "children"){
			childrens.forEach((children)=>{
				children.style.display = "block";
			})
		}
		else if(tabval == "women"){
			womens.forEach((women)=>{
				women.style.display = "block";
			})
		}
        else if(tabval == "education"){
			educations.forEach((education)=>{
				education.style.display = "block";
			})
            
		}
        else if(tabval == "oldage"){
			oldages.forEach((oldage)=>{
				oldage.style.display = "block";
			})
            
		}
        
		else{
			all.forEach((item)=>{
				item.style.display = "block";
			})
		}

	})
})