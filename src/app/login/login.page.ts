import { Component, OnInit } from "@angular/core";
import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  CheckboxRequiredValidator,
} from "@angular/forms";
import {
  NavController,
  AlertController,
  LoadingController,
  Platform,
} from "@ionic/angular";
import { LoginService } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  validationEmail = false;
  validationPassword = false;
  users: any;
  isLoading = false;

  constructor(
    private loginSvc: LoginService,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, {
        updateOn: "change",
        validators: [Validators.required, Validators.minLength(1)],
        //validators: [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]
      }),
      password: new FormControl(null, {
        updateOn: "change",
        validators: [Validators.required, Validators.minLength(1)],
      }),
    });

    this.form.controls.email.valueChanges.subscribe(() => {
      if (!this.form.controls.email.valid) {
        this.validationEmail = true;
      } else {
        this.validationEmail = false;
      }
    });

    this.form.controls.password.valueChanges.subscribe(() => {
      if (!this.form.controls.password.valid) {
        this.validationPassword = true;
      } else {
        this.validationPassword = false;
      }
    });
  }

  Login() {
    if (this.validationEmail !== true && this.validationPassword !== true) {
      if (this.form.value.email !== null && this.form.value.password !== null) {
        this.presentLoading().then(() => {
          this.dismiss();
          this.checkUser();
        });
      } else {
        if (this.form.value.email == null) {
          this.validationEmail = true;
        }
        if (this.form.value.email == null) {
          this.validationPassword = true;
        }
      }
    } else {
      this.presentAlert();
    }
  }

  async presentLoading() {
    this.isLoading = true;
    return await this.loadingCtrl
      .create({
        message: "Please Wait . . .",
      })
      .then((a) => {
        a.present().then(() => {
          console.log("presented");
          if (!this.isLoading) {
            a.dismiss().then(() => console.log("abort presenting"));
          }
        });
      });
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: "Invalid",
      message: "Please Complete The Form",
      buttons: ["OK"],
    });

    await alert.present();
  }

  checkUser() {
    console.log(this.form.value.email);
    console.log(this.form.value.password);
    if (this.form.value.email == "kap" && this.form.value.password == "kap") {
      console.log("lu ngapa");
      this.navCtrl.navigateForward("/homepagekaprodi");
    } else if (
      this.form.value.email == "dos" &&
      this.form.value.password == "dos"
    ) {
      console.log("lu ngapa");
      this.navCtrl.navigateForward("/homepagedosen");
    } else if (
      this.form.value.email == "mah" &&
      this.form.value.password == "mah"
    ) {
      console.log("lu ngapa");
      this.navCtrl.navigateForward("/homepagemhs");
    } else {
      this.checkAlert();
    }
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingCtrl
      .dismiss()
      .then(() => console.log("dismissed"));
  }

  async checkAlert() {
    const alert = await this.alertCtrl.create({
      header: "Invalid",
      message: "Invalid Username/Password",
      buttons: ["OK"],
    });

    await alert.present();
  }
}
