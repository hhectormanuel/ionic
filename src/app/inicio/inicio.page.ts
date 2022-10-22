import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] =[
    {
      icon: 'baseball-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alarm-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'baseball-outline',
      name : 'cards',
      redirectTo : '/cards'
    }
  ];
  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Hola señora nadia',
      subHeader: 'Importantante mensaje para ustted',
      message: 'Esto es una alerta',
      buttons: ['OK'],
    });

    await alert.present();
  }

}

interface Componente {
  icon: string,
  name: string,
  redirectTo: string
}
