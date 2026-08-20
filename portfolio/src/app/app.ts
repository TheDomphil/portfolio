import { Component } from '@angular/core';

interface Skill {
  name: string;
  level: 'lernt gerade' | 'sicher im Umgang';
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly semesterAktuell = 3;
  readonly semesterGesamt = 6;

  readonly skills: Skill[] = [
    { name: 'TypeScript', level: 'lernt gerade' },
    { name: 'Angular', level: 'lernt gerade' },
    { name: 'C#', level: 'sicher im Umgang' },
    { name: 'C', level: 'sicher im Umgang' },
    { name: 'SQL / Datenbanken', level: 'sicher im Umgang' },
    { name: 'Algorithmen & Datenstrukturen', level: 'lernt gerade' },
  ];

  get semesterProzent(): number {
    return Math.round((this.semesterAktuell / this.semesterGesamt) * 100);
  }
}
