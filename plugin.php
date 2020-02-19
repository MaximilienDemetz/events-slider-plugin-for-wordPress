<?php
/**
 * Plugin Name: events-slider — CCN
 * Plugin URI: https://github.com/maximiliendemetz/events-slider/
 * Description: This is a plugin to dynamically add and display your Events on a wordPress website. It was created with create-guten-block
 * Author:Maximilien DEMETZ, CCN
 * Version: 2.0.0
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
