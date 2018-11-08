var map = document.querySelectorAll('#map');
var locaux = document.querySelectorAll('.local');
var noms = document.querySelectorAll('.list-option a');
var descs = document.querySelectorAll('.list-option p')
console.log(descs);

var activeArea = function(id){
  var is_active = document.querySelectorAll('.is-active');
  
      //si la class is_active existe sur le document on retire le is active
      if(is_active.length != 0){
        is_active.forEach(function(item){
        item.classList.remove('is-active');
        item.parentNode.classList.remove('global-etage-active');
        })
      }
      
      //si il y'a un id de local dans la liste des options alors on ajoute is active 
      var list_id = document.getElementById("list-" + id);
      var local_id = document.getElementById ('local-' + id);
      var local_id_parent = local_id.parentNode;
      var desc_id = document.getElementById('desc-' + id)
      if(list_id != null){
        list_id.classList.add('is-active');
        local_id_parent.classList.add('global-etage-active');
        descs.forEach(function(desc){
          desc.classList.add('hidden');
        })
        desc_id.classList.remove('hidden');
        
      } if(local_id != null){
        local_id.classList.add('is-active');
        desc_id.classList.remove('hidden');
      }

}

locaux.forEach(function(local){
	local.addEventListener('click', function(){
		var id = this.id.replace("local-", "");
    activeArea(id);
    })
		
	})

noms.forEach(function(nom){
  nom.addEventListener('click', function(){
    var id = this.id.replace('list-', '');
    activeArea(id);
  })
})
