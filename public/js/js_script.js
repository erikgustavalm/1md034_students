
function Burger(name, img_fp, pos, allergies){
    this.name = name;
    this.img_fp = img_fp;
    this.pos = pos;
    this.allergies = allergies;
    this.getName = function(){
	return this.name;
    };
}
let burger1 = new Burger("Nagasaké", "https://image.shutterstock.com/image-photo/japanese-black-burger-cheese-cheeseburger-600w-333977423.jpg",
			  200, ["Beryllium", "Radon"])

let burger2 = new Burger("Kärnobyl", "https://image.shutterstock.com/image-photo/japanese-black-burger-cheese-cheeseburger-600w-333977423.jpg",
			  200, ["Beryllium", "Radon"])

let burger3 = new Burger("Harrisburger", "a", 200, ["Wheat", "Radon"])
