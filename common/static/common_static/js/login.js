function validate(){
    let txt_email=document.getElementById('email').value
    let txt_pass=document.getElementById('pass').value
    let email_pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
    let status=0

    if(txt_email==''){
        document.getElementById('emailerr').innerHTML="* Please enter email"
        document.getElementById('emailerr').style.color="red"
        document.getElementById('email').style.borderColor="red"
        
        status=1

    }
    else if(txt_email!=email_pattern){
        document.getElementById('emailerr').innerHTML="* Enter valid email address"
        document.getElementById('emailerr').style.color="red"
        document.getElementById('email').style.borderColor="red"

    }
        
    
    else{
        document.getElementById('emailerr').innerHTML=""
        document.getElementById('email').style.borderColor=""
        status=0
    }
    if(txt_pass==""){
        document.getElementById('passerr').innerHTML="* Please enter password"
        document.getElementById('passerr').style.color="red"
        document.getElementById('pass').style.borderColor="red"
        status=1
    }
    else{
        document.getElementById('passerr').innerHTML=""
        document.getElementById('pass').style.borderColor=""

        status=0
    }

    if(status==1){
        return false
    }
    
}