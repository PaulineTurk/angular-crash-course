import { Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todoComponent';
import { Home } from './home/home';

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
