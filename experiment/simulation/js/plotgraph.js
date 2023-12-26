/* Lab name: Experimental Biochemistry
Exp name: Kinetic characterization of protein-ligand binding by surface plasmon resonance (SPR)
File name: main.js
Developer: Prakriti Dhang */




document.getElementById('step7').addEventListener('click', function () {
	$('#alertModal').modal('show');
	$('.modal-body').text('Surface Plasmon Resonance (SPR) has been considered for single concentration of analyte');

	//document.getElementById("step6").disabled = false;
	const excelUrl = './plotdata/SPR_data_file.xlsx';

	fetch(excelUrl)
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.arrayBuffer();
		})
		.then(data => {
			const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });

			// Assuming the data is in the first sheet
			const sheetName = workbook.SheetNames[0];
			const worksheet = workbook.Sheets[sheetName];

			// Convert worksheet to JSON
			const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

		
			//const dataPoints = jsonData.map(row => ({ x: parseFloat(row[0]), y: parseFloat(row[4]) }));

			const dataSets = [];
		
			
			for (let i = 1; i < jsonData[0].length; i++) {
				const dataset = {
				  type: 'spline',
				  name: `${jsonData[0][4]}μM`, // Assuming the first row contains column headers
				  dataPoints: jsonData.slice(1).map(row => ({ x: parseFloat(row[0]), y: parseFloat(row[4]) }))
				};
				dataSets.push(dataset);
			  }
			
			// Plot the data using CanvasJS with spline
			plotData(dataSets);


		})
		.catch(error => {
			console.error('Error fetching the file:', error.message);
		});

});


// Function to plot data using CanvasJS with spline
function plotData(dataSets) {
	const chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		title: {
			text: "Response (2μM) Vs Time "
		},
		axisY: {
			title: "Response (2μM)",

			gridThickness: 0

		},
		axisX: {
			title: "Time (s)",


		},

		data: dataSets // <-- Correct placement

			// Individual data points with correct syntax
		

	});

	chart.render();
	
}


























/*function dataplot(){
    

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,  
	title:{
		text: "Protein Graph view"
	},
	axisY: {
		title: "A (mAU)",
	  
		valueFormatString: "#0,,.",
		//suffix: "mn",
		//stripLines: [{
		//	value: 3366500,
		//	label: "Average"
		//}]
	},
	axisX: {
		title: "Volume (ml)",
		//valueFormatString: "#0,,.",
	},
	data: [{
		yValueFormatString: "",
		xValueFormatString: "",
		type: "spline",
		dataPoints: [
			{x: 2, y: 2506000},
			{x: 3, y: 2506000},
			{x: 4, y: 2506000},
			{x:5, y: 2506000},
			{x: 6, y: 2506000},
			{x: 7, y: 2506000},
			{x: 8, y: 1872000},
			{x: 9, y: 2140000},
			{x: 10, y: 7289000},
			{x: 11, y: 4830000},
			{x: 12, y: 2009000},
			{x: 13, y: 2840000},
			{x: 14, y: 2396000},
			{x: 15, y: 1613000},
			{x: 16, y: 2821000},
			{x:17, y: 2000000}	
		]
	}]
});
chart.render();

}*/
