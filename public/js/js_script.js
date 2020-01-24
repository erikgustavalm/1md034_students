
function Burger(name, img_fp, desc, kcal, allergies){
    this.name = name;
    this.img_fp = img_fp;
    this.kcal = kcal;
    this.desc = desc;
    this.allergies = allergies;
    this.getName = function(){
	return this.name;
    };
}
let burger1 = new Burger("Nagasaké",
			 "https://s3.envato.com/files/248941403/DSC_9852.jpg",
			 "En gammal klassiker",
			 200,
			 ["Beryllium", "Radon"])

let burger2 = new Burger("Kärnobyl",
			 "http://www.allwhitebackground.com/images/5/Burger.jpg",
			 "En tyst mästare",
			 200,
			 ["Beryllium", "Radon"])

let burger3 = new Burger("Harrisburger",
			 "http://www.allwhitebackground.com/images/5/Burger-White-Background-Image.png",
			 "Sannolikt vår godaste burgare",
			 200,
			 ["Wheat", "Radon"])

let burger4 = new Burger("DubbelKursk",
			 "http://www.allwhitebackground.com/images/5/Burger-White-Background-HD-Image.jpg",
			 "Vi har gått på djupet",
			 200,
			 ["Lingon", "Radon"])
let burger5 = new Burger("FuckUShima",
			 "https://media.istockphoto.com/photos/colorful-japanese-sushi-roll-on-a-white-background-picture-id467135567",
			 "Gojiras favorit",
			 200,
			 ["Lingon", "Radon", "Natrium", "Fiskpulver"])
let burger6 = new Burger("Bikini Island",
			 "https://image.shutterstock.com/image-photo/hawaiian-tropical-hamburger-pineapple-isolated-260nw-1124631896.jpg",
			 "(På tillfälligt besök)",
			 200,
			 ["Cesium", "Diabetes"])
let burger7 = new Burger("Ofarlig",
			 "https://ak7.picdn.net/shutterstock/videos/658567/thumb/1.jpg",
			 "Helt utan radioaktiv behandling",
			 200,
			 ["Lingon", "Radon", "Bävernylon", "Nötter"])

function Customer(name, gender, address){
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.getName = function(){
	return this.name;
    }
}
