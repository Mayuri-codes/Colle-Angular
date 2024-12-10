import { Component, OnInit } from '@angular/core';
import { ProduitsService, Produit } from '../services/produits.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits: Produit[] = [];

  constructor(private produitsService: ProduitsService) { }

  ngOnInit(): void {
    this.produits = this.produitsService.getProduits();
  }

  ajouterAuPanier(produit: Produit): void {
    this.produitsService.ajouterAuPanier(produit); // Ajoute le produit au panier
  }
}
