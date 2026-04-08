import { Routes } from '@angular/router';
import { Home } from './home/home';
import { TodoComponent } from './todo/todoComponent';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: "todos",
        component: TodoComponent
    }
];
