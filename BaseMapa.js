     
//................ PopUps para las capas GeoJson ..............     
  
       	function popUp1(features, layer) {
		layer.bindPopup(
		'<h3>'+'Préfecture'+ '</h3>' +  (features ?
        '<b>Préfecture: </b>' + features.properties.admin1Name 
		+ '<br/><b>Perimetre (km): </b>' + features.properties.Shape_Leng .toFixed(3)
		+ '<br/><b>Area (km2): </b>' + features.properties.Shape_Area.toFixed(3)
        + '<br/><b>Type des activités: </b>' + features.properties.Zones 
        + '<br/><b>Population totale: </b>' + features.properties.POP_Popula.toFixed(0)
        + '<br/><b>Nº femmes: </b>' + features.properties.POP_Femme.toFixed(0)
        + '<br/><b>Nº hommes: </b>' + features.properties.POP_Homme.toFixed(0)
        + '<br/><b>Nº enfants: </b>' + features.properties.POP_Enfant.toFixed(0)
        + '<br/><b>Nº adultes: </b>' + features.properties.POP_Adulte.toFixed(0)
        + '<br/><b>Nº personnes agées +60 ans: </b>' + features.properties.POP_Person.toFixed(0)
	    : '<b></b>')
		)};
		
		function popUp2(features, layer) {
		layer.bindPopup(
		'<h3>'+'Sous-Préfecture'+ '</h3>' +  (features ?
        '<b>Préfecture: </b>' + features.properties.admin1Name 
		+ '<br/><b>Sous-Préfecture: </b>' + features.properties.admin2Name
        + '<br/><b>Perimetre (km): </b>' + features.properties.Shape_Leng.toFixed(3)
		+ '<br/><b>Area (km2): </b>' + features.properties.Shape_Area.toFixed(3)
        + '<br/><b>Population totale: </b>' + features.properties.POP_Popula.toFixed(0)
        + '<br/><b>Nº femmes: </b>' + features.properties.POP_Femme.toFixed(0)
        + '<br/><b>Nº hommes: </b>' + features.properties.POP_Homme.toFixed(0)
        + '<br/><b>Nº enfants: </b>' + features.properties.POP_Enfant.toFixed(0)
        + '<br/><b>Nº adultes: </b>' + features.properties.POP_Adulte.toFixed(0)
        + '<br/><b>Nº personnes agées +60 ans: </b>' + features.properties.POP_Person.toFixed(0)
		: '<b></b>')
		)};
		
		function popUp3(features, layer) {
		layer.bindPopup(
		'<h3>'+'Commune'+ '</h3>' +  (features ?
        '<b>Préfecture: </b>' + features.properties.admin1Name 
		+ '<br/><b>Sous-Préfecture: </b>' + features.properties.admin2Name
		+ '<br/><b>Commune: </b>' + features.properties.admin3Name
        + '<br/><b>Perimetre (km): </b>' + features.properties.Shape_Leng 
		+ '<br/><b>Area (km2): </b>' + features.properties.Shape_Area 
        + '<br/><b>Population totale: </b>' + features.properties.POP_Popula
        + '<br/><b>Nº femmes: </b>' + features.properties.POP_Femme
        + '<br/><b>Nº hommes: </b>' + features.properties.POP_Homme
        + '<br/><b>Nº enfants: </b>' + features.properties.POP_Enfant
        + '<br/><b>Nº adultes: </b>' + features.properties.POP_Adulte
        + '<br/><b>Nº personnes agées +60 ans: </b>' + features.properties.POP_Person
	    : '<b></b>')
		)};
		
		function popUp4(features, layer) {
		layer.bindPopup(
		'<h3>'+'Quartier'+ '</h3>' +  (features ?
        '<b>Préfecture: </b>' + features.properties.admin1Name 
		+ '<br/><b>Sous-Préfecture: </b>' + features.properties.admin2Name
		+ '<br/><b>Commune: </b>' + features.properties.admin3Name
        + '<br/><b>Quartier: </b>' + features.properties.admin4Name
        + '<br/><b>Perimetre (km): </b>' + features.properties.Shape_Leng 
		+ '<br/><b>Area (km2): </b>' + features.properties.Shape_Area 
	    : '<b></b>')
		)};

		function popUpCon(features, layer) {
		layer.bindPopup(
		'<h3>'+'Zone de Conservation'+ '</h3>' +  (features ?
        '<b>Code PEA: </b>' + features.properties.PEA_CODE 
		+ '<br/><b>Type de conservation: </b>' + features.properties.TYPE_SERIE
        + '<br/><b>Area (Ha): </b>' + features.properties.Surface_Ha
	    : '<b></b>')
		)};
        
        function popUpPro(features, layer) {
		layer.bindPopup(
		'<h3>'+'Zone de Protection'+ '</h3>' +  (features ?
        '<b>Nom: </b>' + features.properties.NOM_TOPONY
        + '<br/><b>Type de zone: </b>' + features.properties.TYPE
		+ '<br/><b>Prefecture: </b>' + features.properties.PREFECTURE
        + '<br/><b>Date de création: </b>' + features.properties.DATE_CREAT
        + '<br/><b>Area (Ha): </b>' + features.properties.Surface_Ha
	    : '<b></b>')
		)};

        function popUpRout(features, layer) {
		layer.bindPopup(
		'<h3>'+'Route'+ '</h3>' +  (features ?
        '<b>Type: </b>' + features.properties.FC_DESC
        + '<br/><b>Material: </b>' + features.properties.ST_DESC
		+ '<br/><b>Etat: </b>' + features.properties.SC_DESC
        + '<br/><b>Catégorie: </b>' + features.properties.SEC_DESC
        + '<br/><b>Distance (km): </b>' + features.properties.DIST_KM
        + '<br/><b>Région: </b>' + features.properties.REGION_NOM
        + '<br/><b>Préfecture: </b>' + features.properties.PREF_NOM
        + '<br/><b>Sous-Préfecture: </b>' + features.properties.SPREF_NOM
        + '<br/><b>Commune: </b>' + features.properties.COM_NOM
	    : '<b></b>')
		)};
        
        function popUpRiv(features, layer) {
		layer.bindPopup(
		'<h3>'+'Rivière'+ '</h3>' +  (features ?
        '<b>Nomme: </b>' + features.properties.name
        + '<br/><b>Catégorie: </b>' + features.properties.waterway
		+ '<br/><b>Longitude (km): </b>' + features.properties.Length
	    : '<b></b>')
		)};
//................ Estilo para las capas ..............

        function style1(feature) {
            return {
            weight:3,
            opacity: 0.7,
            color: '#1E311E',
            fillOpacity: 0,
            fillColor:'green'
            };
        }	

        function style2(feature) {
            return {
            weight:2.5,
			opacity: 0.7,
			color: '#306930',
			fillOpacity: 0,
			fillColor:'black'
			};
        }	

        function style3(feature) {
            return {
			weight:2,
			opacity: 0.7,
			color: '#66E466',
			fillOpacity: 0,
			fillColor:'red'
			};
        }	

        function style4(feature) {
            return {
			weight:1,
			opacity: 0.7,
			color: 'gray',
			fillOpacity: 0,
			fillColor:'gray'
			};
        }		
        
        function styleCon(feature){
            return{
            weight: 1,
            opacity: 0.7,
            color: 'gray',
            fillOpacity: 0.5,
            fillColor:'Green',
            clickable: false
        };
        }
        
        function stylePro(feature){
            return{
            weight: 1,
            opacity: 0.7,
            color: 'gray',
            fillOpacity: 0.5,
            fillColor:'Green',
            clickable: false
        };
        }
        
        function styleRout(feature){
            return{
            weight: 1,
            opacity: 0.7,
            color: 'red',
            fillOpacity: 0.5,
            fillColor:'red',
            clickable: true
        };
        }
        
        function styleRiv(feature){
            return{
            weight: 1,
            opacity: 0.7,
            color: 'blue',
            fillOpacity: 0.5,
            fillColor:'blue',
            clickable: true
        };
        }
//................  Insertar Mapas base ............................
        
        var osmLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>',
            thunLink = '<a href="http://thunderforest.com/">Thunderforest</a>';
        
        var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            osmAttrib = '&copy; ' + osmLink + ' Contributors',
            landUrl = 'http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png',
            thunAttrib = '&copy; '+thunLink+' Contributors',
            esriUrl = 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            esriAttrib = '&copy; '+'Esri Contributors';
                           
        var osmMap = L.tileLayer(osmUrl, {attribution: osmAttrib}),
            landMap = L.tileLayer(landUrl, {attribution: thunAttrib}),
            esriMap = L.tileLayer(esriUrl, {attribution: esriAttrib}),
            drawnItems = L.featureGroup();
                                   
        var map = L.map('map',{center: new L.LatLng(5.6613888, 20.65527),zoom:6});
        	
        var baseLayers = {
		   "Basemap": osmMap,
		   "Landscape": landMap,
           "Image Sattelite": esriMap
        };
		
		
//................ Organización de las capas Geojson .......................
       
	var  adm1 = L.geoJson(Adm_1, {
			style: style1,
			onEachFeature:popUp1,
	}).addTo(map);  
	
	var  adm2 = L.geoJson(Adm_2, {
			style: style2,
			onEachFeature:popUp2,
	}); 
	
	var  adm3 = L.geoJson(Adm_3, {
			style: style3,
			onEachFeature:popUp3,
	}); 
	
	var  adm4 = L.geoJson(Adm_4, {
			style: style4,
			onEachFeature:popUp4,
	}); 
    
    var  Con = L.geoJson(Conserv, {
			style: styleCon,
			onEachFeature:popUpCon,
	}); 
    
    var  Pro = L.geoJson(Protect, {
			style: stylePro,
			onEachFeature:popUpPro,
	}); 
        
    var  Rout = L.geoJson(RoutPral, {
			style: styleRout,
			onEachFeature:popUpRout,
	}); 
    
    var  Riv = L.geoJson(Riviere, {
			style: styleRiv,
			onEachFeature:popUpRiv,
	}); 
   
//................ Insertar capas CSV .......................
  
  var icon1=L.icon({iconUrl:'images/dots/gray_dot.png',iconSize:[5,5]});
    var  Eco = omnivore.csv('data/Eco.csv')
    .on('ready', function(layer) {
        this.eachLayer(function(marker) { marker.setIcon(icon1)
        marker.bindPopup(
        '<h4><b>'+"École"+ '</b></h4>' 
        +'<b>Lieu: </b>' + marker.toGeoJSON().properties.VILLE_VILL
        +'<br/><b>Nom: </b>' + marker.toGeoJSON().properties.NOM_ECOLE
        +'<br/><b>Statut: </b>' + marker.toGeoJSON().properties.STATUT_ECO
        +'<br/><b>Cycle: </b>' + marker.toGeoJSON().properties.CYCLE
        +'<br/><b>Nº Eleves: </b>' + marker.toGeoJSON().properties.NB_ELEVES
        +'<br/><b>Latrine installée: </b>' + marker.toGeoJSON().properties.LATRINES_S
        +'<br/><b>Préfecture: </b>' + marker.toGeoJSON().properties.PREF_NOM
        +'<br/><b>Sous_Prefe: </b>' + marker.toGeoJSON().properties.SPREF_NOM
        +'<br/><b>Commune: </b>' + marker.toGeoJSON().properties.COM_NOM
        )
        });
    });  


    var icon2=L.icon({iconUrl:'images/dots/gray_dot.png',iconSize:[5,5]});
    var  Air = omnivore.csv('data/aerodrome.csv')
    .on('ready', function(layer) {
        this.eachLayer(function(marker) { marker.setIcon(icon2)
        marker.bindPopup(
        '<h4><b>'+"Aerodrome"+ '</b></h4>' 
        +'<b>Lieu: </b>' + marker.toGeoJSON().properties.Place
        +'<br/><b>Code: </b>' + marker.toGeoJSON().properties.PCODE
        +'<br/><b>Altitude: </b>' + marker.toGeoJSON().properties.ALTITUDE
        +'<br/><b>Longitude: </b>' + marker.toGeoJSON().properties.LENGTH
        +'<br/><b>Largeur: </b>' + marker.toGeoJSON().properties.WIDTH
        +'<br/><b>Surface: </b>' + marker.toGeoJSON().properties.SURFACE
        )
        });
    });  

   var icon3=L.icon({iconUrl:'images/dots/Dot_red.png',iconSize:[4,4]});
    var  Vil = omnivore.csv('data/Villes.csv')
    .on('ready', function(layer) {
        this.eachLayer(function(marker) { marker.setIcon(icon3)
        marker.bindPopup(
        '<h4><b>'+"Village"+ '</b></h4>' 
        +'<b>Nom: </b>' + marker.toGeoJSON().properties.PName1
        +'<br/><b>Préfecture: </b>' + marker.toGeoJSON().properties.PREF_NOM
        +'<br/><b>Sous_Prefe: </b>' + marker.toGeoJSON().properties.SPREF_NOM
        +'<br/><b>Commune: </b>' + marker.toGeoJSON().properties.COM_NOM
        )
        });
    });

    var icon4=L.icon({iconUrl:'images/dots/Dot_red.png',iconSize:[6,6]});
    var  ChefS = omnivore.csv('data/ChefSous.csv')
    .on('ready', function(layer) {
        this.eachLayer(function(marker) { marker.setIcon(icon4)
        marker.bindPopup(
        '<h4><b>'+"Chef de Sous-Préfecture"+ '</b></h4>' 
        +'<b>Nom: </b>' + marker.toGeoJSON().properties.PName1
        +'<br/><b>Préfecture: </b>' + marker.toGeoJSON().properties.PREF_NOM
        +'<br/><b>Sous_Prefe: </b>' + marker.toGeoJSON().properties.SPREF_NOM
        +'<br/><b>Commune: </b>' + marker.toGeoJSON().properties.COM_NOM
        )
        });
    });

    var icon5=L.icon({iconUrl:'images/dots/darkred_dot.png',iconSize:[8,8]});
    var  ChefLieu = omnivore.csv('data/ChefLieu.csv')
    .on('ready', function(layer) {
        this.eachLayer(function(marker) { marker.setIcon(icon5)
        marker.bindPopup(
        '<h4><b>'+"Chef de Préfecture"+ '</b></h4>' 
        +'<b>Nom: </b>' + marker.toGeoJSON().properties.PName1
        +'<br/><b>Préfecture: </b>' + marker.toGeoJSON().properties.PREF_NOM
        +'<br/><b>Sous_Prefe: </b>' + marker.toGeoJSON().properties.SPREF_NOM
        +'<br/><b>Commune: </b>' + marker.toGeoJSON().properties.COM_NOM
        )
        });
    });
   
    var icon6=L.icon({iconUrl:'images/dots/orange_tr.png',iconSize:[10,10]});
    var  IDP = omnivore.csv('data/IDP.csv')
    .on('ready', function(layer) {
        this.eachLayer(function(marker) { marker.setIcon(icon6)
        marker.bindPopup(
        '<h4><b>'+"Site de déplacées"+ '</b></h4>' 
        +'<b>Nom: </b>' + marker.toGeoJSON().properties.Site_Name
        +'<br/><b>Préfecture: </b>' + marker.toGeoJSON().properties.Prefecture
        +'<br/><b>Sous_Prefe: </b>' + marker.toGeoJSON().properties.Sous_Prefe
        +'<br/><b>Commune: </b>' + marker.toGeoJSON().properties.Commune
        +'<br/><b>Organisation en charge: </b>' + marker.toGeoJSON().properties.Management
        +'<br/><b>Status: </b>' + marker.toGeoJSON().properties.Status
        +'<br/><b>Class: </b>' + marker.toGeoJSON().properties.Site_Class
        +'<br/><b>Type: </b>' + marker.toGeoJSON().properties.Site_Type
        +'<br/><b>Nº de personnes: </b>' + marker.toGeoJSON().properties.F_IDP
        +'<br/><b>Nº de ménages: </b>' + marker.toGeoJSON().properties.F_Househol
        )
        });
    });
    
   var icon7=L.icon({iconUrl:'images/dots/darkblue_dot.png',iconSize:[5,5]});
    var  Source = omnivore.csv('data/Source.csv')
    .on('ready', function(layer) {
        this.eachLayer(function(marker) { marker.setIcon(icon7)
        marker.bindPopup(
        '<h4><b>'+"Source d´eau"+ '</b></h4>' 
        +'<b>Localité: </b>' + marker.toGeoJSON().properties.Localité
        +'<br/><b>Type de source: </b>' + marker.toGeoJSON().properties.TYPE_POINT
        +'<br/><b>Fonctionnel: </b>' + marker.toGeoJSON().properties.FONCTIONNE
        +'<br/><b>Comité de gestion: </b>' + marker.toGeoJSON().properties.COMITE_GES
        +'<br/><b>Localisation: </b>' + marker.toGeoJSON().properties.LOCALISATI
        +'<br/><b>Instalé depuis: </b>' + marker.toGeoJSON().properties.ANNEE_IN_1
        +'<br/><b>Préfecture: </b>' + marker.toGeoJSON().properties.PREF_NOM
        +'<br/><b>Sous_Prefe: </b>' + marker.toGeoJSON().properties.SPREF_NOM
        +'<br/><b>Commune: </b>' + marker.toGeoJSON().properties.COM_NOM
        )
        });
    });
    
    var icon8=L.icon({iconUrl:'images/dots/lightblue_dot.png',iconSize:[5,5]});
    var  Forage = omnivore.csv('data/Forages.csv')
    .on('ready', function(layer) {
        this.eachLayer(function(marker) { marker.setIcon(icon8)
        marker.bindPopup(
        '<h4><b>'+"Forage"+ '</b></h4>' 
        +'<b>Localité: </b>' + marker.toGeoJSON().properties.Localité
        +'<br/><b>Fonctionnel: </b>' + marker.toGeoJSON().properties.FONCTIONNE
        +'<br/><b>Comité de gestion: </b>' + marker.toGeoJSON().properties.COMITE_GES
        +'<br/><b>Localisation: </b>' + marker.toGeoJSON().properties.LOCALISATI
        +'<br/><b>Instalé depuis: </b>' + marker.toGeoJSON().properties.ANNEE_IN_1
        +'<br/><b>Préfecture: </b>' + marker.toGeoJSON().properties.PREF_NOM
        +'<br/><b>Sous_Prefe: </b>' + marker.toGeoJSON().properties.SPREF_NOM
        +'<br/><b>Commune: </b>' + marker.toGeoJSON().properties.COM_NOM
        )
        });
    });
    
    var icon9=L.icon({iconUrl:'images/dots/bluegreen_dot.png',iconSize:[5,5]});
    var  Puits = omnivore.csv('data/Puits.csv')
    .on('ready', function(layer) {
        this.eachLayer(function(marker) { marker.setIcon(icon9)
        marker.bindPopup(
        '<h4><b>'+"Puits d´eau"+ '</b></h4>' 
        +'<b>Localité: </b>' + marker.toGeoJSON().properties.Localité
        +'<br/><b>Type de puits: </b>' + marker.toGeoJSON().properties.TYPE_POINT
        +'<br/><b>Fonctionnel: </b>' + marker.toGeoJSON().properties.FONCTIONNE
        +'<br/><b>Comité de gestion: </b>' + marker.toGeoJSON().properties.COMITE_GES
        +'<br/><b>Localisation: </b>' + marker.toGeoJSON().properties.LOCALISATI
        +'<br/><b>Instalé depuis: </b>' + marker.toGeoJSON().properties.ANNEE_IN_1
        +'<br/><b>Préfecture: </b>' + marker.toGeoJSON().properties.PREF_NOM
        +'<br/><b>Sous_Prefe: </b>' + marker.toGeoJSON().properties.SPREF_NOM
        +'<br/><b>Commune: </b>' + marker.toGeoJSON().properties.COM_NOM
        )
        });
    });
//........ Insertar capas GeoJson ............................

          var overlayMaps = {
           
          // "Écoles": Eco,
           "Sources d'eau": Source,
           "Puits d'eau": Puits,
           "Forages": Forage,
           "Aerodromes": Air,
          // "Villages": Vil,
           "Chef de Sous-Préfectures": ChefS,
           "Chef de Préfectures": ChefLieu,
           "Sites de déplaces": IDP,
           "Rivières": Riv,
           "Routes": Rout,
           "Zones de conservation": Con,
           "Zones de protection": Pro,
           "Quartiers Bangui": adm4,
           "Communes": adm3,
           "Sous Préfectures": adm2,
           "Préfectures": adm1,
           'Couche à desinner': drawnItems
        };   
	     

//........ control de capas e insertamos basemapa .............


    L.control.layers(baseLayers, overlayMaps).addTo(map);   
    osmMap.addTo(map); 
	
    drawnItems.addTo(map);
        
   
//........ Añadir escala y Coordenadas raton ..................
        
        L.control.mousePosition().addTo(map);
        
        L.control.scale({
        imperial: false
        }).addTo(map);
        
  

    

            
