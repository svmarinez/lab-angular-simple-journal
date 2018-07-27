import { Routes } from '@angular/router';
import { EntryListComponent } from 'app/components/entry-list/entry-list.component';
import { EntryFormComponent } from 'app/components/entry-form/entry-form.component';

export const routes: Routes = [
    {path: '', component: EntryListComponent}
];

