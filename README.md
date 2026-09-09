# formulario-cliente

Formulário de cadastro de cliente (Angular + PrimeNG) — atividade da disciplina Design de Interfaces Humano/Computador, réplica do formulário apresentado em sala de aula.

## Campos do formulário

| Campo          | Tipo                        |
|----------------|------------------------------|
| Nome           | texto (obrigatório)         |
| Tipo de Pessoa | Pessoa Física / Pessoa Jurídica (obrigatório) |
| CPF/CNPJ       | texto com máscara (obrigatório) |
| Telefone       | texto com máscara (obrigatório) |
| CEP            | texto com máscara (obrigatório) |
| Cidade         | texto |
| Endereço       | texto (obrigatório) |
| Bairro         | texto (obrigatório) |
| Número         | texto (obrigatório) |
| Email          | texto (obrigatório) |

Ao clicar em **Salvar**, o formulário valida os campos obrigatórios e, se válido, imprime o objeto resultante no console (em JavaScript e em JSON).

## Como executar

```bash
npm install
npm start
```

A aplicação sobe em `http://localhost:4200`.

## Stack

- Angular 21 (standalone components, Reactive Forms)
- PrimeNG 21 + tema Aura (`@primeuix/themes`)
- `@primeicons/angular`
- Bootstrap 5 (grid, via CDN)
