import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private readonly apiUrl = 'http://localhost:3000/api/products';

  constructor(private readonly http: HttpClient) { }

  listar(): Observable<Produto[]> {
    // TODO: implementar GET /api/products
    return of([]);
    
  }

  buscarPorId(id: number): Observable<Produto> {
    // TODO: implementar GET /api/products/:id
    // Retorno vazio temporário para não quebrar a compilação
    return of ({} as Produto);
  }

  cadastrar(produto: Produto): Observable<Produto> {
    // TODO: implementar POST /api/products
    return of ({} as Produto);
  }

  atualizar(id: number, produto: Produto): Observable<Produto> {
    // TODO: implementar PUT /api/products/:id
    // Retorno temporário para não quebrar a compilação
    return of ({} as Produto);
  }

  excluir(id: number): Observable<void> {
    // TODO: implementar DELETE /api/products/:id
    // Retorno temporário para não quebrar a compilação
    return of ();
  }
}
