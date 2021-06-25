import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(private toastController: ToastController) { }

  async showSuccess(msg: string) {
    let toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      color: 'success',
      mode: 'ios'
    });
    await toast.present();
  }

  async showError(msg: string) {
    let toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      color: 'danger',
      mode: 'ios'
    });
    await toast.present();
  }

}
