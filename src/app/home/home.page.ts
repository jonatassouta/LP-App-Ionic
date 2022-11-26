import { Component } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public quantidateParcelas!: number;
  public valorPrestacao!: number;
  public dataVencimento!: string;
  public mesMedio: number = 0;
  public valorJuros: number = 0;
  public d = new Date();
  private meses: number = 0;

  constructor() {}

  calculoJuros(){
    this.calculoMesMedio();
    this.calculoQuantidadeMes();

    this.meses = (this.meses + 2) / 100;
    var valorPorcentagem = (this.valorPrestacao * this.quantidateParcelas) * this.meses;
    this.valorJuros = (this.valorPrestacao * this.quantidateParcelas) + valorPorcentagem;
  }

  calculoMesMedio(){
    this.mesMedio = this.quantidateParcelas/2;

    if (this.quantidateParcelas%2 != 0){
      this.mesMedio = Math.ceil(this.mesMedio);
    }

    this.d = new Date(this.dataVencimento)

    this.d.setMonth(this.d.getMonth() + (this.mesMedio - 1))
  }

  calculoQuantidadeMes() {
    const now = moment(new Date()); // Data de hoje
    const past = moment(this.d); // Outra data no passado
    const duration = moment.duration(now.diff(past));

    // Mostra a diferença em meses
    this.meses = Math.trunc(duration.asMonths());
  }
}


