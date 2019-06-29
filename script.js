var age = prompt("Сколько лет?");
var smoke = confirm("Куришь?");
+smoke;

if (age<18 && smoke!=1) 
	{
	alert("Так держать!");
	} else if(age<18 && smoke!=0) {
		alert("Маме скажу!");
			} else if(age>18 && smoke!=1) {
				alert("Молодец, и не надо!");
			} 	else 
					alert("Ну и зря!");


