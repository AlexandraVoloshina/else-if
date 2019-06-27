var age = prompt("Сколько лет?");
var smoke = prompt("Куришь?");

if (age<18 && smoke=="нет") 
	{
	alert("Так держать!");
	} else if(age<18 && smoke=="да") {
		alert("Маме скажу!");
			} else if(age>18 && smoke=="нет") {
				alert("Молодец, и не надо!");
			} 	else 
					alert("Ну и зря!");


