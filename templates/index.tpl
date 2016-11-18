
<title>

    Clarive Icons</title>

<head>
    <link rel="stylesheet" type="text/css" href="/plugin/cla-icons-plugin/css/styles.css">
</head>

<body>
<header id="main-header">
    <div id="general">
        <a href="http://clarive.com/"><img id="logo" src="http://clarive.com/wp-content/uploads/2015/12/logo-clarive.png"></a><br>
        
    </div>
</header>
    <div id="cuerpo">
        <br>
        <br>
        <br>
        <b><p id="intro">Below you will see all the icons available in Clarive&#39;s database</p></b><br> 
        
        {{#folders}}
        <div id="route"><br><b>{{this.name}}:<br><br>
        </div><div id="container" >
        	{{#each this.icons}}
        	<div id="cuadro"><img id="icon" src="{{this.url}}" alt="{{this.fullName}}"><br>
        		<div id="icon-text" >{{this.name}}</div>
        	</div>
        	{{/each}}
        </div><br>
        {{/folders}}
        <div id="route"></div>
        <br><br><br>
    </div>


<footer id="footer" align="center">
            <div id="copyright" >
                <div id="footerContainer" >
                    <p id="pad"><a href="http://clarive.com/" style="color: #fff"><b>Copyright © Clarive Software, Inc. 2016</b></a></p><a href="#" style="color: #fff">
                    </a></div>
            </div>
</footer>
</body>
