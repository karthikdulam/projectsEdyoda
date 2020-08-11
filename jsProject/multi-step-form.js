$(document).ready(function() {
    // fname
    var namePattern = /^[a-zA-Z]{3,}$/;
    var currentName;
    var validName;
    var currentNameLength = 0;
    firstname.addEventListener('input', function(e){
        currentName = e.target.value;
        currentNameLength = e.target.value.length;
        validName = namePattern.test(currentName);
        fnameID.style.display='none';
        fnameempty.style.display='none';
    })
    
    // mail
    var mailPattern=/^[a-zA-Z][\w]+\@(gmail|yahoo).(com)$/;
    var currentMailValue;
    var validMail;
    var currentMailLength=0;
    mail.addEventListener('input', function(e){
        currentMailValue=e.target.value;
        currentMailLength = e.target.value.length;
        validMail=mailPattern.test(currentMailValue);
        mailID.style.display='none'
        mailempty.style.display='none'
    })
    btnstep1.onclick = () => {
        if(currentMailLength != 0)
        {
            if(validMail){
                mailID.style.display='none'
            }
            else
            {
                mailID.style.display='block'
            }
        }
        else
        {
            mailempty.style.display='block'
        }
        if(currentNameLength != 0)
        {
            if(validName){
                fnameID.style.display='none'
            }
            else
            {
                fnameID.style.display='block'
            }
        }
        else
        {
            fnameempty.style.display='block'
        }
        if(validName && validMail)
        {
            step1.style.display='none';
            step2.style.display='block';
        }
    }

    // step2
    // contact
    var contactPattern=/^(\+[0-9]{2})[\d]{10}$/;
    var currentContact;
    var validContact;
    var currentContactLength = 0;
    contact.addEventListener('input', function(e){
        currentContact = e.target.value;
        currentContactLength = e.target.value.length;
        validContact = contactPattern.test(currentContact);
        contactID.style.display='none';
        contactempty.style.display='none';
    })
    
    // country
    var countryPattern=/^[a-zA-Z]{3,}$/;
    var currentCountryValue;
    var validCountry;
    var currentCountryLength=0;
    country.addEventListener('input', function(e){
        currentCountryValue=e.target.value;
        currentCountryLength = e.target.value.length;
        validCountry=countryPattern.test(currentCountryValue);
        countryID.style.display='none'
        countryempty.style.display='none'
    })
    btnstep2.onclick = () => {
        if(currentContactLength != 0)
        {
            if(validContact){
                contactID.style.display='none'
            }
            else
            {
                contactID.style.display='block'
            }
        }
        else
        {
            contactempty.style.display='block'
        }
        if(currentCountryLength != 0)
        {
            if(validCountry){
                countryID.style.display='none'
            }
            else
            {
                countryID.style.display='block'
            }
        }
        else
        {
            countryempty.style.display='block'
        }
        if(validContact && validCountry)
        {
            step2.style.display='none';
            step3.style.display='block';
        }
    }

    btnPrevstep2.onclick = () => {
        step1.style.display='block';
        step2.style.display='none';
    }
    // step3
    // select
    var currentSelection;
    var validSelection;
    select.addEventListener('click', function(){
        currentSelection = select.value == "full-stack" || select.value == "django" || select.value == "data-scientist";
        validSelection = currentSelection;
        selectID.style.display='none';
    })
    
    // message
    var currentMessageLength=0;
    var validMessage;
    message.addEventListener('input', function(e){
        currentMessageLength = e.target.value.length;
        validMessage = currentMessageLength != 0;
        messageempty.style.display='none'
    })
    btnstep3.onclick = () => {
        if(currentMessageLength == 0)
        {
            messageempty.style.display='block'
        }
        if(!currentSelection)
        {
            selectID.style.display='block'
        }
        if(validSelection && validMessage)
        {
            step3.style.display='none';
            step4.style.display='block';
        }
    }

    btnPrevstep3.onclick = () => {
        step2.style.display='block';
        step3.style.display='none';
    }
})