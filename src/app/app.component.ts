import { Component, OnInit, Inject } from '@angular/core';
import { Heroe } from './models/heroe.model';
import { heroes } from './mocks/heroes';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Comic } from './models/comic.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }


  title = 'MarvelApiChallenge';

  public heroes: Heroe[];
  public comics: Comic[];
  filterPost = '';


  ngOnInit(): void {
    this.getHeroes();
    this.getComics();
  }

  getHeroes() {
    this.heroes = heroes;
  }

  getComics() {
    this.comics = JSON.parse(localStorage.getItem("comics"));
  }

  openModal(row) {
    const dialogRef = this.dialog.open(ModalDialog, {
      width: '600px',
      data: row
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  deleteComic(data) {
    Swal.fire({
      title: 'Comic Eliminado',
      icon: 'success',
      showConfirmButton: true,
      confirmButtonColor: '#073642',
    })

    const list: any[] = JSON.parse(localStorage.getItem('comics'));

    const lists = list.filter(x => {
      return x.id !== data.id;
    })
    localStorage.setItem('comics', JSON.stringify(lists));
    this.getComics();
  }
}



// -------------------------------------------------TS MODAL
@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
})
export class ModalDialog implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalDialog>, @Inject(MAT_DIALOG_DATA) public data: Heroe) {
  }

  ngOnInit(): void {
  }

  onClose(): void {
    this.dialogRef.close(false);
  }

  saveComic(data) {
    let flag = false;
    const favorite = [];
    const list: any[] = JSON.parse(localStorage.getItem('comics'));

    if (list === null) {
      favorite.push(data);
      Swal.fire({
        text: 'Agregado a comics Favoritos',
        icon: 'success',
        confirmButtonColor: '#073642'
      })
      localStorage.setItem('comics', JSON.stringify(favorite));
    } else {
      list.forEach(favorite => {
        if (favorite.id === data.id) {
          Swal.fire({
            title: 'El comic ya existe en favoritos',
            icon: 'error',
            confirmButtonColor: '#073642'
          });
          flag = true;
        }
      });
      if (flag === false) {
        Swal.fire({
          text: 'Agregado a comics Favoritos',
          icon: 'success',
          confirmButtonColor: '#073642'
        })
        list.push(data);
        localStorage.setItem('comics', JSON.stringify(list));
      }
    }
  }

}
