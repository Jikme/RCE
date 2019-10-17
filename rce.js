    function RCE(){
    
        this.removeChildElement = function(node){
        let idtag = document.getElementById(node);
          if (document.body.contains(idtag)) {
              while (idtag.lastChild) {
                  idtag.removeChild(idtag.lastChild);

              }
          }
        return;
        }
   
    }
    
    const rce =  new RCE();
    const parentElement = "parent-element";
    rce.removeChildElement(parentElement);
    
    
    
