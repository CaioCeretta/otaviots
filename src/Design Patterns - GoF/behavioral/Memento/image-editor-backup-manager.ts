import { ImageEditor } from './image-editor';
import { Memento } from './memento';

export class ImageEditorBackupManager {
  private mementos: Memento[] = [];
  constructor(private readonly originator: ImageEditor) {}

  backup(): void {
    console.log(`Backup: saving ImageEditor state`);
    this.mementos.push(this.originator.save());
  }

  undo(): void {
    const memento = this.mementos.pop();

    if (!memento) {
      console.log(`No mementos avaiable`);
      return;
    }

    this.originator.restore(memento);
    console.log(`Backup: ${memento.getName()} was restored`);
  }

  showMementos(): void {
    for (const memento of this.mementos) {
      console.log(memento);
    }
  }
}
