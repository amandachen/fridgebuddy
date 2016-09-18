//import { AlertController } from 'ionic-angular';
/*export class MyPage {
  constructor(public alertCtrl: AlertController) {
  }*/


function deleteEntry(){
var r = confirm("Do you want to delete this entry?");
if (r == true) {
    var gparent = document.getElementById("ion-content");
    var parent = document.getElementById("food-button");
	var child = document.getElementById("1");
	var list = document.getElementById("myList");
	parent.removeChild(child);

}
else {}
}
