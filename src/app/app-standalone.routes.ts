import { Routes } from '@angular/router';
import {
	PATHS_AUTH_PAGES,
	PATHS_PROCESS_PAGES,
	PATH_MAINTENANCES_PAGES,
  PATH_MANAGEMENT_PAGES,
	PATH_MY_ACCOUNT_PAGES,
	PATH_NOT_FOUND_PAGE
} from './commons/config/path-pages';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const ROUTES_ROOT: Routes = [
	{
		path: '',
		component: HomePageComponent
	},
  {
		path: PATHS_AUTH_PAGES.loginPage.onlyPath,
		title: 'Inicio de sesión',
		loadChildren: () => import('./pages/login-page/login-page.module').then((m) => m.LoginPageModule)
	},
  {
		path: PATHS_AUTH_PAGES.registerPage.onlyPath,
		title: 'Registro de usuario',
		loadComponent: () => import('./pages/register-page/register-page.component')
	},
  {
		path: `${PATHS_AUTH_PAGES.recoverPasswordPage.onlyPath}`,
		title: 'Recuperar contraseña',
		loadComponent: () => import('./pages/recovery-password-page/recovery-password-page.component')
	},
  {
		path: `${PATHS_AUTH_PAGES.restorePasswordPage.onlyPath}/:email`,
		title: 'Restaurar contraseña',
		loadComponent: () => import('./pages/restore-password-page/restore-password-page.component')
	},
	/*{
		path: PATHS_PROCESS_PAGES.reservePage.onlyPath,
		title: 'Reserva de juego',
		loadComponent: () => import('./pages/reserve-page/reserve-page.component')
	},
	{
		path: PATHS_PROCESS_PAGES.evaluatePage.onlyPath,
		title: 'Evaluacion de juego',
		loadComponent: () => import('./pages/evaluate-page/evaluate-page.component')
	},
	{
		path: PATH_MAINTENANCES_PAGES.onlyPath,
		loadChildren: () => import('./pages/maintenance/maintenance.routes')
	},*/
	{
		path: PATH_MY_ACCOUNT_PAGES.onlyPath,
		loadComponent: () => import('./pages/my-account/my-account.component')
	},
  {
		path: PATH_MAINTENANCES_PAGES.onlyPath,
		loadChildren: () => import('./pages/maintenance/maintenance.routes')
	},
  {
		path: PATH_NOT_FOUND_PAGE['not-found'].onlyPath,
		title: '404 | no se encuentra la página',
		loadComponent: () => import('./pages/not-found-page/not-found-page.component')
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: PATH_NOT_FOUND_PAGE['not-found'].onlyPath
	}
];
