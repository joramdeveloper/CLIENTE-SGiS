import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterStateSnapshot } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';

import { HubModule } from '../../hub/hub.module';
import { PerfilModule } from '../../perfil/perfil.module';
import { BloquearPantallaModule } from '../../bloquear-pantalla/bloquear-pantalla.module';
import { ReporteIncidenciaRoutingModule } from './reporte-incidencia-routing.module';
import { PaginacionModule } from '../../parcial/paginacion/paginacion.module';

import { MenuModule } from '../../menu/menu.module';
import { ParcialModule } from '../../parcial/parcial.module';

import { ReporteIncidenciaComponent } from './lista/lista.component';

import { AuthService } from '../../auth.service';

//crud
import { CrudService } from '../../crud/crud.service';
import { CrudModule }  from '../../crud/crud.module';
//fin crud
import { Select2Module } from 'ng2-select2';
import { NguiDatetimePickerModule, NguiDatetime } from '@ngui/datetime-picker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReporteIncidenciaRoutingModule,
    HubModule,
    PerfilModule,
    BloquearPantallaModule,
    MenuModule, 
    ParcialModule,
    PaginacionModule,
    CrudModule,
    Select2Module,
    NguiAutoCompleteModule,
    NguiDatetimePickerModule

  ],
  declarations: [ 
    ReporteIncidenciaComponent, 
  
  ],
  providers: [ AuthService, CrudService ]
})
export class ReporteIncidenciaModule { }