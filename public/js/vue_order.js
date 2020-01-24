new Vue({
    el: "#order",
    data: {
	orderOn: false,
	btnTitle: "Lägg en beställning",
	customer: [{name: "fullständing namn", type: "text"} ,
		   {name: "adress för leverans", type: "text"},
		   {name: "husnummer", type: "number"},
		   {name: "mailadress", type: "text"}],
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
	}
    }
})
