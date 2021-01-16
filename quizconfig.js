
//Enter total number of questions:
var totalquestions=10

//Enter the solutions corresponding to each question:
var correctchoices=new Array()
correctchoices[1]='b' 
correctchoices[2]='b' 
correctchoices[3]='a'
correctchoices[4]='b'
correctchoices[5]='b'
correctchoices[6]='b'
correctchoices[7]='b'
correctchoices[8]='b'
correctchoices[9]='b'



/////Don't edit beyond here//////////////////////////

function gradeit(){
var incorrect=null
for (q=1;q<=totalquestions;q++){
	var thequestion=eval("document.myquiz.question"+q)
	for (c=0;c<thequestion.length;c++){
		if (thequestion[c].checked==true)
		actualchoices[q]=thequestion[c].value
		}
		
	if (actualchoices[q]!=correctchoices[q]){ //process an incorrect choice
		if (incorrect==null)
		incorrect=q
		else
		incorrect+="/"+q
		}
	}

if (incorrect==null)
incorrect="a/b"
document.cookie='q='+incorrect
if (document.cookie=='')
alert("Your browser does not accept cookies. Please adjust your browser settings.")
else
window.location="results.htm"
}


function showsolution(){
var win2=window.open("","win2","width=200,height=350, scrollbars")
win2.focus()
win2.document.open()
win2.document.write('<title>Solution</title>')
win2.document.write('<body bgcolor="#FFFFFF">')
win2.document.write('<center><h3>Solution to Quiz</h3></center>')
win2.document.write('<center><font face="Arial">')
for (i=1;i<=totalquestions;i++){
for (temp=0;temp<incorrect.length;temp++){
if (i==incorrect[temp])
wrong=1
}
if (wrong==1){
win2.document.write("Question "+i+"="+correctchoices[i].fontcolor("red")+"<br>")
      if (i == 1){
		win2.document.write("<h5>Note:Τα συμπληρώματα απλά συμπληρώνουν ένα πρόγραμμα όταν κάποιος δεν μπορεί να το έχει από το φαγητό. Δεν αντικαθιστούν τη διατροφή και την προπόνηση. Αν ο ασκούμενος έχει μια σωστή διατροφή ανάλογα με το επίπεδο και τον στόχο του, παίρνει τα απαραίτητα συστατικά από το φαγητό.")
   }
	if (i == 2){
		win2.document.write("<h5>Note:Για το «φούσκωμα» χρειάζεται γενικά πολύ καλή διατροφή και απαιτητική προπόνηση τόσο για τους άνδρες όσο για τις γυναίκες. Σημαντικό ρόλο έχουν και οι ορμόνες που διαθέτει το κάθε φύλο. Οι άντρες έχουν περισσότερη τεστοστερόνη ενώ οι γυναίκες οιστρογόνα. Η άσκηση με βάρη βοηθάει να καεί περισσότερο λίπος, να δυναμώσει το μυϊκό σύστημα και να σμιλέψει όλο το σώμα. Κάνοντας προπόνηση με βάρη επίσης αυξάνεται και η οστική μάζα, κάτι που είναι ιδιαίτερα σημαντικό καθώς η εμφάνιση οστεοπόρωσης στις γυναίκες είναι συνηθισμένη..")
   }
    (i == 3){
	win2.document.write("<h5>Note:Σίγουρα μία διατροφή μόνο με σαλάτα θα μας αδυνατίσει, αλλά αυτή η απώλεια τι είδους κιλά είναι, μυϊκά η λίπος; Μην ξεχνάτε ότι και η αγελάδα χόρτα τρώει...!.")
   }


wrong=0
}
else
win2.document.write("Question "+i+"="+correctchoices[i]+"<br>")
}
win2.document.write('</center></font>')
win2.document.write("<h5>Note 1: The solutions in red are the ones to the questions you had incorrectly answered.</h5>")
	win2.document.write("<h5>Note for question 4: Μπορεί όλοι να λέμε plank, όμως plank είναι κυρίως όταν ακουμπάνε οι παλάμες! Η άσκηση που είδαμε λέγεται hover γιατί ακουμπάνε οι αγκώνες! Η Αντιγόνη είναι στο γυμναστήριο για να σε βοηθήσει να πετύχεις τη σωστή σανίδα αν δυσκολεύεσαι!.</h5>")
win2.document.close()
}
