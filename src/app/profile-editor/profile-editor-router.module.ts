import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileEditorComponent} from './profile-editor.component'

const routes: Routes = [
    {    
    path: 'profile-editor', component: ProfileEditorComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class ProfileEditorRouterModule {
}