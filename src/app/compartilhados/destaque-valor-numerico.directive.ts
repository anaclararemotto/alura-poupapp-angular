// diretivas = classes no angular que são apropriadas para modificar o visual ou o comportamento de um elemento HTML de forma específica.
// Criar diretivas que sejam aplicadas em atributos personalizados
// como foi feito em uma diretiva, conseguimos reutilizar a logica em outros locais

import { afterRender, Directive, effect, ElementRef, input } from '@angular/core';

@Directive({
  selector: '[appDestaqueValorNumerico]',
})
export class DestaqueValorNumericoDirective {
  appDestaqueValorNumerico = input.required<number>();

  // ElementRef faz referencia a um elemento do DOM
  constructor(elemento: ElementRef<HTMLElement>) {
    // afterRender metodo de ciclo de vida do angular que garante que a interação com o HTML ira acontecer apenas quando for renderizado (Usar sempre que for referenciar um elemento do DOM)
    afterRender(() => {
        if(this.appDestaqueValorNumerico() > 0){
      elemento.nativeElement.style.color = 'var(--destaque-receita)';
        } else if (this.appDestaqueValorNumerico() < 0) {
            elemento.nativeElement.style.color = 'var(--destaque-despesa)'
        }
    });

    // Podemos usar effect no lugar de after render para que toda vez que um input mudar, a mudança ja aconteça
  }
}
