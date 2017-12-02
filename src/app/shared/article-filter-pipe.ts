import { Pipe, PipeTransform } from '@angular/core';

import { Article } from '../models/Article';

@Pipe({
    name: 'articlefilter',
    pure: false
})
export class ArticleFilterPipe implements PipeTransform {
  transform(items: Article[], filter: Article): Article[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Article) => this.applyFilter(item, filter));
  }
  
  /**
   * Perform the filtering.
   * 
   * @param {Article} article The book to compare to the filter.
   * @param {Article} filter The filter to apply.
   * @return {boolean} True if book satisfies filters, false if not.
   */
  applyFilter(article: Article, filter: Article): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (article[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } 
      }
    }
    return true;
  }
}