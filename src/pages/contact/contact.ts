import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
 
  nome = "";
  email ="";
  msg = "";

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  enviar(){
    this.showAlert(this.nome, this.email, this.msg)
    this.nome = "";
    this.email ="";
    this.msg = "";
  }
  showAlert(nome, email, msg) {
    const alert = this.alertCtrl.create({
      title: 'Olá, '+ nome + "!",
      subTitle: 'Seu email para contato é: ' + email,
      message: 'E sua mensagem foi: ' + msg,
      buttons: ['OK']
    });
    alert.present();
  }
}
