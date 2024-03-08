import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { CategoryService } from '../../service/category/category.service';
import * as CategoryActions from './category.actions';

@Injectable()
export class CategoryEffects {
  constructor(
    private action$: Actions,
    private categoryService: CategoryService,
  ) {}

  getAllCategory$ = createEffect(() =>
    this.action$.pipe(
      ofType(CategoryActions.getAllCategories),
      switchMap((action) => {
        return this.categoryService
          .getAllCategory(action.token, action.page)
          .pipe(
            map((categoryList: any) => {
              return CategoryActions.getAllCategoriesSuccess({
                categoryList: categoryList,
              });
            }),
            catchError((error) => {
              return of(
                CategoryActions.getAllCategoriesFailure({
                  errorMessage: error,
                }),
              );
            }),
          );
      }),
    ),
  );
}
