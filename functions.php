<?php

// Add theme support for post thumbnails
add_action('after_setup_theme', function() {
    add_theme_support('post-thumbnails');
});

// Register Customer custom post type
add_action('init', function() {
    register_post_type('customer', array(
        'labels' => array(
            'name' => 'Customers',
            'singular_name' => 'Customer',
        ),
        'public' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
        'menu_icon' => 'dashicons-groups',
        'has_archive' => true,
    ));
}); 