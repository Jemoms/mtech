!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;return e.define("select2/i18n/fr",[],function(){return{inputTooLong:function(e){var n=e.input.length-e.maximum,r="Supprimez "+n+" caract\xe8re";return 1!==n&&(r+="s"),r},inputTooShort:function(e){var n=e.minimum-e.input.length,r="Saisissez "+n+" caract\xe8re";return 1!==n&&(r+="s"),r},loadingMore:function(){return"Chargement de r\xe9sultats suppl\xe9mentaires\u2026"},maximumSelected:function(e){var n="Vous pouvez seulement s\xe9lectionner "+e.maximum+" \xe9l\xe9ment";return 1!==e.maximum&&(n+="s"),n},noResults:function(){return"Aucun r\xe9sultat trouv\xe9"},searching:function(){return"Recherche en cours\u2026"}}}),{define:e.define,require:e.require}}();