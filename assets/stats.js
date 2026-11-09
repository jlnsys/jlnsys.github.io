window.goatcounter={path:function(){var h=location.hash||'';var m=h.match(/^#piece\/([A-Za-z0-9_-]+)/);return m?'/piece/'+m[1]:'/'}};
window.addEventListener('hashchange',function(){if(/^#piece\//.test(location.hash)&&window.goatcounter&&window.goatcounter.count)window.goatcounter.count({path:window.goatcounter.path()})});
