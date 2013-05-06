function onSubmit(){
    var beerOz = inputForm.elements["volume"].value;
    var beerAlcPercent = inputForm.elements["alcPercent"].value / 100.0;

    var vodkaOz = 1.50;
    var vodkaAlcPercent = .4;
    var vodkaTotalAlc = vodkaOz * vodkaAlcPercent;

    var beerTotalAlc = beerOz * beerAlcPercent;

    var numShots = parseFloat(beerTotalAlc / vodkaTotalAlc).toFixed(2);
    document.getElementById("numShotsResult").innerHTML = numShots + " vodka shots (1.5 oz, 40%).</br>";
}