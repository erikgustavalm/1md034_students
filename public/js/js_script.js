const vm = new Vue({

})


function Burger(name, img_fp, pos, allergies){
    this.name = name;
    this.img_fp = img_fp;
    this.pos = pos;
    this.allergies = allergies;
    this.getName = function(){
	return this.name;
    };
}

let nagasake = new Burger("Nagasaké", "https://image.shutterstock.com/image-photo/japanese-black-burger-cheese-cheeseburger-600w-333977423.jpg",
			  200, ["Beryllium", "Radon"])
