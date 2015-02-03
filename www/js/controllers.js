angular.module('starter.controllers', [])

.controller('bynameCtrl', function($scope) {
  $scope.byname = [
    { title: "Amedeo's Italian Bistro", id: 1},
    { title: 'Black Diamond Bar & Grill', id: 2 },
    { title: 'Bonnie Prince', id: 3 },
    { title: 'Casino Nova Scotia', id: 4 },
    { title: 'Crown & Moose Pub', id: 5 },
    { title: "Daniel's Pub", id: 6 },
    { title: "Doktor Luke's", id: 7 },
    { title: 'Downtown Nutrition', id: 8 },
    { title: 'Embers Southern Barbeque', id: 9 },
    { title: 'Flavor 19', id: 10 },
    { title: 'Flavor Downtown', id: 11 },
    { title: 'Flavor on the Water', id: 12 },
    { title: 'Fortune Star Chinese Restaurant', id: 13 },
    { title: "Fuzzy's Fries", id: 14 },
    { title: 'Governors Pub & Eatery', id: 15 },
    { title: 'Hong Fa', id: 16 },
    { title: "Huang's Restaurant", id: 17 },
    { title: 'Island Greek Donair', id: 18 },
    { title: "Kai Ping's Restaurant & Lounge", id: 19 },
    { title: "Kay's Kozy Korner Restaurant & Pizza", id: 20 },
    { title: "Kenny's Pizza", id: 21 },
    { title: "Kiju's", id: 22 },
    { title: "Kiju's Chicken & Deli", id: 23 },
    { title: 'Lebanese Flower', id: 24 },
    { title: "Louann's Cafe", id: 25 },
    { title: 'Maple Leaf Restaurant & Music Room Lounge', id: 26 },
    { title: 'Napoli Pizzeria', id: 27 },
    { title: 'New Moon Restaurant', id: 28 },
    { title: 'No Quarter Deli & Market', id: 29 },
    { title: 'The Old Triangle Irish Alehouse', id: 30 },
    { title: 'The Olive Tree Pizzeria Bistro', id: 31 },
    { title: 'Peking Restaurant', id: 32 },
    { title: 'Pier Deli and Restaurant', id: 33 },
    { title: 'SaltSpray Restaurant', id: 34 },
    { title: 'Sami Pizza and Kebabs', id: 35 },
    { title: "Simeon's Family Restaurant", id: 36 },
    { title: 'Steel City Sports Bar', id: 37 },
    { title: 'Tasty Treat Drive-Ins', id: 38 },
    { title: 'Trio Restaurant', id: 39 },
    { title: 'Ugly Mug Cafe and Emporium', id: 40 },
    { title: 'Wentworth Perk', id: 41 },
    { title: "Zana's Diner", id: 42 },
    { title: "Ziggy's Pub & Grill", id: 43 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
