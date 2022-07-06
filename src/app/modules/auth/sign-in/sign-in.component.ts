import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { IUser, CognitoService } from 'app/core/auth/cognito.service';

@Component({
    selector     : 'auth-sign-in',
    templateUrl  : './sign-in.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AuthSignInComponent implements OnInit
{
    @ViewChild('signInNgForm') signInNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: ''
    };
    signInForm: FormGroup;
    showAlert: boolean = false;
    user: IUser;

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _authService: AuthService,
        private _formBuilder: FormBuilder,
        private _router: Router,
        private _cognitoService: CognitoService
    )
    {
        this.user = {} as IUser;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {

        // email     : ['hughes.brian@company.com', [Validators.required, Validators.email]],
        //     password  : ['admin', Validators.required],
        // Create the form
        this.signInForm = this._formBuilder.group({
            email     : ['dewanta@gmail.com', [Validators.required, Validators.email]],
            password  : ['earlGr3y@313354', Validators.required],
            // email     : ['hughes.brian@company.com', [Validators.required, Validators.email]],
            // password  : ['admin', Validators.required],
            rememberMe: ['']
        });
        
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign in
     */
    signIn(): void
    {
        // Return if the form is invalid
        if ( this.signInForm.invalid )
        {
            return;
        }

        // Disable the form
        this.signInForm.disable();

        // Hide the alert
        this.showAlert = false;

        // Sign in
        this._authService.signInAWS(this.signInForm.value)
            .then(
                (resp) => {
                    
                    // Set the redirect url.
                    // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
                    // to the correct page after a successful sign in. This way, that url can be set via
                    // routing file and we don't have to touch here.
                    const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';

                    // Navigate to the redirect url
                    this._router.navigateByUrl(redirectURL);

                },
                (response) => {
                    
                    // Re-enable the form
                    this.signInForm.enable();

                    // Reset the form
                    this.signInNgForm.resetForm();

                    // Set the alert
                    this.alert = {
                        type   : 'error',
                        message: response
                    };

                    // Show the alert
                    this.showAlert = true;
                }
            );
    }
    signInAWS(): void
    {
        // Return if the form is invalid
        if ( this.signInForm.invalid )
        {
            return;
        }

        // Disable the form
        this.signInForm.disable();

        // Hide the alert
        this.showAlert = false;

        // Sign in
        this.user = {
            email: this.signInForm.value.email,
            password: this.signInForm.value.password
        } as IUser;
        
        this._cognitoService.signIn(this.user)
            .then((response: any) => {

                
                const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';

                // Navigate to the redirect url
                this._router.navigateByUrl(redirectURL);
                // this._cognitoService.isAuthenticated().then((resp) => {
                //     if (resp) {
                       
                        
                //     }
                // });
                
                
            })
            .catch((err) => {
                console.log(err);
                // Re-enable the form
                this.signInForm.enable();

                // // Reset the form
                // this.signInNgForm.resetForm();

                // Set the alert
                this.alert = {
                    type   : err.__type,
                    message: err.message
                };

                // Show the alert
                this.showAlert = true;
            });

        
    }
}
