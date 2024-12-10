import { Injectable } from '@angular/core';

export interface Produit {
  id: number;
  nom: string;
  prix: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  produits: Produit[] = [
    { id: 1, nom: 'chemise', prix: 356, image: 'https://th.bing.com/th/id/OIP.rbob5ez5V0-2asUjLz4YqgHaLj?rs=1&pid=ImgDetMain' },
    { id: 2, nom: 'pantalon', prix: 290, image: 'https://www.cdiscount.com/pdt2/7/0/1/1/700x700/mp78278701/rw/pantalon-cargo-homme-grande-taille-de-travail-a.jpg' },
    { id: 3, nom: 'chaussures', prix: 350, image: 'https://th.bing.com/th/id/R.885efc9fb0a1f0b7b61edc57b2fd8e25?rik=q0XasKgGcHr9eg&pid=ImgRaw&r=0' },
  ];

  getProduits() {
    return this.produits;
  }
  /*-------------Panier---------------*/
  panier: Produit[] = [];
    ajouterAuPanier(produit: Produit) {
    this.panier.push(produit);
  }
  
  getPanier() {
    return this.panier;
  }
  
  retirerDuPanier(index: number) {
    this.panier.splice(index, 1);
  }
}

