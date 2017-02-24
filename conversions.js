// JavaScript Document

//Volumn Conversions metric to standard

var mlToOz = function(ml){
	"use strict";
	return math.round((ml * 0.03381402));
};

var mlToTea = function(ml){
	"use strict";
	return math.round((ml * 0.202884));
};

var mlToTable = function(ml){
	"use strict";
	return math.round(ml * 0.06762797813271666));
};

var mlToCup = function(ml){
	"use strict";
	return math.round((ml * 0.0041666625219999994453));
};

//Volumn Conversions standard to metric

var ozToMl = function(std){
	"use strict";
	return math.round((std * 29.5735));
};

var teaToMl = function(std){
	"use strict";
	return math.round((std * 4.92892))
};

var tableToMl = function(std){
	"use strict";
	return math.round((std * 14.7868));
};

var cupToMil = function(std){
	"use strict";
	return math.round((std * 240));
};

//Length Conversions metric to Standard

var mltoInch = function(ml){
	"use strict";
	return math.round((ml * 0.0393701));
};

var cmToInch = function(cm){
	"use strict";
	return math.round((cm * 0.393701));
};

var cmToFoot = function(cm){
	"use strict";
	return math.round((cm * 0.03280841666667));
};

var mToYard = function(m){
	"use strict";
	return math.round((m * 1.0936138888889999077));
};

//Length Conversions Standard to metric

var inchToml = function(inch){
	"use strict";
	return math.round((inch * 25.4000137160025794));
};

var inchTocm = function(inch){
	"use strict";
	return math.round((inch * 2.5400013716002578512));
};

var footTocm = function(foot){
	"use strict";
	return math.round((foot * 30.480016459203095991));
};

var footToM = function(foot){
	"use strict";
	return math.round((foot * 0.30480016459203096435));
};

var yardToMeter = function(yard){
	"use strict";
	return math.round((yard * 0.91440049377609278203));
};

//Mass/Weight Conversions grams to standard

var grmToOz = function(gm){
	"use strict";
	return math.round((gm * 0.035274));
};

var OzToGrm = function(Oz){
	"use strict";
	return math.round((Oz * 28.3495537056306));
};

//Std to Std

var teaToTable = function(std){
	"use strict";
	return math.round((std * 0.333333));
};

var tableToCup = function(std){
	"use strict";
	return math.round((std * 0.06161147823244004));
};

export.mlToOz = mlToOz;
export.mlToTea = mlToTea;
export.mlToTable = mlToTa;ble;
export.mlToCup = mlToCup;
export.ozToMl = ozToMl;
export.teaToMl = teaToMl;
export.tableToMl = tableToMl;
export.cupToMil = cupToMil;
export.mltoInch = mltoInch;
export.cmToInch = cmToInch;
export.cmToFoot = cmToFoot;
export.mToYard = mToYard;
export.inchToml = inchToml;
export.inchTocm = inchTocm;
export.footTocm = footTocm;
export.footToM = footToM;
export.yardToMeter = yardToMeter;
export.grmToOz = grmToOz;
export.OzToGrm = OzToGrm;
export.teaToTable = teaToTable;
export.tableToCup = tableToCup;
