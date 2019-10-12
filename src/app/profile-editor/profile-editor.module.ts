import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileEditorRouterModule} from './profile-editor-router.module';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {ProfileEditorComponent} from './profile-editor.component'
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ProfileEditorComponent],
    imports: [
        CommonModule,
        RouterModule,
        ProfileEditorRouterModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule
    ],
    providers: [ProfileEditorComponent],
    exports: [ProfileEditorComponent],
    entryComponents: [ProfileEditorComponent]
})
export class ProfileEditorModule {

  
}