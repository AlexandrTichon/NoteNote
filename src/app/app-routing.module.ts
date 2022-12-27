import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditorComponent} from "./component/editor/editor/editor.component";

const routes: Routes = [
  { path: 'editor', component: EditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
