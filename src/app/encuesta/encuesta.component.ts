import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { EncuestaService } from '../encuesta.service';

@Component({
  selector: 'app-encuesta',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './encuesta.component.html',
  styleUrl: './encuesta.component.css',
})
export class EncuestaComponent implements OnInit {
  encuestaForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private encuestaService: EncuestaService
  ) {}
  ngOnInit(): void {
    this.encuestaForm = this.fb.group({
      pregunta1: [, Validators.required],
      pregunta2: [, Validators.required],
      pregunta3: [, Validators.required],
      comentario: [''],
    });
  }
  async onSubmit() {
    const { pregunta1, pregunta2, pregunta3, comentario } =
      this.encuestaForm.value;
    console.log('Encuesta enviada:', this.encuestaForm.value);
    if (
      await this.encuestaService.EnviarEncuesta(
        +pregunta1,
        +pregunta2,
        +pregunta3,
        comentario
      )
    )
      this.router.navigate(['/finencuesta']);
  }
}
