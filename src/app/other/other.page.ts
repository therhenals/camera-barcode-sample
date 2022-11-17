import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ScannerPage } from '../scanner/scanner.page';

@Component({
  selector: 'app-other',
  templateUrl: './other.page.html',
  styleUrls: ['./other.page.scss'],
})
export class OtherPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  close() {
    this.modalController.dismiss();
  }

  async open() {
    const modal = await this.modalController.create({
      component: ScannerPage,
      id: 'Scanner',
    });
    await modal.present();

    document.querySelector('body').classList.add('scanner-active');
    document.querySelector('ion-router-outlet').classList.add('hide');
    document.querySelectorAll('ion-modal').forEach((item) => {
      if (item.id !== 'Scanner') {
        item.classList.add('hide');
      }
    });
  }

}
