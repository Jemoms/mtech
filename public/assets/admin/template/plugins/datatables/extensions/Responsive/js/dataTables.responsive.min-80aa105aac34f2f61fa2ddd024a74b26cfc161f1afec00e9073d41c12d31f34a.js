!function(e,t){var n=function(n,i){var s=function(e,t){if(!i.versionCheck||!i.versionCheck("1.10.1"))throw"DataTables Responsive requires DataTables 1.10.1 or newer";this.s={dt:new i.Api(e),columns:[]},this.s.dt.settings()[0].responsive||(t&&"string"==typeof t.details&&(t.details={type:t.details}),this.c=n.extend(!0,{},s.defaults,i.defaults.responsive,t),e.responsive=this,this._constructor())};s.prototype={_constructor:function(){var t=this,i=this.s.dt;i.settings()[0]._responsive=this,n(e).on("resize.dtr orientationchange.dtr",i.settings()[0].oApi._fnThrottle(function(){t._resize()})),i.on("destroy.dtr",function(){n(e).off("resize.dtr orientationchange.dtr draw.dtr")}),this.c.breakpoints.sort(function(e,t){return e.width<t.width?1:e.width>t.width?-1:0}),this._classLogic(),this._resizeAuto();var s=this.c.details;s.type&&(t._detailsInit(),this._detailsVis(),i.on("column-visibility.dtr",function(){t._detailsVis()}),i.on("draw.dtr",function(){i.rows({page:"current"}).iterator("row",function(e,n){var s=i.row(n);if(s.child.isShown()){var r=t.c.details.renderer(i,n);s.child(r,"child").show()}})}),n(i.table().node()).addClass("dtr-"+s.type)),this._resize()},_columnsVisiblity:function(e){var t,i,s=this.s.dt,r=this.s.columns,o=n.map(r,function(t){return t.auto&&null===t.minWidth?!1:!0===t.auto?"-":-1!==n.inArray(e,t.includeIn)}),a=0;for(t=0,i=o.length;i>t;t++)!0===o[t]&&(a+=r[t].minWidth);for(t=s.settings()[0].oScroll,t=t.sY||t.sX?t.iBarWidth:0,s=s.table().container().offsetWidth-t-a,t=0,i=o.length;i>t;t++)r[t].control&&(s-=r[t].minWidth);for(a=!1,t=0,i=o.length;i>t;t++)"-"===o[t]&&!r[t].control&&(a||0>s-r[t].minWidth?(a=!0,o[t]=!1):o[t]=!0,s-=r[t].minWidth);for(s=!1,t=0,i=r.length;i>t;t++)if(!r[t].control&&!r[t].never&&!o[t]){s=!0;break}for(t=0,i=r.length;i>t;t++)r[t].control&&(o[t]=s);return-1===n.inArray(!0,o)&&(o[0]=!0),o},_classLogic:function(){var e=this,t=this.c.breakpoints,i=this.s.dt.columns().eq(0).map(function(e){return e=this.column(e).header().className,{className:e,includeIn:[],auto:!1,control:!1,never:!!e.match(/\bnever\b/)}}),s=function(e,t){var s=i[e].includeIn;-1===n.inArray(t,s)&&s.push(t)},r=function(n,r,o,a){if(o){if("max-"===o)for(a=e._find(r).width,r=0,o=t.length;o>r;r++)t[r].width<=a&&s(n,t[r].name);else if("min-"===o)for(a=e._find(r).width,r=0,o=t.length;o>r;r++)t[r].width>=a&&s(n,t[r].name);else if("not-"===o)for(r=0,o=t.length;o>r;r++)-1===t[r].name.indexOf(a)&&s(n,t[r].name)}else i[n].includeIn.push(r)};i.each(function(e,i){for(var s=e.className.split(" "),o=!1,a=0,l=s.length;l>a;a++){var d=n.trim(s[a]);if("all"===d)return o=!0,void(e.includeIn=n.map(t,function(e){return e.name}));if("none"===d||"never"===d)return void(o=!0);if("control"===d)return o=!0,void(e.control=!0);n.each(t,function(e,t){var n=t.name.split("-"),s=d.match(RegExp("(min\\-|max\\-|not\\-)?("+n[0]+")(\\-[_a-zA-Z0-9])?"));s&&(o=!0,s[2]===n[0]&&s[3]==="-"+n[1]?r(i,t.name,s[1],s[2]+s[3]):s[2]===n[0]&&!s[3]&&r(i,t.name,s[1],s[2]))})}o||(e.auto=!0)}),this.s.columns=i},_detailsInit:function(){var e=this,t=this.s.dt,i=this.c.details;"inline"===i.type&&(i.target="td:first-child");var s=i.target;n(t.table().body()).on("click","string"==typeof s?s:"td",function(){if(n(t.table().node()).hasClass("collapsed")&&t.row(n(this).closest("tr")).length){if("number"==typeof s){var i=0>s?t.columns().eq(0).length+s:s;if(t.cell(this).index().column!==i)return}if(i=t.row(n(this).closest("tr")),i.child.isShown())i.child(!1),n(i.node()).removeClass("parent");else{var r=e.c.details.renderer(t,i[0]);i.child(r,"child").show(),n(i.node()).addClass("parent")}}})},_detailsVis:function(){var e=this,t=this.s.dt,i=t.columns().indexes().filter(function(e){var i=t.column(e);return i.visible()?null:n(i.header()).hasClass("never")?null:e}),s=!0;(0===i.length||1===i.length&&this.s.columns[i[0]].control)&&(s=!1),s?t.rows({page:"current"}).eq(0).each(function(n){if(n=t.row(n),n.child()){var i=e.c.details.renderer(t,n[0]);!1===i?n.child.hide():n.child(i,"child").show()}}):t.rows({page:"current"}).eq(0).each(function(e){t.row(e).child.hide()})},_find:function(e){for(var t=this.c.breakpoints,n=0,i=t.length;i>n;n++)if(t[n].name===e)return t[n]},_resize:function(){var t,i=this.s.dt,s=n(e).width(),r=this.c.breakpoints,o=r[0].name,a=this.s.columns;for(t=r.length-1;t>=0;t--)if(s<=r[t].width){o=r[t].name;break}var l=this._columnsVisiblity(o),r=!1;for(t=0,s=a.length;s>t;t++)if(!1===l[t]&&!a[t].never){r=!0;break}n(i.table().node()).toggleClass("collapsed",r),i.columns().eq(0).each(function(e,t){i.column(e).visible(l[t])})},_resizeAuto:function(){var e=this.s.dt,t=this.s.columns;if(this.c.auto&&-1!==n.inArray(!0,n.map(t,function(e){return e.auto}))){e.table().node();var i=e.table().node().cloneNode(!1),s=n(e.table().header().cloneNode(!1)).appendTo(i),r=n(e.table().body().cloneNode(!1)).appendTo(i);n(e.table().footer()).clone(!1).appendTo(i),e.rows({page:"current"}).indexes().flatten().each(function(t){var i=e.row(t).node().cloneNode(!0);e.columns(":hidden").flatten().length&&n(i).append(e.cells(t,":hidden").nodes().to$().clone()),n(i).appendTo(r)});var o=e.columns().header().to$().clone(!1);n("<tr/>").append(o).appendTo(s),"inline"===this.c.details.type&&n(i).addClass("dtr-inline collapsed"),i=n("<div/>").css({width:1,height:1,overflow:"hidden"}).append(i),i.find("th.never, td.never").remove(),i.insertBefore(e.table().node()),e.columns().eq(0).each(function(e){t[e].minWidth=o[e].offsetWidth||0}),i.remove()}}},s.breakpoints=[{name:"desktop",width:1/0},{name:"tablet-l",width:1024},{name:"tablet-p",width:768},{name:"mobile-l",width:480},{name:"mobile-p",width:320}],s.defaults={breakpoints:s.breakpoints,auto:!0,details:{renderer:function(e,t){var i=e.cells(t,":hidden").eq(0).map(function(t){var i=n(e.column(t.column).header()),t=e.cell(t).index();if(i.hasClass("control")||i.hasClass("never"))return"";var s=e.settings()[0],s=s.oApi._fnGetCellData(s,t.row,t.column,"display");return(i=i.text())&&(i+=":"),'<li data-dtr-index="'+t.column+'"><span class="dtr-title">'+i+'</span> <span class="dtr-data">'+s+"</span></li>"}).toArray().join("");return i?n('<ul data-dtr-index="'+t+'"/>').append(i):!1},target:0,type:"inline"}};var r=n.fn.dataTable.Api;return r.register("responsive()",function(){return this}),r.register("responsive.index()",function(e){return e=n(e),{column:e.data("dtr-index"),row:e.parent().data("dtr-index")}}),r.register("responsive.rebuild()",function(){return this.iterator("table",function(e){e._responsive&&e._responsive._classLogic()})}),r.register("responsive.recalc()",function(){return this.iterator("table",function(e){e._responsive&&(e._responsive._resizeAuto(),e._responsive._resize())})}),s.version="1.0.6",n.fn.dataTable.Responsive=s,n.fn.DataTable.Responsive=s,n(t).on("init.dt.dtr",function(e,t){if("dt"===e.namespace&&(n(t.nTable).hasClass("responsive")||n(t.nTable).hasClass("dt-responsive")||t.oInit.responsive||i.defaults.responsive)){var r=t.oInit.responsive;!1!==r&&new s(t,n.isPlainObject(r)?r:{})}}),s};"function"==typeof define&&define.amd?define(["jquery","datatables"],n):"object"==typeof exports?n(require("jquery"),require("datatables")):jQuery&&!jQuery.fn.dataTable.Responsive&&n(jQuery,jQuery.fn.dataTable)}(window,document);