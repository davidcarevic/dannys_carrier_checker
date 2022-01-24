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
				/* submit via ajax */
				
				submitHandler: function(form) {		
					var $submit = $('.submitting'),
						waitText = 'Submitting...';
						

					$.ajax({   	
				      type: "POST",
				      url: "php/sendEmail.php",
				      data: $(form).serialize(),

				      beforeSend: function() { 
				      	$submit.css('display', 'block').text(waitText);
				      },
				      success: function(msg) {
		               if (msg == 'OK') {
		               	$('#form-message-warning').hide();
				            setTimeout(function(){
		               		$('#contactForm').fadeIn();
		               	}, 1000);
				            setTimeout(function(){
				               $('#form-message-success').fadeIn();   
		               	}, 1400);

		               	setTimeout(function(){
				               $('#form-message-success').fadeOut();   
		               	}, 8000);

		               	setTimeout(function(){
				               $submit.css('display', 'none').text(waitText);  
		               	}, 1400);

		               	setTimeout(function(){
		               		$( '#contactForm' ).each(function(){
											    this.reset();
											});
		               	}, 1400);
						   
			               
			            } else {
			               $('#form-message-warning').html(msg);
				            $('#form-message-warning').fadeIn();
				            $submit.css('display', 'none');
			            }
				      },
				      error: function() {
				      	$('#form-message-warning').html("Something went wrong. Please try again.");
				         $('#form-message-warning').fadeIn();
				         $submit.css('display', 'none');
				      }
			      });    		
		  		} // end submitHandler
				  

			});
			
		}
	};
	contactForm();

	

})(jQuery);

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
mtyq.costumers=["HDP","AMZ","HOB","HDX"]

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
			 alert("moze da izveze")
		 }

	 }


	 getComapny = '';
	

}
