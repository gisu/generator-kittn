<!doctype html>
<html class="no-js" <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <title><?php wp_title( '|', true, 'right' ); ?></title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link rel="profile" href="http://gmpg.org/xfn/11">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/<%= projectcssfilename %>.css">
  <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/assets/system/favicon.png">
  <!-- Browser Tab Bar Color -->
  <meta name="theme-color" content="<%= projectthemecolor %>">
  <meta name="msapplication-navbutton-color" content="<%= projectthemecolor %>">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
  <div class="appWrapper">
    <div class="appHeader">
      PAGE HEADER
    </div>
