
        $(document).ready(()=>{
              $('#delete').mousemove(function(){
              $('#delete').show();
              $('#bloquer').show()
              $('#btnAfficher').mouseout(function(){
                $('#delete').hide();
                $('#bloquer').hide()
                });
              });
        });

    
