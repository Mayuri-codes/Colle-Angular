
import { Component, OnInit } from '@angular/core';
import { ProduitsService, Produit } from '../services/produits.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent implements OnInit {
  panier: Produit[] = [];

  constructor(private produitsService: ProduitsService) { }

  ngOnInit(): void {
    this.panier = this.produitsService.getPanier();
  }

  retirerDuPanier(index: number) {
    this.produitsService.retirerDuPanier(index);
  }
}
