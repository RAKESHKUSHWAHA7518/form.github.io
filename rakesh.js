
    const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const error = document.getElementById('error')
//const btn = document.getElementById("submit");




    
    
//  function showError(input,message){

    
    
//             const formControl=input.parentElement;

    
    
//             formControl.className=' form-control error input';

    
    
//              const small= formControl.querySelector('small');

    
    
//           small.innerText=message;



  
      
//     }



    
//           function isValidEmail(email){

    
//          return String(email)

    
//          .toLowerCase()

    
//          .match(

    
//            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    
//          );



    
//     }




      
   
//       function showSuccess(input){


      
   
//           const formControl=input.parentElemrnt;

      
   
//           formControl.classname=' form-control success';

      
   
//     }




form.addEventListener('submit', function(e){
    

   
   e.preventDefault(); 
  
      
      // if( username ===''){

     
      console.log(username);
    
      
   
          // showError( username,' Username is required');
      
         
      //  }else{
          
         
              console.log(username);
    
    
    
    
          //      showSuccess(username); 

  

            
                //  }



    //                  if(  email.value===' '){


    //        showError(  email,'  email is required');


    //      }else if( !isValidEmail ( email.value)){


    //        showError(email,'Emall is not valid');



    //      } else{


    //        showSuccess( email);


    //      }



    //      if(  password.value===''){


    //        showError(  password,' Username is required');


    //      } else{


    //        showSuccess( password);


    //      }

  


    //      if( password2.value===' '){


    //        showError( password2,' password2 is required');


    //      }else{


    //        showSuccess(password2);

    // }
    } );

        
        
        // username.innerHTML = `<small> ${email} error message</small>`

