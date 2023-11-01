var wms_layers = [];

var lyr_LEBANGKA_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "LEBANGKA",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/LEBANGKA_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [573269.419717, 9012517.027200, 575697.449183, 9014467.006300]
                            })
                        });
var lyr_DEMNAS_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "DEMNAS",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DEMNAS_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13098562.733281, -998446.133697, 13101025.923334, -996451.436138]
                            })
                        });
var format_PETATUTUPANLAHANLEBANGKA_2 = new ol.format.GeoJSON();
var features_PETATUTUPANLAHANLEBANGKA_2 = format_PETATUTUPANLAHANLEBANGKA_2.readFeatures(json_PETATUTUPANLAHANLEBANGKA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PETATUTUPANLAHANLEBANGKA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETATUTUPANLAHANLEBANGKA_2.addFeatures(features_PETATUTUPANLAHANLEBANGKA_2);
var lyr_PETATUTUPANLAHANLEBANGKA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PETATUTUPANLAHANLEBANGKA_2, 
                style: style_PETATUTUPANLAHANLEBANGKA_2,
                interactive: true,
    title: 'PETA TUTUPAN LAHAN LEBANGKA<br />\
    <img src="styles/legend/PETATUTUPANLAHANLEBANGKA_2_0.png" /> Bangunan<br />\
    <img src="styles/legend/PETATUTUPANLAHANLEBANGKA_2_1.png" /> Belukar<br />\
    <img src="styles/legend/PETATUTUPANLAHANLEBANGKA_2_2.png" /> Jalan<br />\
    <img src="styles/legend/PETATUTUPANLAHANLEBANGKA_2_3.png" /> Kolam<br />\
    <img src="styles/legend/PETATUTUPANLAHANLEBANGKA_2_4.png" /> Lahan Terbuka<br />\
    <img src="styles/legend/PETATUTUPANLAHANLEBANGKA_2_5.png" /> Laut<br />\
    <img src="styles/legend/PETATUTUPANLAHANLEBANGKA_2_6.png" /> Permukiman<br />\
    <img src="styles/legend/PETATUTUPANLAHANLEBANGKA_2_7.png" /> Pertanian Lahan Kering<br />\
    <img src="styles/legend/PETATUTUPANLAHANLEBANGKA_2_8.png" /> Pertanian Lahan Kering Campur<br />\
    <img src="styles/legend/PETATUTUPANLAHANLEBANGKA_2_9.png" /> Sungai<br />\
    <img src="styles/legend/PETATUTUPANLAHANLEBANGKA_2_10.png" /> <br />'
        });
var format_KONTUR10M_3 = new ol.format.GeoJSON();
var features_KONTUR10M_3 = format_KONTUR10M_3.readFeatures(json_KONTUR10M_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KONTUR10M_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KONTUR10M_3.addFeatures(features_KONTUR10M_3);
var lyr_KONTUR10M_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KONTUR10M_3, 
                style: style_KONTUR10M_3,
                interactive: true,
                title: '<img src="styles/legend/KONTUR10M_3.png" /> KONTUR 10M'
            });
var format_PETACITRASATELIT_4 = new ol.format.GeoJSON();
var features_PETACITRASATELIT_4 = format_PETACITRASATELIT_4.readFeatures(json_PETACITRASATELIT_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PETACITRASATELIT_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETACITRASATELIT_4.addFeatures(features_PETACITRASATELIT_4);
var lyr_PETACITRASATELIT_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PETACITRASATELIT_4, 
                style: style_PETACITRASATELIT_4,
                interactive: true,
                title: '<img src="styles/legend/PETACITRASATELIT_4.png" /> PETA CITRA SATELIT'
            });
var format_SUNGAI_LABANGKA_5 = new ol.format.GeoJSON();
var features_SUNGAI_LABANGKA_5 = format_SUNGAI_LABANGKA_5.readFeatures(json_SUNGAI_LABANGKA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LABANGKA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LABANGKA_5.addFeatures(features_SUNGAI_LABANGKA_5);
var lyr_SUNGAI_LABANGKA_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_LABANGKA_5, 
                style: style_SUNGAI_LABANGKA_5,
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LABANGKA_5.png" /> SUNGAI_LABANGKA'
            });
var format_JALAN_TERSUS_LABANGKA_6 = new ol.format.GeoJSON();
var features_JALAN_TERSUS_LABANGKA_6 = format_JALAN_TERSUS_LABANGKA_6.readFeatures(json_JALAN_TERSUS_LABANGKA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_TERSUS_LABANGKA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_TERSUS_LABANGKA_6.addFeatures(features_JALAN_TERSUS_LABANGKA_6);
var lyr_JALAN_TERSUS_LABANGKA_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_TERSUS_LABANGKA_6, 
                style: style_JALAN_TERSUS_LABANGKA_6,
                interactive: true,
                title: '<img src="styles/legend/JALAN_TERSUS_LABANGKA_6.png" /> JALAN_TERSUS_LABANGKA'
            });

lyr_LEBANGKA_0.setVisible(true);lyr_DEMNAS_1.setVisible(true);lyr_PETATUTUPANLAHANLEBANGKA_2.setVisible(true);lyr_KONTUR10M_3.setVisible(true);lyr_PETACITRASATELIT_4.setVisible(true);lyr_SUNGAI_LABANGKA_5.setVisible(true);lyr_JALAN_TERSUS_LABANGKA_6.setVisible(true);
var layersList = [lyr_LEBANGKA_0,lyr_DEMNAS_1,lyr_PETATUTUPANLAHANLEBANGKA_2,lyr_KONTUR10M_3,lyr_PETACITRASATELIT_4,lyr_SUNGAI_LABANGKA_5,lyr_JALAN_TERSUS_LABANGKA_6];
lyr_PETATUTUPANLAHANLEBANGKA_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Luas': 'Luas', 'Id': 'Id', 'Class_1': 'Class_1', 'Class_2': 'Class_2', 'LANDCOVER1': 'LANDCOVER1', 'LANDCOVER2': 'LANDCOVER2', 'Toponimi': 'Toponimi', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_KONTUR10M_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'LAYER': 'LAYER', 'ELEVATION': 'ELEVATION', 'CLOSED_CON': 'CLOSED_CON', 'Shape_Leng': 'Shape_Leng', });
lyr_PETACITRASATELIT_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Luas': 'Luas', 'Id': 'Id', 'Class_1': 'Class_1', 'Class_2': 'Class_2', 'LANDCOVER1': 'LANDCOVER1', 'LANDCOVER2': 'LANDCOVER2', 'Toponimi': 'Toponimi', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SUNGAI_LABANGKA_5.set('fieldAliases', {'Id': 'Id', });
lyr_JALAN_TERSUS_LABANGKA_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Code': 'Code', 'Shape_Leng': 'Shape_Leng', });
lyr_PETATUTUPANLAHANLEBANGKA_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Luas': 'TextEdit', 'Id': 'TextEdit', 'Class_1': 'TextEdit', 'Class_2': 'TextEdit', 'LANDCOVER1': 'TextEdit', 'LANDCOVER2': 'TextEdit', 'Toponimi': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_KONTUR10M_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'ELEVATION': 'TextEdit', 'CLOSED_CON': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_PETACITRASATELIT_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Luas': 'TextEdit', 'Id': 'TextEdit', 'Class_1': 'TextEdit', 'Class_2': 'TextEdit', 'LANDCOVER1': 'TextEdit', 'LANDCOVER2': 'TextEdit', 'Toponimi': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SUNGAI_LABANGKA_5.set('fieldImages', {'Id': 'Range', });
lyr_JALAN_TERSUS_LABANGKA_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'Code': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_PETATUTUPANLAHANLEBANGKA_2.set('fieldLabels', {'OBJECTID': 'no label', 'Luas': 'no label', 'Id': 'no label', 'Class_1': 'no label', 'Class_2': 'no label', 'LANDCOVER1': 'no label', 'LANDCOVER2': 'no label', 'Toponimi': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_KONTUR10M_3.set('fieldLabels', {'OBJECTID': 'no label', 'NAME': 'no label', 'LAYER': 'no label', 'ELEVATION': 'no label', 'CLOSED_CON': 'no label', 'Shape_Leng': 'no label', });
lyr_PETACITRASATELIT_4.set('fieldLabels', {'OBJECTID': 'no label', 'Luas': 'no label', 'Id': 'no label', 'Class_1': 'no label', 'Class_2': 'no label', 'LANDCOVER1': 'no label', 'LANDCOVER2': 'no label', 'Toponimi': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SUNGAI_LABANGKA_5.set('fieldLabels', {'Id': 'no label', });
lyr_JALAN_TERSUS_LABANGKA_6.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Code': 'no label', 'Shape_Leng': 'no label', });
lyr_JALAN_TERSUS_LABANGKA_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});