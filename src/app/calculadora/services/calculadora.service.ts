/**
 * Serviço responsável por executar as operações da calculadora
 * @author Allan Vinicius <allanvinisilva@gmail.com>
 * @since 1.0.0 
 **/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  //Define as constantes utilizadas para identificar os operadores de cálculo

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  /**
   * O método é responsável por calcular o resultado da operação
   * Suporta as 4 operações aritiméticas básicas
   * 
   * @param num1 number
   * @param num2 number
   * @param operacao string Operação matemática a ser executada
   * @return number resultado da operação executada
   */
    
  calcular (num1: number, num2 : number, operacao: string){
    let resultado: number; // Armazena o resultado do calculo

    switch (operacao){

      case CalculadoraService.SOMA:
        resultado = num1+num2;
        break;

      case CalculadoraService.SUBTRACAO:
        resultado = num1-num2;
        break;

      case CalculadoraService.DIVISAO:
        resultado = num1/num2;
        break;

      case CalculadoraService.MULTIPLICACAO:
        resultado = num1*num2;
        break;
        
      default:
        resultado = 0;

    }

    return resultado;

  }

}
