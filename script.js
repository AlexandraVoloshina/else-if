var age = prompt("Сколько лет?");
var smoke = confirm("Куришь?");

if (age<18 && smoke==false) 
	{
	alert("Так держать!");
	} else if(age<18 && smoke==true) {
		alert("Маме скажу!");
			} else if(age>18 && smoke==false) {
				alert("Молодец, и не надо!");
			} 	else 
					alert("Ну и зря!");


