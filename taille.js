// ScriptJS pour connaître la taille d'une fenêtre

	<script type="text/javascript">
		if (document.body){
			var larg = (document.body.clientWidth);
			var haut = (document.body.clientHeight);
		}
		else{
			var larg = (window.innerWidth);
			var haut = (window.innerHeight);
		}
		
		alert("Cette fenêtre fait " + larg + " de large et "+haut+" de haut");
	</script>
