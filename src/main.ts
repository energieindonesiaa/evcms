import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from 'environments/environment';
import { AppModule } from 'app/app.module';
import 'zone.js';
import Amplify, {Auth} from 'aws-amplify';
import awsconfig from 'aws-exports.js';
Amplify.configure(awsconfig);
Auth.configure(awsconfig);

if ( environment.production )
{
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
                        .catch(err => console.error(err));
