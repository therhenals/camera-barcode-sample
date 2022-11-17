import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import {
  CameraPreview,
  CameraPreviewOptions,
} from '@capacitor-community/camera-preview';
import { ModalController } from '@ionic/angular';
import { OtherPage } from '../other/other.page';
import { ScannerPage } from '../scanner/scanner.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private modalController: ModalController,
  ) {}

  async scan() {
    const modal = await this.modalController.create({
      component: OtherPage,
    });
    await modal.present();
  }
}
