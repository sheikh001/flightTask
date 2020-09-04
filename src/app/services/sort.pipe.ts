import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'orderBy', pure: false  })
export class MyOrderByPipe implements PipeTransform {
    debugger;
  transform(items: any[], field: string, reverse: boolean): any[] {
    if (!items) return [];
    if (field) items.sort((a, b) => a[field] > b[field] ? 1 : -1);
    else items.sort((a, b) => a > b ? 1 : -1);

    if (reverse) items.reverse();

    return items;
  }
}