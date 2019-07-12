import { Component } from "@angular/core";
import { TesseractWorker } from "tesseract.js";
import { error } from "util";

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.css"]
})
export class FileUploadComponent {
  imgSrc: any;
  ocrResult = "";
  progress;
  selectedLang;
  file;

  constructor() {}

  uploadFile(event) {
    this.file = event[0];

    const reader = new FileReader();
    reader.onload = () => {
      this.imgSrc = reader.result;
    };
    if (this.file) {
      reader.readAsDataURL(this.file);
    }
  }

  convert() {
    const worker = new TesseractWorker();
    worker
      .recognize(this.file, this.selectedLang)
      .progress(p => {
        this.progress = p.progress;
        console.log(this.selectedLang, "progress", p);
      })
      .then(({ text }) => {
        this.ocrResult = text;
        worker.terminate();
      })
      .catch(error => {
        console.log(error);
      });
  }
}
