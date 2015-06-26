/**
 * Created by JDW27B1 on 3/20/2015.
 */
var express = require('express');
var router = express.Router();

/* GET Sonar listing. */
router.get('/', function(req, res) {
    var response = [
        {
            "name" : "Store Merchandising",
            "image" : "images/storeMerchandising2.svg",
            "color": "#60a917"
        },
        {
            "name" : "Store Inventory",
            "image" : "images/storeInventory2.svg",
            "color": "#ff2d19"
        },
        {
            "name" : "Reverse Logistics",
            "image" : "images/reverseLogistics2.svg",
            "color": "#bf5a15"
        },
        {
            "name" : "Building Services",
            "image" : "images/buildingServices2.svg",
            "color": "#76608a"
        },
        {
            "name" : "Asset Protection",
            "image" : "images/assetProtection.svg",
            "color": "#1b6eae"
        },
        {
            "name" : "Store Customer Service",
            "image" : "images/customerService2.svg",
            "color": "#a4c400"
        },
        {
            "name" : "Repair",
            "image" : "images/repair2.svg",
            "color": "#825a2c"
        },
        {
            "name" : "Store Device Platform",
            "image" : "images/StoreDevicePlatform.svg",
            "color": "#9a1616"
        }
    ];
    res.send(response);
});

module.exports = router;
