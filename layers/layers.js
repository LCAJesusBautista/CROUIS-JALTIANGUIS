var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Zona_urbana_1 = new ol.format.GeoJSON();
var features_Zona_urbana_1 = format_Zona_urbana_1.readFeatures(json_Zona_urbana_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_urbana_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_urbana_1.addFeatures(features_Zona_urbana_1);
var lyr_Zona_urbana_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_urbana_1, 
                style: style_Zona_urbana_1,
                popuplayertitle: 'Zona_urbana',
                interactive: false,
                title: '<img src="styles/legend/Zona_urbana_1.png" /> Zona_urbana'
            });
var format_PREDIOSWEB_2 = new ol.format.GeoJSON();
var features_PREDIOSWEB_2 = format_PREDIOSWEB_2.readFeatures(json_PREDIOSWEB_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PREDIOSWEB_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PREDIOSWEB_2.addFeatures(features_PREDIOSWEB_2);
var lyr_PREDIOSWEB_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PREDIOSWEB_2, 
                style: style_PREDIOSWEB_2,
                popuplayertitle: 'PREDIOS WEB',
                interactive: true,
    title: 'PREDIOS WEB<br />\
    <img src="styles/legend/PREDIOSWEB_2_0.png" /> BAÑOS<br />\
    <img src="styles/legend/PREDIOSWEB_2_1.png" /> BASURERO<br />\
    <img src="styles/legend/PREDIOSWEB_2_2.png" /> CABAÑAS<br />\
    <img src="styles/legend/PREDIOSWEB_2_3.png" /> CANCHA<br />\
    <img src="styles/legend/PREDIOSWEB_2_4.png" /> CASA<br />\
    <img src="styles/legend/PREDIOSWEB_2_5.png" /> CASA DESHABITADA<br />\
    <img src="styles/legend/PREDIOSWEB_2_6.png" /> CASETA<br />\
    <img src="styles/legend/PREDIOSWEB_2_7.png" /> CENTRO DE SALUD<br />\
    <img src="styles/legend/PREDIOSWEB_2_8.png" /> ESCUELA<br />\
    <img src="styles/legend/PREDIOSWEB_2_9.png" /> KIOSKO<br />\
    <img src="styles/legend/PREDIOSWEB_2_10.png" /> MANANTIAL<br />\
    <img src="styles/legend/PREDIOSWEB_2_11.png" /> NEGOCIO<br />\
    <img src="styles/legend/PREDIOSWEB_2_12.png" /> PARQUE<br />\
    <img src="styles/legend/PREDIOSWEB_2_13.png" /> PTAR<br />\
    <img src="styles/legend/PREDIOSWEB_2_14.png" /> SOLAR<br />\
    <img src="styles/legend/PREDIOSWEB_2_15.png" /> TANQUE DE AGUA<br />\
    <img src="styles/legend/PREDIOSWEB_2_16.png" /> TEMPLO<br />\
    <img src="styles/legend/PREDIOSWEB_2_17.png" /> TIENDA<br />\
    <img src="styles/legend/PREDIOSWEB_2_18.png" /> PANTEON MUNICIPAL<br />\
    <img src="styles/legend/PREDIOSWEB_2_19.png" /> ASERRADERO<br />\
    <img src="styles/legend/PREDIOSWEB_2_20.png" /> PALACIO MUNICIPAL<br />\
    <img src="styles/legend/PREDIOSWEB_2_21.png" /> <br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_Zona_urbana_1.setVisible(true);lyr_PREDIOSWEB_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Zona_urbana_1,lyr_PREDIOSWEB_2];
lyr_Zona_urbana_1.set('fieldAliases', {'IDENTIFICA': 'IDENTIFICA', 'AMBITO': 'AMBITO', 'CVEGEO': 'CVEGEO', 'NOMBRE': 'NOMBRE', });
lyr_PREDIOSWEB_2.set('fieldAliases', {'IDENTIFICA': 'IDENTIFICADOR', 'NOMBRE DEL': 'NOMBRE DEL PROPIETARIO', 'RESPONSABL': 'RESPONSABLE', 'SERVICIOS': 'SERVICIOS', 'CALLE': 'CALLE', 'CONTRA CAL': 'CONTRA CALLE', 'CASA/SOLAR': 'CASA/SOLAR', 'TIPO': 'TIPO', 'IMPUESTO': 'IMPUESTO', 'RADICA EL': 'RESIDENCIA DEL PROPIETARIO', });
lyr_Zona_urbana_1.set('fieldImages', {'IDENTIFICA': 'Range', 'AMBITO': 'TextEdit', 'CVEGEO': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_PREDIOSWEB_2.set('fieldImages', {'IDENTIFICA': 'TextEdit', 'NOMBRE DEL': 'TextEdit', 'RESPONSABL': 'TextEdit', 'SERVICIOS': 'TextEdit', 'CALLE': 'TextEdit', 'CONTRA CAL': 'TextEdit', 'CASA/SOLAR': 'TextEdit', 'TIPO': 'TextEdit', 'IMPUESTO': 'TextEdit', 'RADICA EL': 'TextEdit', });
lyr_Zona_urbana_1.set('fieldLabels', {'IDENTIFICA': 'no label', 'AMBITO': 'no label', 'CVEGEO': 'no label', 'NOMBRE': 'no label', });
lyr_PREDIOSWEB_2.set('fieldLabels', {'IDENTIFICA': 'inline label - always visible', 'NOMBRE DEL': 'inline label - always visible', 'RESPONSABL': 'inline label - always visible', 'SERVICIOS': 'inline label - always visible', 'CALLE': 'inline label - always visible', 'CONTRA CAL': 'inline label - always visible', 'CASA/SOLAR': 'inline label - always visible', 'TIPO': 'inline label - always visible', 'IMPUESTO': 'inline label - always visible', 'RADICA EL': 'inline label - always visible', });
lyr_PREDIOSWEB_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});