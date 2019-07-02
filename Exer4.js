 var app4 = new Vue
 ({
 	el: '#app4',

 	data:
 	{
 		firstName: 'Prerna',
 		lastName: 'Bisen'
 	},

 	computed:
 	{
        fullName: function()
        {
        	return this.firstName + ' ' + this.lastName
        }
 	}
 })


 