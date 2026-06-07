import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonGrid, IonRow, IonCol, CommonModule],
})
export class HomePage implements OnInit {
  cryptoData: any[] = [];
  apiUrl = '  /'; // URL API sesuai soal

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
  }

  // Fungsi untuk mengambil data dari API Online
  fetchData() {
    this.http.get<any>(this.apiUrl).subscribe(
      (response) => {
        this.cryptoData = response.data; // Mengambil array 'data' dari API
      },
      (error) => {
        console.error('Gagal mengambil data crypto:', error);
      }
    );
  }

  // Fungsi untuk tombol Refresh
  refreshData() {
    this.cryptoData = []; // Mengosongkan data sementara agar terlihat proses reload
    this.fetchData();
  }
}