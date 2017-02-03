<?php
/**
 * Craft-Multi-Environment (CMS)
 * @author    nystudio107
 * @copyright Copyright (c) 2017 nystudio107
 * @link      https://nystudio107.com/
 * @package   craft-multi-environment
 * @since     1.0.4
 * @license   MIT
 *
 * This file should be renamed to '.env.php' and it should reside in your root
 * project directory.  Add '/.env.php' to your .gitignore.  See below for production
 * usage notes.
 */

$craftenv_vars = array(
   // The Craft environment we're running in ('local', 'staging', 'live', etc.).
  'CRAFT_ENVIRONMENT' => 'SETUP',
  'DB_HOST' => 'SETUP',
  'DB_NAME' => 'SETUP',
  'DB_USER' => 'SETUP',
  'DB_PASS' => 'SETUP',
  // Path configs
  'SITE_URL' => (isset($_SERVER['HTTPS']) ? 'https://' : 'http://') . $_SERVER['HTTP_HOST'] . '/',
  'BASE_URL' => (isset($_SERVER['HTTPS']) ? 'https://' : 'http://') . $_SERVER['HTTP_HOST'] . '/',
  'BASE_PATH' => realpath(dirname(__FILE__)) . '/public/',
);
// Set all of the .env values, auto-prefixed with `CRAFTENV_`
foreach ($craftenv_vars as $key => $value) {
  putenv("CRAFTENV_$key=$value");
}