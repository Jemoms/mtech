!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;return e.define("select2/i18n/et",[],function(){return{inputTooLong:function(e){var n=e.input.length-e.maximum,u="Sisesta "+n+" t\xe4ht";return 1!=n&&(u+="e"),u+=" v\xe4hem"},inputTooShort:function(e){var n=e.minimum-e.input.length,u="Sisesta "+n+" t\xe4ht";return 1!=n&&(u+="e"),u+=" rohkem"},loadingMore:function(){return"Laen tulemusi\u2026"},maximumSelected:function(e){var n="Saad vaid "+e.maximum+" tulemus";return n+=1==e.maximum?"e":"t",n+=" valida"},noResults:function(){return"Tulemused puuduvad"},searching:function(){return"Otsin\u2026"}}}),{define:e.define,require:e.require}}();