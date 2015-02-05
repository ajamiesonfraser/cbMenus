angular.module('starter.controllers', [])

.controller('restaurantsCtrl', function($scope) {
      $scope.data = {};

      $scope.restaurants = [
    { title: "Amedeo's Italian Bistro", id: 1, type: "Mediterranean"},
    { title: 'Black Diamond Bar & Grill', id: 2, type:"Pub" },
    { title: 'Bonnie Prince', id: 3, type:"Pub" },
    { title: 'Casino Nova Scotia', id: 4, type: "Diner" },
    { title: 'Crown & Moose Pub', id: 5, type:"Pub" },
    { title: "Daniel's Pub", id: 6, type: "Pub" },
    { title: "Doktor Luke's", id: 7, type:"Cafe"},
    { title: 'Downtown Nutrition', id: 8, type: "" },
    { title: 'Embers Southern Barbeque', id: 9, type: "Pub" },
    { title: 'Flavor 19', id: 10, type:"Modern" },
    { title: 'Flavor Downtown', id: 11, type:"Modern" },
    { title: 'Flavor on the Water', id: 12, type:"Modern" },
    { title: 'Fortune Star Chinese Restaurant', id: 13, type:"Chinese" },
    { title: "Fuzzy's Fries", id: 14, type:"Chipwagon" },
    { title: 'Governors Pub & Eatery', id: 15, type:"Pub" },
    { title: 'Hong Fa', id: 16, type:"Chinese" },
    { title: "Huang's Restaurant", id: 17, type:"Chinese" },
    { title: 'Island Greek Donair', id: 18, type:"Mediterranean" },
    { title: "Kai Ping's Restaurant & Lounge", id: 19, type:"Chinese"},
    { title: "Kay's Kozy Korner Restaurant & Pizza", id: 20, type:"Diner" },
    { title: "Kenny's Pizza", id: 21, type:"Pizza" },
    { title: "Kiju's", id: 22, type:"Pub" },
    { title: "Kiju's Chicken & Deli", id: 23, type:"Deli" },
    { title: 'Lebanese Flower', id: 24, type:"Mediterranean" },
    { title: "Louann's Cafe", id: 25, type:"Cafe" },
    { title: 'Maple Leaf Restaurant & Music Room Lounge', id: 26, type:"Diner" },
    { title: 'Napoli Pizzeria', id: 27, type:"Pizza" },
    { title: 'New Moon Restaurant', id: 28, type:"Chinese" },
    { title: 'No Quarter Deli & Market', id: 29, type:"Deli" },
    { title: 'The Old Triangle Irish Alehouse', id: 30, type:"Pub" },
    { title: 'The Olive Tree Pizzeria Bistro', id: 31, type:"Mediterranean" },
    { title: 'Peking Restaurant', id: 32, type:"Chinese" },
    { title: 'Pier Deli and Restaurant', id: 33, type:"Deli" },
    { title: 'SaltSpray Restaurant', id: 34, type:"Modern" },
    { title: 'Sami Pizza and Kebabs', id: 35, type:"Pizza" },
    { title: "Simeon's Family Restaurant", id: 36, type:"Diner" },
    { title: 'Steel City Sports Bar', id: 37, type:"Pub" },
    { title: 'Tasty Treat Drive-Ins', id: 38, type:"Take-out" },
    { title: 'Trio Restaurant', id: 39, type:"Modern" },
    { title: 'Ugly Mug Cafe and Emporium', id: 40, type:"Cafe" },
    { title: 'Wentworth Perk', id: 41, type:"Cafe" },
    { title: "Zana's Diner", id: 42, type:"Mediterranean" },
    { title: "Ziggy's Pub & Grill", id: 43, type:"Pub" }
  ];
      $scope.clearSearch = function() {
        $scope.data.searchQuery = '';
      };
})

    .controller('restaurantCtrl', function($scope, $stateParams) {
      $scope.restaurants = [
        { title: "Amedeo's Italian Bistro", id: 1, description: ""},
        { title: 'Black Diamond Bar & Grill', id: 2, description: "http://i.imgur.com/A3fIw5r.jpg"},
        { title: 'Bonnie Prince', id: 3, description: "http://i.imgur.com/A3fIw5r.jpg"},
        { title: 'Casino Nova Scotia', id: 4, description: "http://i.imgur.com/A3fIw5r.jpg" },
        { title: 'Crown & Moose Pub', id: 5, description: "http://i.imgur.com/A3fIw5r.jpg" },
        { title: "Daniel's Pub", id: 6, description: "http://i.imgur.com/A3fIw5r.jpg" },
        { title: "Doktor Luke's", id: 7, description: "http://i.imgur.com/A3fIw5r.jpg" },
        { title: 'Downtown Nutrition', id: 8, description: "http://i.imgur.com/A3fIw5r.jpg" },
        { title: 'Embers Southern Barbeque', id: 9, description: "http://i.imgur.com/A3fIw5r.jpg" },
        { title: 'Flavor 19', id: 10, description: "http://i.imgur.com/oEVc8uw.jpg" },
        { title: 'Flavor Downtown', id: 11, description: "http://cbflavor.com/downtown/wp-content/uploads/2011/11/Flavor_Downtown_Menu.jpg"},
        { title: 'Flavor on the Water', id: 12, description: "http://i.imgur.com/aaLprBt.jpg" },
        { title: 'Fortune Star Chinese Restaurant', id: 13, description: "http://i.imgur.com/A3fIw5r.jpg" },
        { title: "Fuzzy's Fries", id: 14, description: "http://i.imgur.com/A3fIw5r.jpg" },
        { title: 'Governors Pub & Eatery', id: 15, description: "http://governorseatery.com/wp/wp-content/uploads/2010/12/Governors_Dinner_Menu.pdf" },
        { title: 'Hong Fa', id: 16, description: "http://www.hongfarestaurant.ca/doc/menu.pdf" },
        { title: "Huang's Restaurant", id: 17, description: "http://i.imgur.com/A3fIw5r.jpg" },
        { title: 'Island Greek Donair', id: 18, description: "http://i.imgur.com/A3fIw5r.jpg" },
        { title: "Kai Ping's Restaurant & Lounge", id: 19, description: "http://i.imgur.com/9A5Icww.jpg" },
        { title: "Kay's Kozy Korner Restaurant & Pizza", id: 20, description: "http://www.capebretontakeout.com/restaurants/sydney/Kays%20Kozy%20Korner/ourmenu.pdf" },
        { title: "Kenny's Pizza", id: 21, description: "http://i.imgur.com/A3fIw5r.jpg" },
        { title: "Kiju's", id: 22, description: "http://i.imgur.com/3OOPl2X.jpg" },
        { title: "Kiju's Chicken & Deli", id: 23, description: "http://i.imgur.com/LuqtLIc.jpg" },
        { title: 'Lebanese Flower', id: 24, description: "http://i.imgur.com/A3fIw5r.jpg" },
        { title: "Louann's Cafe", id: 25, description: "http://i.imgur.com/A3fIw5r.jpg" },
        { title: 'Maple Leaf Restaurant & Music Room Lounge', id: 26, description: "http://i.imgur.com/A3fIw5r.jpg" },
        { title: 'Napoli Pizzeria', id: 27, description: "http://i.imgur.com/FOirxZp.jpg" },
        { title: 'New Moon Restaurant', id: 28, description: "http://cdn.ci1.yp.ca/f/1455/28/14552835ae_f.jpg" },
        { title: 'No Quarter Deli & Market', id: 29, description: "http://i.imgur.com/Gm9tcCI.jpg" },
        { title: 'The Old Triangle Irish Alehouse', id: 30, description: "http://i.imgur.com/A3fIw5r.jpg" },
        { title: 'The Olive Tree Pizzeria Bistro', id: 31, description: "http://i.imgur.com/A3fIw5r.jpg" },
        { title: 'Peking Restaurant', id: 32, description: "http://i.imgur.com/F1jJDLF.jpg" },
        { title: 'Pier Deli and Restaurant', id: 33, description: "http://i.imgur.com/A3fIw5r.jpg" },
        { title: 'SaltSpray Restaurant', id: 34, description: "http://i.imgur.com/A3fIw5r.jpg" },
        { title: 'Sami Pizza and Kebabs', id: 35, description: "http://i.imgur.com/A3fIw5r.jpg" },
        { title: "Simeon's Family Restaurant", id: 36, description: "http://i.imgur.com/A3fIw5r.jpg" },
        { title: 'Steel City Sports Bar', id: 37, description: "http://i.imgur.com/AiYMQvG.jpg" },
        { title: 'Tasty Treat Drive-Ins', id: 38, description: "http://i.imgur.com/A3fIw5r.jpg" },
        { title: 'Trio Restaurant', id: 39, description: "http://i.imgur.com/H2gC8dE.jpg" },
        { title: 'Ugly Mug Cafe and Emporium', id: 40, description: "http://twinsinfotech.com/uglymugcafe/catalog/view/theme/uglymug/image/menu.jpg" },
        { title: 'Wentworth Perk', id: 41, description: "http://i.imgur.com/A3fIw5r.jpg" },
        { title: "Zana's Diner", id: 42, description: "http://www.coastalbraid.com/uploads/1/0/4/1/10414523/7560233_orig.jpg" },
        { title: "Ziggy's Pub & Grill", id: 43, description: "http://i.imgur.com/R8uYwvj.jpg" }
      ];
      $scope.restaurant = $scope.restaurants[$stateParams.restaurantId-1]
});

