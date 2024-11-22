import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'emojis',
  standalone: true
})
export class EmojisPipe implements PipeTransform {
   private emojiList: Record<string, string>= {
    ":|":"😐",
    ":D":"😄",
    ":)":"🙂",
    ':bike:':'🚴‍♂️', // I like riding bike
    ':coffee:':'☕️', // Let's get a coffee
    ':shocking:': '😱', // Shocking news
    ':biscuit:': '🍪'

  }
  transform(value: string): string {
    return value.replace(/:\w+:|:$$|:\||:D/g, match =>
      this.emojiList[match] || match
    );
  }

}
