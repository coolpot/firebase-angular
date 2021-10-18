import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  constructor(private snackbar: MatSnackBar, private router: Router) { }

  authError() {
    this.snackbar.open('You must be logged in', 'OK', {
      duration: 4000
    });

    return this.snackbar._openedSnackBarRef
      ?.onAction()
      .pipe(
        tap(_ =>
          this.router.navigate(['/login'])
          )
      )
      .subscribe();
  }
}
