import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public isCollapsed = false;
  constructor(private modalService: NgbModal) {}
	open(content:any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
	}
}
