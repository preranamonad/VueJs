var app5 = new Vue
({
	el: '#app5',

	data:
	{
		FirstName: "",
		LastName: ""
	},

	computed: 
	{
	    getFullName: function()
	    {
		    return this.FirstName + " " + this.LastName;
	    }
    }
})


