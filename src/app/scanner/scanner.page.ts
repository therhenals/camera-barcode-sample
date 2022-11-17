import { Component, OnDestroy, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import {
  CameraPreview,
  CameraPreviewOptions,
  CameraPreviewPictureOptions,
} from '@capacitor-community/camera-preview';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {
  constructor(private modalController: ModalController) {}

  // async ngOnDestroy() {
  //   // await BarcodeScanner.stopScan();
  //   await CameraPreview.stop();
  //   document.querySelector('body').classList.remove('scanner-active');
  //   document.querySelector('ion-router-outlet').classList.remove('hide');
  //   document.querySelectorAll('ion-modal').forEach((modal) => {
  //     if (modal.id !== 'Scanner') {
  //       modal.classList.remove('hide');
  //     }
  //   });
  // }

  async close() {
    await CameraPreview.stop();
    // await BarcodeScanner.stopScan();
    document.querySelector('body').classList.remove('scanner-active');
    document.querySelector('ion-router-outlet').classList.remove('hide');
    document.querySelectorAll('ion-modal').forEach((modal) => {
      if (modal.id !== 'Scanner') {
        modal.classList.remove('hide');
      }
    });
    this.modalController.dismiss();
  }

  async ngOnInit() {
    const cameraPreviewOptions: CameraPreviewOptions = {
      position: 'rear',
      toBack: true,
    };
    await CameraPreview.start(cameraPreviewOptions);
    // // const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

    // document.querySelector('body').classList.remove('scanner-active');
    // document.querySelector('ion-router-outlet').classList.remove('hide');
    // document.querySelectorAll('ion-modal').forEach((modal) => {
    //   if (modal.id !== 'Scanner') {
    //     modal.classList.remove('hide');
    //   }
    // });

    // if the result has content
    // if (result.hasContent) {
    //   this.close();

    //   alert(result.content); // log the raw scanned content
    // }
  }

  async captura() {
    try {
      const cameraPreviewPictureOptions: CameraPreviewPictureOptions = {
        quality: 100,
      };

      const { value } = await CameraPreview.capture(
        cameraPreviewPictureOptions
      );
      console.log(value);

      if (value) {
        this.close();
      }
    } catch (error) {
      console.log(error);
    }
  }
}
