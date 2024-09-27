<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Grid Layout</title>
  <!-- Bootstrap CSS -->
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
  <style>
    .box {
      background-color: lightblue;
      border: 1px solid #333;
      height: 150px;
    }
    .large-box {
      background-color: violet;
      border: 1px solid #333;
      height: 100px;
    }
    .small-box {
      background-color: lightcoral;
      border: 1px solid #333;
      height: 70px;
    }
    .space {
      margin-top: 20px;
    }
  </style>
</head>
<body>

<div class="container">
  <!-- Top Section -->
  <div class="row space">
    <div class="col-12 box"></div>
  </div>

  <!-- Middle Section (3 boxes on desktop, stacked on mobile) -->
  <div class="row space">
    <div class="col-md-4 col-12 box"></div>
    <div class="col-md-4 col-12 box"></div>
    <div class="col-md-4 col-12 box"></div>
  </div>

  <!-- Large Section below middle -->
  <div class="row space">
  <div class="col-md-4 col-12 box"></div>
  <div class="col-md-4 col-12 box"></div>
  </div>

  <!-- Bottom Section (3 small boxes, centered on mobile) -->
  <div class="row justify-content-center space">
    <div class="col-md-4 col-4 small-box"></div>
    <div class="col-md-4 col-4 small-box"></div>
    <div class="col-md-4 col-4 small-box"></div>
  </div>
</div>

<!-- Bootstrap JS and dependencies -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>
