//import { AlertController } from 'ionic-angular';
/*export class MyPage {
  constructor(public alertCtrl: AlertController) {
  }*/


function deleteEntry(){
var r = confirm("Do you want to delete this entry?");
if (r == true) {
    var gparent = document.getElementById("ion-content");
    var parent = document.getElementById("FoodButton");
	var child = document.getElementById("eggos");
	var list = document.getElementById("myList");
	console.log(gparent);

	console.log(parent);
	console.log(child);
	var cNode = document.createTextNode(child);
	var pNode = document.createTextNode(parent);
	pNode.removeChild(cNode);
	
}
else {}
}
