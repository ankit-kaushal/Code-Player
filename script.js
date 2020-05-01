function updateOutput() {
		$("iframe").contents().find("html").html("<html><head><style type='text/css'>"+$("#cssPanel").val()+"</style></head><body>"+$("#htmlPanel").val()+"</body></html>");
		document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
		
	}
	
	$(".toggleButton").hover(function(){
		$(this).addClass("highlightedButton");
	}, function(){
		$(this).removeClass("highlightedButton");
	});

	$(".toggleButton").click(function(){
		$(this).toggleClass("active");

		$(this).removeClass("highlightedButton");

		var panelId = $(this).attr("id")+"Panel";
		$("#"+panelId).toggleClass("hidden");
		var noOfActivePanels=4-$(".hidden").length;
		$(".panel").width(($(window).width()/noOfActivePanels)-10);
	})

	$(".panel").height($(window).height()-$("#header").height());

	$(".panel").width(($(window).width()/2)-10);

	updateOutput();

	$("textarea").on('change keyup paste', function(){
		updateOutput();
	});

/*	function download(){
    var text = document.getElementById("htmlPanel").value;
    text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = "my-filename.txt";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; // just to be safe!
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
 }

 function saveTextAsFile(textToWrite, fileNameToSaveAs)
    {
    	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'}); 
    	var downloadLink = document.createElement("a");
    	downloadLink.download = fileNameToSaveAs;
    	downloadLink.innerHTML = "Download File";
    	if (window.webkitURL != null)
    	{
    		// Chrome allows the link to be clicked
    		// without actually adding it to the DOM.
    		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    	}
    	else
    	{
    		// Firefox requires the link to be added to the DOM
    		// before it can be clicked.
    		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    		downloadLink.onclick = destroyClickedElement;
    		downloadLink.style.display = "none";
    		document.body.appendChild(downloadLink);
    	}
    
    	downloadLink.click();
    }*/