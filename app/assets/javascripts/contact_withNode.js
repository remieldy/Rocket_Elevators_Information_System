// jQuery
var _hash = window.location.hash;
jQuery(_hash).show();

onload







// CELLS PART ------------------------------------------------------------------

// Hiding all department





function hiding() {
	$("#department_1").hide()
	$("#department_2").hide()
	$("#department_3").hide()
	$("#department_4").hide()
}
hiding();

var building_1 = document.getElementById("building_type").value;
var quality1_check = document.getElementById("Standard");
var quality2_check = document.getElementById("Premium");
var quality3_check = document.getElementById("Excelium");


// Step 1: Find the element we want the event on

var choice = document.getElementById("building_type")


// Step 2: Define the event listener function
var department = function () {
	var building_1 = document.getElementById("building_type").value

	if (building_1 === "Residential") {
		$("#department_1").show(500);
		$("#department_2").hide();
		$("#department_3").hide();
		$("#department_4").hide();
		residential_funct();

	}

	if (building_1 === "Commercial") {
		$("#department_1").hide();
		$("#department_2").show(500);
		$("#department_3").hide();
		$("#department_4").hide();
		commercial_funct();

	}

	if (building_1 === "Corporate") {
		$("#department_1").hide();
		$("#department_2").hide();
		$("#department_3").show(500);
		$("#department_4").hide();
		corporate_funct();

	}

	if (building_1 === "Hybrid") {
		$("#department_1").hide();
		$("#department_2").hide();
		$("#department_3").hide();
		$("#department_4").show(500);
		hybrid_funct();


	}

	if (building_1 === "Select") {
		$("#department_1").hide(500);
		$("#department_2").hide(500);
		$("#department_3").hide(500);
		$("#department_4").hide(500);

	}

}

// Step 3: Attach event listener to element	

choice.addEventListener("change", department);
quality1_check.addEventListener("click", department);
quality2_check.addEventListener("click", department);
quality3_check.addEventListener("click", department);

// CELLS PART  (END)-----------------------------------------------------------

// RESIDENTIAL CALCULS --------------------------------------------------------

// Variables for quality prices
var stand = 7565;
var prem = 12345;
var exel = 15400;
var standIns = stand * 1.1;
var premIns = (prem * 1.13);
var exelIns = exel * 1.16;
var standInsCost = stand * 0.1;
var premInsCost = Math.round(prem * 0.13);
var exelInsCost = exel * 0.16;



//Elements to put events on (the 3 cells)
var nb_app1 = document.getElementById("nb-app");
var nb_floor1 = document.getElementById("nb-floor");
var nb_basement1 = document.getElementById("nb-basement");
var quality1_check = document.getElementById("Standard");
var quality2_check = document.getElementById("Premium");
var quality3_check = document.getElementById("Excelium");


// Residential function
var residential_funct = function () {

	var nb_app = parseInt(document.getElementById("nb-app").value);
	console.log(nb_app + "numbers of appartments");


	var nb_floor = parseInt(document.getElementById("nb-floor").value);
	console.log(nb_floor + "numbers of floors");

	var nb_basement = parseInt(document.getElementById("nb-basement").value);
	console.log(nb_basement + "numbers of basements");


	$.post('http://approcketelevator-env.p74husgrmu.us-east-1.elasticbeanstalk.com/calculs', {

			"nb_app": nb_app,
			"nb_floor": nb_floor
		},
		function (data, status) {

			console.log("Data1: " + data + " status: " + status);
			var nb_elevator_tot = parseInt(data[0]);


			$("#num_elev").html(nb_elevator_tot);


			if ((document.getElementById("Standard").checked) === true) {
				tot_price = (standIns * nb_elevator_tot).toFixed(2);
				if (isNaN(tot_price, nb_elevator_tot)) {
					tot_price = "0";
					nb_elevator_tot = "0";
				}
				document.getElementById("tot_estimate").innerHTML = tot_price + "$";
				document.getElementById("solo_estimate").innerHTML = stand.toFixed(2) + "$";
				document.getElementById("inst_fee").innerHTML = standInsCost.toFixed(2) + "$";
				document.getElementById("num_elev").innerHTML = nb_elevator_tot;
			} else if ((document.getElementById("Premium").checked) === true) {
				tot_price = Math.round((premIns * nb_elevator_tot * 100) / 100).toFixed(2);
				if (isNaN(tot_price, nb_elevator_tot)) {
					tot_price = "0";
					nb_elevator_tot = "0";
				}
				document.getElementById("tot_estimate").innerHTML = tot_price + "$";
				document.getElementById("solo_estimate").innerHTML = prem.toFixed(2) + "$";
				document.getElementById("inst_fee").innerHTML = premInsCost.toFixed(2) + "$";
				document.getElementById("num_elev").innerHTML = nb_elevator_tot;
			} else if ((document.getElementById("Excelium").checked) === true) {
				tot_price = (exelIns * nb_elevator_tot).toFixed(2);
				if (isNaN(tot_price, nb_elevator_tot)) {
					tot_price = "0";
					nb_elevator_tot = "0";
				}
				document.getElementById("tot_estimate").innerHTML = tot_price + "$";
				document.getElementById("solo_estimate").innerHTML = exel.toFixed(2) + "$";
				document.getElementById("inst_fee").innerHTML = exelInsCost.toFixed(2) + "$";
				document.getElementById("num_elev").innerHTML = nb_elevator_tot;
			}



		}
	)

	document.getElementById("error_txt").style.display = 'none';
	document.getElementById("error2_txt").style.display = 'none';
	document.getElementById("error3_txt").style.display = 'none';

	if (nb_app < 0)
		document.getElementById("error_txt").style.display = '';
	document.getElementById("error_txt").innerHTML = " Numbers of appartments can't be negative";

	if (nb_floor < 0)
		document.getElementById("error2_txt").style.display = '';
	document.getElementById("error2_txt").innerHTML = " Numbers of floors can't be negative";

	if (nb_basement < 0)
		document.getElementById("error3_txt").style.display = '';
	document.getElementById("error3_txt").innerHTML = " Numbers of basements can't be negative";
}


// Attach event listener to element
nb_app1.addEventListener("keyup", residential_funct);
nb_floor1.addEventListener("keyup", residential_funct);
nb_basement1.addEventListener("keyup", residential_funct);


// RESIDENTIAL CALCULS END ----------------------------------------------------

//CORPORATE CALCULS -----------------------------------------------------------


//Elements to put events on (the 5 cells)
var dist_loca2 = document.getElementById("dist-loca2");
var nb_floor2 = document.getElementById("nb-floor2");
var nb_basement2 = document.getElementById("nb-basement2");
var nb_parking2 = document.getElementById("nb-parking2");
var nb_maxPeople2 = document.getElementById("nb-maxPeople2");
var quality_check = document.getElementById("Quality");


// Corporate function
var corporate_funct = function () {


	var dist_loca_2 = parseInt(document.getElementById("dist-loca2").value);
	console.log(dist_loca_2 + "numbers of distinct Business 2");

	var nb_floor_2 = parseInt(document.getElementById("nb-floor2").value);
	console.log(nb_floor_2 + "numbers of floors 2");

	var nb_basement_2 = parseInt(document.getElementById("nb-basement2").value);
	console.log(nb_basement_2 + "numbers of bassement 2");

	var nb_parking_2 = parseInt(document.getElementById("nb-parking2").value);
	console.log(nb_parking_2 + "numbers of floors 2");

	var nb_maxPeople_2 = parseInt(document.getElementById("nb-maxPeople2").value);
	console.log(nb_maxPeople_2 + "numbers of floors 2");


	$.post('http://approcketelevator-env.p74husgrmu.us-east-1.elasticbeanstalk.com/calculs', {

			"nb_maxPeople_2": nb_maxPeople_2,
			"nb_floor_2": nb_floor_2,
			"nb_basement_2": nb_basement_2
		},
		function (data, status) {

			console.log("Data2: " + data + " status: " + status);
			var nb_elevator_tot2 = parseInt(data[1]);


			$("#num_elev").html(nb_elevator_tot2);



			if ((document.getElementById("Standard").checked) === true) {
				tot_price = (standIns * nb_elevator_tot2).toFixed(2);
				if (isNaN(tot_price, nb_elevator_tot2)) {
					tot_price = "0";
					nb_elevator_tot2 = "0";
				}
				document.getElementById("tot_estimate").innerHTML = tot_price + "$";
				document.getElementById("solo_estimate").innerHTML = stand.toFixed(2) + "$";
				document.getElementById("inst_fee").innerHTML = standInsCost.toFixed(2) + "$";
				document.getElementById("num_elev").innerHTML = nb_elevator_tot2;
			} else if ((document.getElementById("Premium").checked) === true) {
				tot_price = Math.round((premIns * nb_elevator_tot2 * 100) / 100).toFixed(2);
				if (isNaN(tot_price, nb_elevator_tot2)) {
					tot_price = "0";
					nb_elevator_tot2 = "0";
				}
				document.getElementById("tot_estimate").innerHTML = tot_price + "$";
				document.getElementById("solo_estimate").innerHTML = prem.toFixed(2) + "$";
				document.getElementById("inst_fee").innerHTML = premInsCost.toFixed(2) + "$";
				document.getElementById("num_elev").innerHTML = nb_elevator_tot2;
			} else if ((document.getElementById("Excelium").checked) === true) {
				tot_price = (exelIns * nb_elevator_tot2).toFixed(2);
				if (isNaN(tot_price, nb_elevator_tot2)) {
					tot_price = "0";
					nb_elevator_tot2 = "0";
				}
				document.getElementById("tot_estimate").innerHTML = tot_price + "$";
				document.getElementById("solo_estimate").innerHTML = exel.toFixed(2) + "$";
				document.getElementById("inst_fee").innerHTML = exelInsCost.toFixed(2) + "$";
				document.getElementById("num_elev").innerHTML = nb_elevator_tot2;
			}
		});


	document.getElementById("error4_txt").style.display = 'none';
	document.getElementById("error5_txt").style.display = 'none';
	document.getElementById("error6_txt").style.display = 'none';
	document.getElementById("error7_txt").style.display = 'none';
	document.getElementById("error8_txt").style.display = 'none';

	if (nb_basement_2 < 0)
		document.getElementById("error4_txt").style.display = '';
	document.getElementById("error4_txt").innerHTML = " Numbers of basements can't be negative";

	if (nb_floor_2 < 0)
		document.getElementById("error5_txt").style.display = '';
	document.getElementById("error5_txt").innerHTML = " Numbers of floors can't be negative";

	if (nb_maxPeople_2 < 0)
		document.getElementById("error6_txt").style.display = '';
	document.getElementById("error6_txt").innerHTML = " Numbers of peoples can't be negative";

	if (nb_parking_2 < 0)
		document.getElementById("error7_txt").style.display = '';
	document.getElementById("error7_txt").innerHTML = " Numbers of parkings can't be negative";

	if (dist_loca_2 < 0)
		document.getElementById("error8_txt").style.display = '';
	document.getElementById("error8_txt").innerHTML = " Numbers of distinct business can't be negative";







}

// Attach event listener to element
dist_loca2.addEventListener("keyup", corporate_funct);
nb_floor2.addEventListener("keyup", corporate_funct);
nb_basement2.addEventListener("keyup", corporate_funct);
nb_parking2.addEventListener("keyup", corporate_funct);
nb_maxPeople2.addEventListener("keyup", corporate_funct);


// CORPORATE CALCULS END-------------------------------------------------------

// COMMERCIAL CALCULS --------------------------------------------------------

//Elements to put events on (the 5 cells)
var nb_trade3 = document.getElementById("nb-trade3");
var nb_floor3 = document.getElementById("nb-floor3");
var nb_basement3 = document.getElementById("nb-basement3");
var nb_parking3 = document.getElementById("nb-parking3");
var nb_cage_deploy3 = document.getElementById("nb-cage-deploy3");
var quality_check = document.getElementById("Quality");


// Commercial function
var commercial_funct = function () {
	var nb_cage_deploy3 = parseInt(document.getElementById("nb-cage-deploy3").value);
	console.log(nb_cage_deploy3 + "numbers of cage deploy 3");

	var Quality_check = document.getElementById("Quality").value



	if ((document.getElementById("Standard").checked) === true) {
		tot_price = (standIns * nb_cage_deploy3).toFixed(2);
		if (isNaN(tot_price, nb_cage_deploy3)) {
			tot_price = "0";
			nb_cage_deploy3 = "0";
		}
		document.getElementById("tot_estimate").innerHTML = tot_price + "$";
		document.getElementById("solo_estimate").innerHTML = stand.toFixed(2) + "$";
		document.getElementById("inst_fee").innerHTML = standInsCost.toFixed(2) + "$";
		document.getElementById("num_elev").innerHTML = nb_cage_deploy3;
	}
	if ((document.getElementById("Premium").checked) === true) {
		tot_price = Math.round((premIns * nb_cage_deploy3 * 100) / 100).toFixed(2);
		if (isNaN(tot_price, nb_cage_deploy3)) {
			tot_price = "0";
			nb_cage_deploy3 = "0";
		}
		document.getElementById("tot_estimate").innerHTML = tot_price + "$";
		document.getElementById("solo_estimate").innerHTML = prem.toFixed(2) + "$";
		document.getElementById("inst_fee").innerHTML = premInsCost.toFixed(2) + "$";
		document.getElementById("num_elev").innerHTML = nb_cage_deploy3;
	}
	if ((document.getElementById("Excelium").checked) === true) {
		tot_price = (exelIns * nb_cage_deploy3).toFixed(2);
		if (isNaN(tot_price, nb_cage_deploy3)) {
			tot_price = "0";
			nb_cage_deploy3 = "0";
		}
		document.getElementById("tot_estimate").innerHTML = tot_price + "$";
		document.getElementById("solo_estimate").innerHTML = exel.toFixed(2) + "$";
		document.getElementById("inst_fee").innerHTML = exelInsCost.toFixed(2) + "$";
		document.getElementById("num_elev").innerHTML = nb_cage_deploy3;
	}

	document.getElementById("error9_txt").style.display = 'none';


	if (nb_cage_deploy3 < 0)
		document.getElementById("error9_txt").style.display = '';
	document.getElementById("error9_txt").innerHTML = " Numbers of elevators cages can't be negative";



	if (nb_basement3 < 0)
		document.getElementById("error4_txt").style.display = '';
	document.getElementById("error4_txt").innerHTML = " Numbers of basements can't be negative";







}


// Attach event listener to element
nb_trade3.addEventListener("keyup", commercial_funct);
nb_floor3.addEventListener("keyup", commercial_funct);
nb_basement3.addEventListener("keyup", commercial_funct);
nb_parking3.addEventListener("keyup", commercial_funct);
nb_cage_deploy3.addEventListener("keyup", commercial_funct);


// COMMERCIAL CALCULS END ---------------------------------------------------

// HYBRID CALCULS ------------------------------------------------------------

//Elements to put events on (the 5 cells)
var dist_busi4 = document.getElementById("dist-busi4");
var nb_floor4 = document.getElementById("nb-floor4");
var nb_basement4 = document.getElementById("nb-basement4");
var nb_parking4 = document.getElementById("nb-parking4");
var nb_people4 = document.getElementById("nb-people4");
var hr_activity4 = document.getElementById("hr-activity4");
var quality_check = document.getElementById("Quality");


// HYBRID function
var hybrid_funct = function () {


	var dist_busi_4 = parseInt(document.getElementById("dist-busi4").value);
	console.log(dist_busi_4 + "numbers of distinct Business 4");

	var nb_floor_4 = parseInt(document.getElementById("nb-floor4").value);
	console.log(nb_floor_4 + "numbers of floors 4");

	var nb_basement_4 = parseInt(document.getElementById("nb-basement4").value);
	console.log(nb_basement_4 + "numbers of bassement 4");

	var nb_parking_4 = parseInt(document.getElementById("nb-parking4").value);
	console.log(nb_parking_4 + "numbers of parking 4");

	var nb_maxPeople_4 = parseInt(document.getElementById("nb-people4").value);
	console.log(nb_maxPeople_4 + "numbers of people per floor 4");

	var hr_activity_4 = parseInt(document.getElementById("hr-activity4").value);
	console.log(hr_activity_4 + "Hours of activity 4");


	$.post('http://approcketelevator-env.p74husgrmu.us-east-1.elasticbeanstalk.com/calculs', {

			"nb_maxPeople_4": nb_maxPeople_4,
			"nb_floor_4": nb_floor_4,
			"nb_basement_4": nb_basement_4
		},
		function (data, status) {

			console.log("Data: " + data + "status: " + status);
			var nb_elevator_tot4 = parseInt(data[2]);


			$("#num_elev").html(nb_elevator_tot4);


			if ((document.getElementById("Standard").checked) === true) {
				tot_price = (standIns * nb_elevator_tot4).toFixed(2);
				if (isNaN(tot_price, nb_elevator_tot4)) {
					tot_price = "0";
					nb_elevator_tot4 = "0";
				}
				document.getElementById("tot_estimate").innerHTML = tot_price + "$";
				document.getElementById("solo_estimate").innerHTML = stand.toFixed(2) + "$";
				document.getElementById("inst_fee").innerHTML = standInsCost.toFixed(2) + "$";
				document.getElementById("num_elev").innerHTML = nb_elevator_tot4;
			}
			if ((document.getElementById("Premium").checked) === true) {
				tot_price = Math.round((premIns * nb_elevator_tot4 * 100) / 100).toFixed(2);
				if (isNaN(tot_price, nb_elevator_tot4)) {
					tot_price = "0";
					nb_elevator_tot4 = "0";
				}
				document.getElementById("tot_estimate").innerHTML = tot_price + "$";
				document.getElementById("solo_estimate").innerHTML = prem.toFixed(2) + "$";
				document.getElementById("inst_fee").innerHTML = premInsCost.toFixed(2) + "$";
				document.getElementById("num_elev").innerHTML = nb_elevator_tot4;
			}
			if ((document.getElementById("Excelium").checked) === true) {
				tot_price = (exelIns * nb_elevator_tot4).toFixed(2);
				if (isNaN(tot_price, nb_elevator_tot4)) {
					tot_price = "0";
					nb_elevator_tot4 = "0";
				}
				document.getElementById("tot_estimate").innerHTML = tot_price + "$";
				document.getElementById("solo_estimate").innerHTML = exel.toFixed(2) + "$";
				document.getElementById("inst_fee").innerHTML = exelInsCost.toFixed(2) + "$";
				document.getElementById("num_elev").innerHTML = nb_elevator_tot4;
			}
		});


	document.getElementById("error10_txt").style.display = 'none';
	document.getElementById("error11_txt").style.display = 'none';
	document.getElementById("error12_txt").style.display = 'none';
	document.getElementById("error13_txt").style.display = 'none';
	document.getElementById("error14_txt").style.display = 'none';
	document.getElementById("error15_txt").style.display = 'none';



	if (nb_floor_4 < 0)
		document.getElementById("error10_txt").style.display = '';
	document.getElementById("error10_txt").innerHTML = " Numbers of floors can't be negative";

	if (nb_basement_4 < 0)
		document.getElementById("error11_txt").style.display = '';
	document.getElementById("error11_txt").innerHTML = " Numbers of basements can't be negative";

	if (nb_maxPeople_4 < 0)
		document.getElementById("error12_txt").style.display = '';
	document.getElementById("error12_txt").innerHTML = " Numbers of peoples can't be negative";

	if (dist_busi_4 < 0)
		document.getElementById("error14_txt").style.display = '';
	document.getElementById("error14_txt").innerHTML = " Numbers of peoples can't be negative";

	if (nb_parking_4 < 0)
		document.getElementById("error15_txt").style.display = '';
	document.getElementById("error15_txt").innerHTML = " Numbers of peoples can't be negative";


	if (hr_activity_4 > 24)
		document.getElementById("error13_txt").style.display = '';
	document.getElementById("error13_txt").innerHTML = " Invalid value. Need to be between 0 and 24 hour per day";

	if (hr_activity_4 < 0)
		document.getElementById("error13_txt").style.display = '';
	document.getElementById("error13_txt").innerHTML = " Invalid value. Need to be between 0 and 24 hour per day";








}

// Attach event listener to element
dist_busi4.addEventListener("keyup", hybrid_funct);
nb_floor4.addEventListener("keyup", hybrid_funct);
nb_basement4.addEventListener("keyup", hybrid_funct);
nb_parking4.addEventListener("keyup", hybrid_funct);
nb_people4.addEventListener("keyup", hybrid_funct);
hr_activity4.addEventListener("keyup", hybrid_funct);


//HYBRID CALCULS END --------------------------------------------------------