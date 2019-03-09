var manufacturerChart = dc.rowChart('#manufacturer-chart');
var priceChart = dc.barChart('#price-chart');
var countryChart = dc.rowChart('#country-chart');
var bodyshapeChart = dc.pieChart('#body_shape-chart');
var bodytypeChart = dc.pieChart('#body_type-chart');
var neckjointChart = dc.pieChart('#neck_joint-chart');
var neckfinishChart = dc.pieChart('#neck_finish-chart');
var fretboardmaterialChart = dc.pieChart('#fretboard_material-chart');
var numberoffretsChart = dc.pieChart('#number_of_frets-chart');
var bridgetypeChart = dc.pieChart('#bridge_type-chart');
var tunersChart = dc.pieChart('#tuners-chart');
var activeorpassiveChart = dc.pieChart('#active_or_passive-chart');
var pickupconfigurationChart = dc.pieChart('#pickup_configuration-chart');
var guitarTable = dc.dataTable('#guitar-table');

// import data
d3.json('/data/guitars.json').then(function(data) {

    // create crossfilter object and dimension for all data
    var guitars = crossfilter(data);
    var all = guitars.groupAll();
    var palette = ["#585fd2","#3988e1","#1fb3d3","#1bd9ac","#34f07e","#6bf75c","#aff05b"]
 
    var manufacturerDim = guitars.dimension(function (d) { 
        return d.manufacturer; 
    });

    var manufacturerGroup = manufacturerDim.group().reduceCount();
    
    manufacturerChart
        .width(270)
        .height(180)
        .dimension(manufacturerDim)
        .group(manufacturerGroup)
        .ordinalColors(palette)
        .label(function (l) { return l.key; })
        .elasticX(true)
        .cap(7)
        .othersGrouper(false);
        

    // create price dimension and groups
    var priceDim = guitars.dimension(function (d) { 
        return d.price; 
    });

    var priceGroup = priceDim.group().reduceCount();

    priceChart
        .width(460) /* dc.barChart('#monthly-volume-chart', 'chartGroup'); */
        .height(180)
        .margins({top: 20, right: 20, bottom: 40, left: 40})
        .dimension(priceDim)
        .group(priceGroup)
        .centerBar(true)
        .ordinalColors(palette)
        .gap(-8)
        .x(d3.scaleLinear().domain([0, 6000]))
        .xAxis().tickFormat(function (p) { return '$' + p; });

    // create country dimension and groups
    var countryDim = guitars.dimension(function (d) { 
        return d.country; 
    });

    var countryGroup = countryDim.group().reduceCount();
    
    countryChart
        .width(267)
        .height(180)
        .dimension(countryDim)
        .group(countryGroup)
        .ordinalColors(palette)
        .label(function (l) { return l.key; })
        .elasticX(true)
        .cap(7)
        .othersGrouper(false);

    var bodyshapeDim = guitars.dimension(function (d) { 
        return d.body_shape; 
    });

    var bodyshapeGroup = bodyshapeDim.group().reduceCount();

    bodyshapeChart
        .width(180)
        .height(180)
        .radius(80)
        .innerRadius(30)
        .dimension(bodyshapeDim)
        .group(bodyshapeGroup)
        .ordinalColors(palette);
    
    var bodytypeDim = guitars.dimension(function (d) { 
        return d.body_type; 
    });

    var bodytypeGroup = bodytypeDim.group().reduceCount();

    bodytypeChart
        .width(180)
        .height(180)
        .radius(80)
        .innerRadius(30)
        .dimension(bodytypeDim)
        .group(bodytypeGroup)
        .ordinalColors(palette);

    var neckjointDim = guitars.dimension(function (d) { 
        return d.neck_joint; 
    });

    var neckjointGroup = neckjointDim.group().reduceCount();

    neckjointChart
        .width(180)
        .height(180)
        .radius(80)
        .innerRadius(30)
        .dimension(neckjointDim)
        .group(neckjointGroup)
        .ordinalColors(palette);

    var neckfinishDim = guitars.dimension(function (d) { 
        return d.neck_finish; 
    });

    var neckfinishGroup = neckfinishDim.group().reduceCount();

    neckfinishChart
        .width(180)
        .height(180)
        .radius(80)
        .innerRadius(30)
        .dimension(neckfinishDim)
        .group(neckfinishGroup)
        .ordinalColors(palette);

    var fretboardmaterialDim = guitars.dimension(function (d) { 
        return d.fretboard_material; 
    });

    var fretboardmaterialGroup = fretboardmaterialDim.group().reduceCount();

    fretboardmaterialChart
        .width(180)
        .height(180)
        .radius(80)
        .innerRadius(30)
        .dimension(fretboardmaterialDim)
        .group(fretboardmaterialGroup)
        .ordinalColors(palette);

    var numberoffretsDim = guitars.dimension(function (d) { 
        return d.number_of_frets; 
    });

    var numberoffretsGroup = numberoffretsDim.group().reduceCount();

    numberoffretsChart
        .width(180)
        .height(180)
        .radius(80)
        .innerRadius(30)
        .dimension(numberoffretsDim)
        .group(numberoffretsGroup)
        .ordinalColors(palette);  

    var bridgetypeDim = guitars.dimension(function (d) { 
        return d.bridge_type; 
    });

    var bridgetypeGroup = bridgetypeDim.group().reduceCount();

    bridgetypeChart
        .width(180)
        .height(180)
        .radius(80)
        .innerRadius(30)
        .dimension(bridgetypeDim)
        .group(bridgetypeGroup)
        .ordinalColors(palette); 

    var tunersDim = guitars.dimension(function (d) { 
        return d.tuners; 
    });

    var tunersGroup = tunersDim.group().reduceCount();

    tunersChart
        .width(180)
        .height(180)
        .radius(80)
        .innerRadius(30)
        .dimension(tunersDim)
        .group(tunersGroup)
        .ordinalColors(palette); 

    var activeorpassiveDim = guitars.dimension(function (d) { 
        return d.active_or_passive; 
    });

    var activeorpassiveGroup = activeorpassiveDim.group().reduceCount();

    activeorpassiveChart
        .width(180)
        .height(180)
        .radius(80)
        .innerRadius(30)
        .dimension(activeorpassiveDim)
        .group(activeorpassiveGroup)
        .ordinalColors(palette);  

    var pickupconfigurationDim = guitars.dimension(function (d) { 
        return d.pickup_configuration; 
    });

    var pickupconfigurationGroup = pickupconfigurationDim.group().reduceCount();

    pickupconfigurationChart
        .width(180)
        .height(180)
        .radius(80)
        .innerRadius(30)
        .dimension(pickupconfigurationDim)
        .group(pickupconfigurationGroup)
        .ordinalColors(palette);        

    guitarTable
        .dimension(manufacturerDim)
        .group(function(d) { return d.maufacturer; })
        .showGroups(false)
        .size(25)
        .columns([
            function(d) { return d.manufacturer },
            function(d) { return d.product },
            function(d) { price = '$' + d.price; return price },
            function(d) { 
                img = '<a href="' + d.page_url + '" target="_blank"> <img src="' + d.image_url + '" height="120" width="120"></a>'
                return img
             }
        ])
        .sortBy(function(d) { return d.price });
 
    dc.dataCount('.dc-data-count')
        .dimension(guitars)
        .group(all)

    dc.renderAll();

});

function reset() {
    dc.filterAll();
    dc.renderAll();
};



