import { Component } from '@angular/core';
import { NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, distinctUntilChanged, map, Observable, OperatorFunction } from 'rxjs';
import { FormsModule } from '@angular/forms';

const nomes = [
	'Andrew',
	'Andre',
	'Adrea',
	'Bruno',
	'Bruna'
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public model: any;
	public isCollapsed = false;
	currentRate = 8;

	constructor(private modalService: NgbModal,private offcanvasService: NgbOffcanvas) {}

	open(content:any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
	}

	openOffcanvas(content:any) {
		this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' });
	}

	search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
	text$.pipe(
		debounceTime(200),
		distinctUntilChanged(),
		map((term) =>
			term.length < 2 ? [] : nomes.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
		),
	);
}
