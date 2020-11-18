<?php include "includes/header.php";?>

<h1>Hola</h1>

<div id="app">
    {{ message }}
</div>
<div id="app-2">
    <span v-bind:title="message">
        Hover your mouse over me for a few seconds
        to see my dynamically bound title!
    </span>
</div>
<div>
    <button id="button" aria-describedby="tooltip">My button</button>
    <div id="tooltip" role="tooltip">
        My tooltip
        <div id="arrow" data-popper-arrow></div>
    </div>
</div>


<?php include "includes/footer.php";?>