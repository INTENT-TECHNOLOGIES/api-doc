---
layout: post
title: "Concepts"
categories: concepts
permalink: '/concepts/'
---

# Concepts de la plateforme Intent Technologies


## Patrimoine

Le client commence par alimenter une base listant à la fois les composants de son patrimoine immobilier - les sites, leurs parties communes et privatives - et les divers équipements déployés en son sein.

[> En savoir plus sur le patrimoine]({{ site.baseurl }}/patrimoine)

## Activités

A chaque élément du patrimoine est associé un ensemble prédéfini d’activités que le système va observer, comme par exemple le suivi de la température intérieure d’un logement, de l’état de fonctionnement d’un équipement ou encore des visites d’entretien annuelles d’une chaudière individuelle.

## Données d’activité

Les applications connectées au système ; que ces applications soient des systèmes d’information, des interfaces utilisateur ou des capteurs déployés sur le terrain ; alimentent ces activités au fil de l’eau avec des données temporelles - des mesures, des alertes - caractérisant l’activité correspondante, comme par exemple un relevé de compteur, une alarme de panne ou encore un compte-rendu de visite.

## États

Au fur et à mesure de la publication de nouvelles données d’activité, le système analyse ces données puis, en fonction des critères d’analyse définis par le client - un seuil de température anormale par exemple, maintient à jour un état de l’élément du patrimoine auquel il est rattaché. L’état courant et les états antérieurs de cet élément sont en permanence consultables par le client.

## Partages

Les composants de la base patrimoniale, les activités et leurs données ainsi que les états sont la propriété du client. Ils ne sont par conséquent pas visibles des autres clients.

intentOS permet cependant à un client de partager avec un tiers, lui-même souscrit au service, tout ou partie des activités associées à son patrimoine. Ces activités deviennent alors visibles par ce tiers depuis les interfaces du service, comme d’ailleurs les caractéristiques du patrimoine sous-jacent. Les données publiées dans ces activités sont également accessibles et, si le client l’y a autorisé, le tiers peut lui même publier de nouvelles données dans ces activités.

Les états ne sont en revanche jamais partagés. Le système génère en effet pour chaque souscripteur un état privé des éléments du patrimoine à partir des données d’activités auxquelles il a accès et des paramètres qu'il a choisi.
