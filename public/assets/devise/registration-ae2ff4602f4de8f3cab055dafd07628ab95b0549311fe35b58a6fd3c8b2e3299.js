function changeHiddenInput(e){"Autre"==e.value?(document.getElementById("hiddenDiv").style.display="block",document.getElementById("hiddenInput").value=""):(document.getElementById("hiddenDiv").style.display="none",document.getElementById("hiddenInput").value=e.value)}function initAutocomplete(){autocomplete=new google.maps.places.Autocomplete(document.getElementById("autocomplete"),{types:["geocode"]}),autocomplete.addListener("place_changed",fillInAddress)}function fillInAddress(){var e=autocomplete.getPlace();for(var t in componentForm)document.getElementById(t).value="",document.getElementById(t).disabled=!1;for(var n=0;n<e.address_components.length;n++){var o=e.address_components[n].types[0];if(componentForm[o]){var d=e.address_components[n][componentForm[o]];document.getElementById(o).value=d}}}var placeSearch,autocomplete,componentForm={locality:"long_name",country:"long_name",postal_code:"short_name"};