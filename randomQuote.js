

function ranQuoteFunction(){

var x = Math.round(Math.random() * 10);

var answer;
if (x == 0) {
	answer = "People may hear your words, but they feel your attitude. - John C. Maxwell";
	document.getElementById("quote").innerHTML = answer;
} else if(x == 1) {
	answer = "Attitude is a little thing that makes a big difference. - Winston Churchill";
	document.getElementById("quote").innerHTML = answer;
} else if(x == 2){
	answer = "My best friend is the one who brings out the best in me. - Henry Ford";
	document.getElementById("quote").innerHTML = answer;
} else if(x == 3){
	answer = "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship. - Buddha";
	document.getElementById("quote").innerHTML = answer;
} else if(x == 4){
	answer = "An investment in knowledge pays the best interest. - Benjamin Franklin";
	document.getElementById("quote").innerHTML = answer;
} else if(x == 5){
	answer = "The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi";
	document.getElementById("quote").innerHTML = answer;
} else if(x == 6){
	answer = "The best way to find out if you can trust somebody is to trust them. - Ernest Hemingway";
	document.getElementById("quote").innerHTML = answer;
} else if(x == 7){
	answer = "Put your heart, mind, and soul into even your smallest acts. This is the secret of success. - Swami Sivananda";
	document.getElementById("quote").innerHTML = answer;
} else if(x == 8){
	answer = "Try not to become a man of success, but rather try to become a man of value. - Albert Einstein";
	document.getElementById("quote").innerHTML = answer;
} else if(x == 9){
	answer = "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it. - Bruce Lee";
	document.getElementById("quote").innerHTML = answer;
} else{
	answer = "If you can dream it, you can do it. - Walt Disney";
	document.getElementById("quote").innerHTML = answer;
}


} /** closing curly brackets for the function **/


