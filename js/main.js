// company class
class Company{

	costructor(name,carriers,costumers){
		this.name = name;
		this.carriers= carriers;
		this.costumers = costumers;
	 }
}
// instances
var hddr = new Company();
hddr.name="HDDR";
hddr.carriers=["HDDR","ESNL_DROP","XPOR_DROP","IMCL_DROP","IMCP","CFMM_DROP"]
hddr.costumers=["HDP","AMZ","HOB"]

var mtyq = new Company();
mtyq.name="MTYQ";
mtyq.carriers=["ESNL_DROP","XPOR_DROP","IMCL_DROP","CFRT_DROP","CFMM_DROP","IMCL","IMCL_DROP"]
mtyq.costumers=["HDP","AMZ","HOB"]
var msgType=0;



//checking function
function check(){

	// DOM data
	var companyName = document.getElementById("company").value.toUpperCase();
	var carrierName = document.getElementById("carrier").value.toUpperCase();;
	var costumerName = document.getElementById("costumer").value.toUpperCase();;

	console.log(companyName,carrierName,costumerName);
	console.log("class :" , hddr, mtyq);
	// true false values
	var carrier_true=0;
	var costumer_true=0;
	var notValid=0;

	// operating object
	var currentObj="";

	// selecting the current object
	switch(companyName){
	   case 'HDDR' : currentObj=hddr; break;
	   case 'MTYQ' : currentObj=mtyq; break;
	   default : notValid=1
	}

	console.log(currentObj);

	// if it's a valid comapny
if(notValid==0){

	// if a name matches
	if(currentObj.name==companyName){

		//loop that finds if a carrier is matching
		for (let carrier in currentObj.carriers){
		   // checks if the carrier is in the list, sets to true if so
		   if(currentObj.carriers[carrier] == carrierName){carrier_true=carrierName;}
		}
		// loop that finds if a costumer is matching
		for (let costumer in currentObj.costumers){
			// checks if thee costumer is the lists, sets to true if so
		   if(currentObj.costumers[costumer] == costumerName){costumer_true=costumerName;}
		}
		console.log(costumer_true,carrier_true)

		// if both costumer and carrier are found sets a true false variable to 1 for the visual representation
		if(costumer_true!=0 && carrier_true!=0){
			msgType=1;
		}
		else{
			// resets the values for a new input if a match is not found
			msgType=0;
			costumer_true=0;
			carrier_true=0;
		}
	}
}
}

(function($) {

	"use strict";

  // Form
	var contactForm = function() {
		if ($('#contactForm').length > 0 ) {
			$( "#contactForm" ).validate( {
				rules: {
					company: "required",
					carrier: "required",
					costumer: "required"	
				},
				messages: {
					company: "Please enter a company name",	
					carrier: "Please enter a valid carrier",
					costumer: "Please enter a costumer"
				},
				
				submitHandler: function() {		
						$('#form-message-warning').hide();
						$('#form-message-success').hide();
						

						if(msgType==0){
							$('#form-message-warning').html("REJECT! This company cannot take this container.");
				            $('#form-message-warning').fadeIn();
	
						}
						else{
						    $('#form-message-success').fadeIn();   

							//resets the value
							msgType=0;
							
						}		
		  		} 
			});	
		}
	};
	contactForm();
})(jQuery);