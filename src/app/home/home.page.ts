import { Component } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  tota: boolean = true;
  constructor(public alertController: AlertController) {}
  total: number = 0;
  inputReason: string = "";
  inputExpense: string = "";

  add() {
    const expenseList = document.querySelector("#expense-list");
    const newItem = document.createElement("ion-item");
    if (this.inputExpense.length <= 0 || this.inputReason.length <= 0) {
      this.presentAlert();
    } else {
      newItem.textContent = this.inputReason + ": $" + this.inputExpense;
      console.log(newItem);
      expenseList.appendChild(newItem);
      this.total += +this.inputExpense;

      console.log(this.total);
      this.clear();
      console.log("Cleared");
    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Alert",
      message: "Invalid Values",
      buttons: ["OK"]
    });

    await alert.present();
  }
  clear() {
    this.inputExpense = "";
    this.inputReason = "";
  }
}
