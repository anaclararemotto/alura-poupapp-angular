// diretivas = classes no angular
// Criar diretivas que sejam aplicadas em atributos personalizados

import { afterRender, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDestaqueValorNumerico]',
})
export class DestaqueValorNumericoDirective {
  // ElementRef faz referencia a um elemento do DOM
  constructor(elemento: ElementRef<HTMLElement>) {
    // afterRender metodo de ciclo de vida do angular que garante que a interação com o HTML ira acontecer apenas quando for renderizado (Usar sempre que for referenciar um elemento do DOM)
    afterRender(() => {
      elemento.nativeElement.style.color = 'var(--destaque-receita)';
    });
  }
}
