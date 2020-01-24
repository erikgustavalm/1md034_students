new Vue({
    el: "#order",
    data: {
	orderOn: false,
	btnTitle: "Lägg en beställning",
	customer: [{name: "Fullständigt namn", type: "text", def: "Namn Namnsson"} ,
		   {name: "Adress för leverans", type: "text", def: "testgatan"},
		   {name: "Husnummer", type: "number", def: "0"},
		   {name: "Mailadress", type: "text", def: "namn@namnsson.com"}],
	payOpt: ["Swish", "Kottar", "MasterCard", "Natura"],
	gender: ["Man", "Kvinna", "Annat"]
    },
    methods: {
	makeOrder: function(){
	    this.orderOn = !this.orderOn;
	    if (this.orderOn) {
		this.btnTitle = "Slutför";
	    } else {
		this.btnTitle = "Lägg en beställning";
		alert("Beställning slutförd");
	    }
	},
	cancelOrder: function(){
	    this.orderOn = false;
	    this.btnTitle = "Lägg en beställning";
	}
    }
})
