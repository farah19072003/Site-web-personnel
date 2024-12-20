function red(identification){
    var img = document.getElementById(identification);  
    img.style.border = "4px solid red";  
}
function green(identification){
    var img = document.getElementById(identification);  
    img.style.border = "4px solid green";  
}
function lockOptions(questionName) {
    const options = document.querySelectorAll(`input[name="${questionName}"]`);
    options.forEach(option => {
        if (!option.checked) {
            option.disabled = true;
        }
    });
}


var reponse=[];
i=0;
function selection(identification){
    reponse[i]=identification;
    i++;
    console.log(reponse);
    
}
var reponsetriee=[]

function tri() {
    var question1Ids = ['torture', 'elefant', 'requin'];
    var question2Ids = ['autruche', 'manchot', 'pelican'];
    var question3Ids = ['anaconda', 'crocodile', 'varan'];
    var question4Ids = ['girafe', 'chameau', 'cheval'];
    var question5Ids = ['mont_blanc', 'mont_kilimandjaro', 'mont_everest'];
    var question6Ids = ['desert_de_gobi', 'antarctique', 'sahara'];
    var question7Ids = ['neptune_planete', 'terre', 'mars'];
    var question8Ids = ['mississippi', 'amazon', 'nil'];
    var question9Ids = ['aloe_vera', 'orchidee', 'dionee'];
    var question10Ids = ['chene', 'pin', 'erable'];
    var question11Ids = ['palmier', 'cactus', 'bambou'];
    var question12Ids = ['rafflesia', 'fleur_orchidee', 'tournesol'];
    for (var i = 0; i < reponse.length; i++) {
        if (question1Ids.includes(reponse[i])) {
            reponsetriee[0] = reponse[i];
        } else if (question2Ids.includes(reponse[i])) {
            reponsetriee[1] = reponse[i];
        } else if (question3Ids.includes(reponse[i])) {
            reponsetriee[2] = reponse[i];
        } else if (question4Ids.includes(reponse[i])) {
            reponsetriee[3] = reponse[i];
        } else if (question5Ids.includes(reponse[i])) {
            reponsetriee[4] = reponse[i];
        } else if (question6Ids.includes(reponse[i])) {
            reponsetriee[5] = reponse[i];
        } else if (question7Ids.includes(reponse[i])) {
            reponsetriee[6] = reponse[i];
        } else if (question8Ids.includes(reponse[i])) {
            reponsetriee[7] = reponse[i];
        } else if (question9Ids.includes(reponse[i])) {
            reponsetriee[8] = reponse[i];
        } else if (question10Ids.includes(reponse[i])) {
            reponsetriee[9] = reponse[i];
        } else if (question11Ids.includes(reponse[i])) {
            reponsetriee[10] = reponse[i];
        } else if (question12Ids.includes(reponse[i])) {
            reponsetriee[11] = reponse[i];
        }
    }
    return reponsetriee;

}
nombreTotalReponses=0;
function TotalScore(){
    var tabReponse=tri();
    var reponseCorrect=['torture','autruche','crocodile','cheval','mont_everest','antarctique','terre','amazon','dionee','chene','cactus','rafflesia']
    for (var i=0 ;i<12 ;i++ ){
        if (reponseCorrect[i]==tabReponse[i]){
            nombreTotalReponses++;
            green(tabReponse[i]);
        }else{
            red(tabReponse[i]);
            green(reponseCorrect[i]);
        }
    }
    alert("Votre score total est : " + nombreTotalReponses + '/12');
    if(nombreTotalReponses==12){
        alert("Bravo, toutes vos réponses sont correctes !!");
    }else if (nombreTotalReponses>6){
        alert("C'est encore mieux, tu as le moyen.");
        alert("Cliquez sur OK pour découvrir les réponses correctes.");
    }else{
        alert("Ah, tu n'as pas réussi cette fois, mais ce n'est pas grave. Courage pour la prochaine fois !");
        alert("Cliquez sur OK pour découvrir les réponses correctes.")
    }
}


