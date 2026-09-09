import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { SelectModule } from 'primeng/select';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonDirective } from 'primeng/button';
import { Save } from '@primeicons/angular/save';
import { Times } from '@primeicons/angular/times';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente-cadastrar',
  imports: [
    InputTextModule,
    FloatLabelModule,
    CardModule,
    SelectModule,
    InputMaskModule,
    ButtonDirective,
    Save,
    Times,
    ReactiveFormsModule,
  ],
  templateUrl: './cliente-cadastrar.html',
  styleUrl: './cliente-cadastrar.css',
})
export class ClienteCadastrar implements OnInit {
  formularioCliente!: FormGroup;

  mensagemValidacao?: string;

  //TIPOS DE ATRIBUTOS
  //string = texto
  //number = numero
  //boolean = true(verdadeiro)/false(falso)
  //any = utlilizado para qualquer tipo de dado
  //produto: Produto;
  idade: number = 18;

  tipoPessoaOptions: any[] = [
    { descricao: 'Pessoa Física', valor: 'PF' },
    { descricao: 'Pessoa Jurídica', valor: 'PJ' },
  ];

  constructor(private readonly criadorFormulario: FormBuilder) {}

  ngOnInit(): void {
    this.criarFormularioCliente();
  }

  criarFormularioCliente() {
    this.formularioCliente = this.criadorFormulario.group({
      nome: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      ],
      tipoPessoa: ['', Validators.required],
      cpfCnpj: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      bairro: ['', Validators.required],
      cep: ['', Validators.required],
    });
  }

  salvarCliente() {
    this.formularioCliente.markAllAsTouched();
    if (this.formularioCliente.invalid) {
      console.log('Formulário inválido!');
    } else {
      console.log('-----------------------Objeto em JavaScript');
      console.log(this.formularioCliente.value);
      console.log('-----------------------Objeto em JSON');
      console.log(JSON.stringify(this.formularioCliente.value));
    }
  }
}
