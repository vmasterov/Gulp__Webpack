<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Gulp, Webpack (es7, es modules), BrowserSync build</title>

    <link rel="stylesheet" href="/css/gulp-libs.css">
    <link rel="stylesheet" href="/css/gulp-main.css">
</head>

<body>
<div class="container">

    <!-- Divs background -->
    <section class="divs">
        <div class="row">
            <div class="col-md-12">
                <h1 class="test-header">Gulp, Webpack (es7, es modules), BrowserSync build</h1>

                <?php $lang = "PHP"; ?>

                <h2 class="test-header">Version: <strong><?= $lang ?></strong></h2>
                <hr>
                <h2 class="test-header">Divs background</h2>
            </div>
        </div>

        <div class="row">
            <div class="col-md-3">
                <div class="test-image test-images test-images-0"></div>
            </div>

            <div class="col-md-3">
                <div class="test-image test-images  test-images-1"></div>
            </div>

            <div class="col-md-3">
                <div class="test-image test-upload test-upload-0"></div>
            </div>

            <div class="col-md-3">
                <div class="test-image test-upload test-upload-1"></div>
            </div>
        </div>
    </section>


    <!-- Images -->
    <section class="images">
        <div class="row">
            <div class="col-md-12">
                <h2 class="test-header">Images</h2>
            </div>
        </div>

        <div class="row">
            <div class="col-md-3">
                <img src="images/0.jpg" alt="">
            </div>

            <div class="col-md-3">
                <img src="images/sub-folder/1.jpg" alt="">
            </div>

            <div class="col-md-3">
                <img src="upload/0.jpg" alt="">
            </div>

            <div class="col-md-3">
                <img src="upload/1.jpg" alt="">
            </div>
        </div>
    </section>

</div>

<script src="/js/gulp-libs.js"></script>
<script src="/js/gulp-main.js"></script>
</body>

</html>