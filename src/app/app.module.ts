import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { FileDragDropDirective } from "./file-drag-drop.directive";
import { FileUploadComponent } from "./file-upload/file-upload.component";

@NgModule({
  declarations: [AppComponent, FileDragDropDirective, FileUploadComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
