import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  usuarios=[
    {
      nombre:"Juana",
      apellidoP:"Perez",
      apellidoM:"Perez",
      edadAnos:34,
      edadMeses:8,
      img:"http://lorempixel.com/400/400",
      especialidad:"cardiología",
      hora:"09:20",
      sexo: "mujer",
      email: "juana.perez@prueba",
      dni:44539552
    },{
      nombre:"Juana",
      apellidoP:"Perez",
      apellidoM:"Perez",
      edadAnos:34,
      edadMeses:8,
      img:"http://lorempixel.com/400/400",
      especialidad:"cardiología",
      hora:"09:40",
      sexo: "mujer",
      email: "juana.perez@prueba",
      dni:44539552
    },{
      nombre:"Juana",
      apellidoP:"Perez",
      apellidoM:"Perez",
      edadAnos:34,
      edadMeses:8,
      img:"http://lorempixel.com/400/400",
      especialidad:"cardiología",
      hora:"10:20",
      sexo: "mujer",
      email: "juana.perez@prueba",
      dni:44539552
    },{
      nombre:"Juana",
      apellidoP:"Perez",
      apellidoM:"Perez",
      edadAnos:34,
      edadMeses:8,
      img:"http://lorempixel.com/400/400",
      especialidad:"cardiología",
      hora:"10:40",
      sexo: "mujer",
      email: "juana.perez@prueba",
      dni:44539552
    }
  ];
  constructor(public _router: Router) { }


  ngOnInit() {
  }

  goToDetail(user){
    console.log(user);
    this._router.navigate(['/detailuser'])
    
  }
}
