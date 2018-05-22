function dynamicallyLoadScript(url) {

    // I wanted to be able to load an external JS file - the JS content from CanvasJS. See "Dynamic Script Loading" in:
    // https://stackoverflow.com/questions/950087/how-do-i-include-a-javascript-file-in-another-javascript-file

    var script = document.createElement("script"); // Make a script DOM node
    script.src = url; // Set it's src to the provided URL

    document.head.appendChild(script); // Add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

var dynamicGraph = function () {

    // CanvasJS requires an HTML <div> element, we refer to as "chartContainer" to operate upon. 
    // Instead of doing this in an HBS file, I wanted to see how to do this with just javascript - and you can:
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement and also
    // https://www.w3schools.com/jsref/met_element_setattribute.asp
    var newDiv = document.createElement("div");
    newDiv.setAttribute("id", "chartContainer");
    newDiv.setAttribute("style", "height: 300px; width: 100%;");

    // dynamicallyLoadScript("https://canvasjs.com/assets/script/canvasjs.min.js");
    dynamicallyLoadScript("/canvasjs/canvasjs.min.js");

    var dataPoints = [{ y: 10 }, { y: 13 }, { y: 18 }, { y: 20 }, { y: 17 }];

    var chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: "Dynamic Data"
        },
        data: [{
            type: "spline",
            dataPoints: dataPoints
        }
        ]
    });

    chart.render();

    // See https://canvasjs.com/html5-javascript-dynamic-chart/ for example this was pulled from.
    var yVal = 15, updateCount = 0;
    var updateChart = function () {

        yVal = yVal + Math.round(5 + Math.random() * (-5 - 5));
        updateCount++;

        dataPoints.push({
            y: yVal
        });

        chart.options.title.text = "Update " + updateCount;
        chart.render();

    };

    // update chart every second
    setInterval(function () { updateChart(); }, 1000);
};

dynamicGraph();