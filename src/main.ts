import { ApplicationModule, Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { AppComponent } from './app/app.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(AppComponent).catch(err=>console.error(err));
