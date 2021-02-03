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
import { InputmasterService } from "./inputmaster.service";

@Component({
  selector: "app-inputmaster",
  templateUrl: "./inputmaster.page.html",
  styleUrls: ["./inputmaster.page.scss"],
})
export class InputmasterPage implements OnInit {
  form: FormGroup;
  validationName = false;
  validationPoint = false;
  validationDesc = false;
  isLoading = false;

  constructor(
    private inputMasterService: InputmasterService,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        updateOn: "change",
        validators: [Validators.required, Validators.minLength(1)],
        //validators: [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]
      }),
      point: new FormControl(null, {
        updateOn: "change",
        validators: [Validators.required, Validators.minLength(1)],
      }),
      desc: new FormControl(null, {
        updateOn: "change",
        validators: [Validators.required, Validators.minLength(1)],
      }),
    });

    this.form.controls.name.valueChanges.subscribe(() => {
      if (!this.form.controls.name.valid) {
        this.validationName = true;
      } else {
        this.validationName = false;
      }
    });

    this.form.controls.point.valueChanges.subscribe(() => {
      if (!this.form.controls.point.valid) {
        this.validationPoint = true;
      } else {
        this.validationPoint = false;
      }
    });

    this.form.controls.desc.valueChanges.subscribe(() => {
      if (!this.form.controls.desc.valid) {
        this.validationDesc = true;
      } else {
        this.validationDesc = false;
      }
    });
  }

  onSubmit() {
    if (
      this.validationName !== true &&
      this.validationPoint !== true &&
      this.validationDesc !== true
    ) {
      if (
        this.form.value.name !== null &&
        this.form.value.point !== null &&
        this.form.value.desc !== null
      ) {
        this.presentLoading().then(() => {
          this.dismiss();
          console.log(this.form.value.name);
          console.log(this.form.value.point);
          console.log(this.form.value.desc);
        });
      } else {
        if (this.form.value.name == null) {
          this.validationName = true;
        }
        if (this.form.value.point == null) {
          this.validationPoint = true;
        }
        if (this.form.value.desc == null) {
          this.validationDesc = true;
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

  async dismiss() {
    this.isLoading = false;
    return await this.loadingCtrl.dismiss();
  }
}
