#const-text

const-text is a custom tag used to store a piece of text that will be used in more than one place in your html file.

Usage:

''''html
	<body>
		<!-- Define the text. Notice the def after the text. -->
		<const-text id="Person1Bio" def>
			Person 1 is really ... blah blah.
		</const-text>
		
		<!-- Inside a div it is rendered as a tool tip -->
		<div class="team-member">
			Person1
			<const-text id="DiaferiaBio"></const-text>
		</div>

		<!-- If any other tag encloses it, then it is rendered as plain text or any style you might add. -->
		<span>
			<const-text id="DiaferiaBio"></const-text>
		</span>
		
		<!-- Include the javascript file. -->
		<script src="const-text.js"></script>
	</body>
