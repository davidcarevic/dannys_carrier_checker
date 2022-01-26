// company class
// data hardcoded, not making a proper relationship model without getting paid
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
hddr.carriers=["HDDR","ESNL_DROP","XPOR_DROP","IMCL_DROP","IMCP","CFMM_DROP"];
hddr.costumers=["HDP","AMZ","HOB","MRK","FMG","KRK","CRX","HXD","ADI","TJM"];

var mtyq = new Company();
mtyq.name="MTYQ";
mtyq.carriers=["HDDR","CFMM_DROP","ATMI","CFRT_DROP","NEXQ","KNIG","IMCL","IMCL_DROP","ESNL_DROP","XPOR_DROP","HJBT"];
mtyq.costumers=["HDP","AMZ","HDX"];

var wglo = new Company();
wglo.name="WGLO";
wglo.carriers=["HDDR","CFMM_DROP","ATMI","CFRT_DROP","NEXQ","KNIG","IMCL","IMCL_DROP","ESNL_DROP","XPOR_DROP","HJBT"];
wglo.costumers=["HDP","AMZ","HDX"];

var cgot = new Company();
cgot.name="CGOT";
cgot.carriers=["HDDR","CFMM_DROP","ATMI","CFRT_DROP","NEXQ","KNIG","IMCL","IMCL_DROP","ESNL_DROP","XPOR_DROP","HJBT"];
cgot.costumers=["HDP","AMZ","HDX"];

var simplified = new Company();
simplified.name="SIMPLIFIED";
simplified.carriers=["HDDR","CFMM_DROP","ATMI","CFRT_DROP","NEXQ","KNIG","IMCL","IMCL_DROP","ESNL_DROP","XPOR_DROP","HJBT"];
simplified.costumers=["HDP","AMZ","HDX"];

var dnlp = new Company();
dnlp.name="DNLP";
dnlp.carriers=["HDDR","CFMM_DROP","ATMI","CFRT_DROP","NEXQ","KNIG","IMCL","IMCL_DROP","ESNL_DROP","XPOR_DROP","HJBT"]; // not sure what it's carriers are
dnlp.costumers=["HDP","HDX"];

// carrier_costumer_relation list - would be better to just make these into separate objects and select from them inasted of writing lists twice, however the company lists are GLOBAL for all their costumers
hddr_list=["HDP","AMZ","HOB","MRK","FMG","KRK","CRX","HXD","ADI","TJM"];
cfmm_drop_list=['HDP'];
atmi_list=['AMZ'];
hjbt_list=['AMZ'];
slii_list=['SPC'];
ccxp_list=['IKA'];
fmg_d_list=['FMG-D'];
adame_list=['ADAME','FMG-D'];
imcl_list=['HDP','AMZ'];
imcl_drop_list=['HDP'];
xpor_drop_list=['HDP'];
esnl_drop_list=['HDP'];
pida_list=['FMG','CSW'];
knig_list=['AMZ'];
nexq_list=['ANZ'];
ceva_drop_list=['HXD'];
mats_list=['FNG','CSW'];
pfch_list=['HXD','KRK','HEW'];
cfrt_drop_list=['HDX'];
scnn_list=['CSW'];
pcnt_list=['KRK','HXD','HEW'];
fxxp_drop_list=['FMG-D'];

var msgType=0;
var carrierTrue=0;

//checking function
function check(){

	// DOM data
	var companyName = document.getElementById("company").value.toUpperCase().replace(/ /g, '');
	var carrierName = document.getElementById("carrier").value.toUpperCase().replace(/ /g, '');
	var costumerName = document.getElementById("costumer").value.toUpperCase().replace(/ /g, '');

	console.log(companyName,carrierName,costumerName);
	console.log("class :" , hddr, mtyq);
	// true false values
	var carrier_true=0;
	var costumer_true=0;
	var notValid=0;

	// operating object
	var currentObj="";
	var currentList="";

	// selecting the current object
	switch(companyName){
	   case 'HDDR' : currentObj=hddr; break;
	   case 'MTYQ' : currentObj=mtyq; break;
	   case 'WGLO' : currentObj=wglo; break;
	   case 'CGOT' : currentObj=cgot; break;
	   case 'SIMPLIFIED' : currentObj=simplified; break;
	   case 'DNLP' : currentObj=dnlp; break;
	   default : notValid=1;
	}
	//selecting the list for the logic check
	switch(carrierName){
		case 'HDDR' : currentList=hddr_list; break;
		case 'CFMM_DROP': currentList=cfmm_drop_list; break;
		case 'HJBT' : currentList=hjbt_list; break;
		case 'SLII' : currentList=slii_list; break;
		case 'CCXP' : currentList=ccxp_list; break;
		case 'FMG-D': currentList=fmg_d_list; break;
		case 'ADAME' : currentList=adame_list; break;
		case 'IMCL' : currentList=imcl_list; break;
		case 'IMCL_DROP' : currentList=imcl_drop_list; break;
		case 'XPOR_DROP' : currentList=xpor_drop_list; break;
		case 'ESNL_DROP' : currentList=esnl_drop_list; break;
		case 'PIDA' : currentList=pida_list; break;
		case 'KNIG' : currentList=knig_list; break;
		case 'NEXQ' : currentList=nexq_list; break;
		case 'CEVA_DROP' : currentList=ceva_drop_list; break;
		case 'MATS' : currentList=mats_list; break;
		case 'PFCH' : currentList=pfch_list; break;
		case 'CFRT_DROP' : currentList=cfrt_drop_list; break;
		case 'SCNN' : currentList=scnn_list; break;
		case 'PCNT' : currentList=pcnt_list; break;
		case 'FXXP_DROP' : currentList=fxxp_drop_list; break;
		default : notValid=1;
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
	if(currentList){
		//checking list of a carrier if they have those costumers
		for(let costumer in currentList){
			//console.log('costumer in current list ', currentList[costumer])
			//console.log('current costumer : ',costumerName);
			if(currentList[costumer]==costumerName){carrierTrue=1;break;}
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
						

						if(msgType==0 || carrierTrue==0){
							$('#form-message-warning').html("REJECT! This company cannot take this container.");
				            $('#form-message-warning').fadeIn();
							
	
						}
						else{
						    $('#form-message-success').fadeIn();   

							//resets the value
							carrierTrue=0;
							msgType=0;
							
						}		
		  		} 
			});	
		}
	};
	contactForm();
})(jQuery);