
var app3 = new Vue
({
	el: '#app3',

	data :
	{
		message : 'Hello'
	},


	computed : 
	{
       reversemessage : function()
       {
       	return this.message.split('').reverse().join('')
       }
	}

})