function validate(){
    let txt_fnam=document.getElementById('fname').value
    let txt_lnam=document.getElementById('lname').value
    let txt_mail=document.getElementById('eid').value
    let email_pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
    let txt_bda=document.getElementById('bday').value
    let txt_pas=document.getElementById('pas').value
    
    let status=0

    if(txt_fnam==""){
        document.getElementById('fnameerr').innerHTML="* Please enter firstname"
        document.getElementById('fnameerr').style.color="red"
        document.getElementById('fname').style.borderColor="red"
        status=1
    }
    else{
        document.getElementById('fnameerr').innerHTML=""
        document.getElementById('fname').style.borderColor=""

        status=0
    }

    if(txt_lnam==""){
        document.getElementById('lnameerr').innerHTML="* Please enter lastname"
        document.getElementById('lnameerr').style.color="red"
        document.getElementById('lname').style.borderColor="red"
        status=1
    }
    else{
        document.getElementById('lnameerr').innerHTML=""
        document.getElementById('lname').style.borderColor=""

        status=0
    }

    if(txt_mail==''){
        document.getElementById('eiderr').innerHTML="* Please enter email"
        document.getElementById('eiderr').style.color="red"
        document.getElementById('eid').style.borderColor="red"
        
        status=1

    }
    else if(txt_mail!=email_pattern){
        document.getElementById('eiderr').innerHTML="* Enter valid email address"
        document.getElementById('eiderr').style.color="red"
        document.getElementById('eid').style.borderColor="red"

    }
        
    
    else{
        document.getElementById('eiderr').innerHTML=""
        document.getElementById('eid').style.borderColor=""
        status=0
    }
    if(txt_bda==""){
        document.getElementById('bdayerr').innerHTML="* Please select birthday"
        document.getElementById('bdayerr').style.color="red"
        document.getElementById('bday').style.borderColor="red"
        status=1
    }
    else{
        document.getElementById('bdayrr').innerHTML=""
        document.getElementById('bday').style.borderColor=""

        status=0
    }

    if(txt_pas==""){
        document.getElementById('paserr').innerHTML="* Please enter password"
        document.getElementById('paserr').style.color="red"
        document.getElementById('pas').style.borderColor="red"
        status=1
    }
    else{
        document.getElementById('paserr').innerHTML=""
        document.getElementById('pas').style.borderColor=""

        status=0
    }

    if(status==1){
        return false
    }
    
}