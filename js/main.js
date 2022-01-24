class Company{

	costructor(name,carriers,costumers){
		this.name = name;
		this.carriers= carriers;
		this.costumers = costumers;
	 }
}

var hddr = new Company();
hddr.name="HDDR";
hddr.carriers=["HDDR","ESNL_DROP","XPOR_DROP","IMCL_DROP","IMCP","CFMM_DROP"]
hddr.costumers=["HDP","AMZ","HOB"]

var mtyq = new Company();
mtyq.name="MTYQ";
mtyq.carriers=["ESNL_DROP","XPOR_DROP","IMCL_DROP","CFRT_DROP","CFMM_DROP","IMCL","IMCL_DROP"]


var msgType=0;

function check(){

	var companyName = document.getElementById("company").value.toUpperCase();
	var carrierName = document.getElementById("carrier").value.toUpperCase();;
	var costumerName = document.getElementById("costumer").value.toUpperCase();;

	console.log(companyName,carrierName,costumerName);
	console.log("class :" , hddr, mtyq);

	var carrier_true=0;
	var costumer_true=0;

	var currentObj="";
	switch(companyName){
	   case 'HDDR' : currentObj=hddr; break;
	   case 'MTYQ' : currentObj=mtyq; break;
	   default : console.log("not a valid company");
	}

	console.log(currentObj);

	if(currentObj.name==companyName){
		for (let i = 0 ; i < currentObj.carriers.length;i++){
		   console.log(currentObj.carriers[i]);
		   if(currentObj.carriers[i] == carrierName){carrier_true=carrierName;}
		}
		for (let j = 0 ; j < currentObj.carriers.length;j++){
		   if(currentObj.costumers[j] == costumerName){costumer_true=costumerName;}
		}
		console.log(costumer_true,carrier_true)

		if(costumer_true!=0 && carrier_true!=0){
			msgType=1;
		}
		else{
			msgType=0;
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
						}		
		  		} 
			});	
		}
	};
	contactForm();
})(jQuery);