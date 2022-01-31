// company class
// data hardcoded, not making a proper relationship model without getting paid, don't want to pay for a hosting server for backend
// without any backend calls it executes faster, not a lot of data so there's no need for a db
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
hddr.carriers=["HDDR","ESNL_DROP","XPOR_DROP","IMCL_DROP","IMCL","CFMM_DROP"];
hddr.costumers=["HDP","AMZ","HOB","MRK","FMG","KRK","CRX","HXD","ADI","TJM","BBI"];

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

var esnl_drop = new Company();
esnl_drop.name="ESNL_DROP";
esnl_drop.carriers=["HDDR","ESNL_DROP","IMCL","IMCL_DROP"];
esnl_drop.costumers=['HDP'];

var imcl = new Company();
imcl.name="IMCL";
imcl.carriers=["HDDR","ESNL_DROP","IMCL","IMCL_DROP"];
imcl.costumers=['HDP',"AMZ"];

var pida = new Company();
pida.name="PIDA";
pida.carriers=["PIDA","MATS"];
pida.costumers=["FMG","CSW"];

var cfmm_drop = new Company();
cfmm_drop.name="CFMM_DROP";
cfmm_drop.carriers=["CFMM_DROP"];
cfmm_drop.costumers=["HDP"];

var hjbt = new Company();
hjbt.name="HJBT";
hjbt.carriers=["HJBT"];
hjbt.costumers=["AMZ"];

var slii = new Company();
slii.name="SLII";
slii.carriers=["SLII"];
slii.costumers=["SPC"];

var fmg_d = new Company();
fmg_d.name="FMG-D";
fmg_d.carriers=['ADAME','FMG-D'];
fmg_d.costumers=['FMG-D'];

var adame = new Company();
adame.name="ADAME";
adame.carriers=['ADAME','FMG-D'];
adame.costumers=['FMG-D'];

var imcl_drop = new Company();
imcl_drop.name="IMCL_DROP";
imcl_drop.carriers=["IMCL_DROP","IMCL","ESNL_DROP"];
imcl_drop.costumers=["HDP"];

var xpor_drop = new Company();
xpor_drop.name="XPOR_DROP";
xpor_drop.carriers=["XPOR_DROP"];
xpor_drop.costumers=["HDP"];

var knig = new Company();
knig.name="KNIG";
knig.carriers=["KNIG"];
knig.costumers=["AMZ"];

var nexq = new Company();
nexq.name="NEXQ";
nexq.carriers=["NEXQ"];
nexq.costumers=["AMZ"];

ceva_drop = new Company();
ceva_drop.name="CEVA_DROP";
ceva_drop.carriers=["CEVA","CEVA_DROP"];
ceva_drop.costumers=["HXD"];

ceva = new Company();
ceva.name="CEVA";
ceva.carriers=["CEVA","CEVA_DROP"];
ceva.costumers=["HXD"];

mats = new Company();
mats.name="MATS";
mats.carriers=["PIDA","MATS"];
mats.costumers=["FMG,CSW"];

pfch = new Company();
pfch.name="PFCH";
pfch.carriers=["PFCH","PCNT"];
pfch.costumers=["HXD","KRK","HEW"];

cfrt_drop = new Company();
cfrt_drop.name="CFRT_DROP";
cfrt_drop.carriers=["CFRT_DROP"];
cfrt_drop.costumers=["HDX"];

scnn = new Company();
scnn.name="SCNN";
scnn.carriers=["SCNN"];
scnn.costumers=["CSW"];

pcnt = new Company();
pcnt.name="PCNT";
pcnt.carriers=["PCNT","PFCH"];

atmi = new Company();
atmi.name="ATMI";
atmi.carriers=["ATMI"];
atmi.costumers=["AMZ"];

ccxp = new Company();
ccxp.name="CCXP";
ccxp.carriers=["CCXP"];
ccxp.costumers=["IKA"];

fxxp_drop = new Company();
fxxp_drop.name="FXXP_DROP";
fxxp_drop.carriers=["FXXP_DROP","FMG-D"];
fxxp_drop.costumers=["FMG-D"];

// carrier_costumer_relation list - would be better to just make these into separate objects and select from them inasted of writing lists twice, however the company lists are GLOBAL for all their costumers
hddr_list=["HDP","AMZ","HOB","MRK","FMG","KRK","CRX","HXD","ADI","TJM","BBI"];
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
ceva_list=['HXD'];
mats_list=['FMG','CSW'];
pfch_list=['HXD','KRK','HEW'];
cfrt_drop_list=['HDX'];
scnn_list=['CSW'];
pcnt_list=['KRK','HXD','HEW'];
fxxp_drop_list=['FMG-D'];

var msgType=0;
var carrierTrue=0;
var errorMsg=[];

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
	   case 'ESNL_DROP' : currentObj=esnl_drop; break;
	   case 'IMCL' : currentObj=imcl; break;
	   case 'PIDA' : currentObj=pida; break;
	   case 'CFMM_DROP' : currentObj=cfmm_drop; break;
	   case 'HJBT' : currentObj=hjbt; break;
	   case 'FMG-D' : currentObj=fmg_d; break;
	   case 'ADAME' : currentObj=adame; break;
	   case 'IMCL_DROP' : currentObj=imcl_drop; break;
	   case 'XPOR_DROP' : currentObj=xpor_drop; break;
	   case 'KNIG' : currentObj=knig; break;
	   case 'CEVA_DROP' : currentObj=ceva_drop; break;
	   case 'CEVA' : currentObj=ceva; break;
	   case 'MATS' : currentObj=mats; break;
	   case 'PFCH' : currentObj=pfch; break;
	   case 'CFRT_DROP' : currentObj=cfrt_drop; break;
	   case 'SCNN' : currentObj=scnn; break;
	   case 'PCNT' : currentObj=pcnt; break;
	   case 'ATMI' : currentObj=atmi; break;
	   case 'CCXP' : currentObj=ccxp; break;
	   case 'FXXP_DROP': currentObj=fxxp_drop; break;
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
		case 'CEVA' : currentList=ceva_list; break;
		case 'MATS' : currentList=mats_list; break;
		case 'PFCH' : currentList=pfch_list; break;
		case 'CFRT_DROP' : currentList=cfrt_drop_list; break;
		case 'SCNN' : currentList=scnn_list; break;
		case 'PCNT' : currentList=pcnt_list; break;
		case 'FXXP_DROP' : currentList=fxxp_drop_list; break;
        case 'ATMI' : currentList=atmi_list; break;
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
			if(carrier_true==0){errorMsg.push("<div>"+companyName+" doesn't take "+carrierName+" containers.</div>")}
			if(costumer_true==0){errorMsg.push("<div>"+companyName+" doesn't have "+costumerName+" as a costumer.</div>")}
			// resets the values for a new input if a match is not found
			msgType=0;
			costumer_true=0;
			carrier_true=0;
		}
	}
	if(currentList){
		//checking list of a carrier if they have those costumers
		for(let costumer in currentList){
			console.log('costumer in current list ', currentList[costumer])
			console.log('current costumer : ',costumerName);
			if(currentList[costumer]==costumerName){carrierTrue=1;break;}
		}
		if(carrierTrue==0){errorMsg.push("<div>"+carrierName+" doesn't have "+costumerName+" as a costumer.</div>");}
	}
}
else{errorMsg="Invalid inputs."}
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
					    console.log(" OVO OVDE ", carrierTrue,msgType);
						$('#form-message-warning').hide();
						$('#form-message-success').hide();
						if(msgType==0 || carrierTrue==0){
							$('#form-message-warning').html(errorMsg);
				            $('#form-message-warning').fadeIn();
						}
						else{
						    $('#form-message-success').fadeIn();   					
							
						}		

						//resets the value
						errorMsg=[];
						carrierTrue=0;
						msgType=0;
		  		} 
			});	
		}
	};
	contactForm();
})(jQuery);
