import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit { //exporta esse componente, o nome da classe deve se comparar com o mesmo do arquivo.

    constructor() {//Método que é executado assim quando a classe é criada.

    }

    ngOnInit(): void {

    }
}