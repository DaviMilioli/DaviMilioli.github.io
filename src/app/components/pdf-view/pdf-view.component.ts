import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pdf-view',
  standalone: false,
  templateUrl: './pdf-view.component.html',
  styleUrl: './pdf-view.component.scss',
})
export class PdfViewComponent {
  @Output() closeModal = new EventEmitter<any>();
  modal: boolean = false;
  loading: boolean = true;
  pdfPath: string = 'assets/cv.pdf';
  zoom: number = 1;
  
  close(){
    this.closeModal.emit();
  }

  loadCvComplete(){
    this.loading = false;
  }

  zoomIn(){
    if(this.zoom < 3){
      this.zoom += 0.2;
    }
  }

  zoomOut(){
    if(this.zoom > 0.5){
      this.zoom -= 0.2;
    }
  }


}
