<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mentor Driving School</title>    
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/assets/css/index.css">    
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/assets/css/responsive.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <link rel="icon" type="image/x-icon" href="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/favicon.ico">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css">
    <link rel="stylesheet" href="https://use.typekit.net/uuy7iff.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            new WOW({
                boxClass: 'wow',
                animateClass: 'wow',
                offset: 100,
                mobile: true,
                live: true
            }).init();
        });
    </script>
    <?php wp_head(); ?> 
</head>
<body> 
     
    <header>
        <div id="navbar" class="nav-down" >
            <div class="max-width">
                <div class="logo wow animate__fadeIn" data-wow-duration="1s">
                    <a href="<?php echo home_url(); ?>">
                        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/logomark.svg" alt="logo.svg">
                    </a>
                </div>
                <div class="menus">
                    <ul class="menu wow animate__fadeIn" data-wow-delay="0.2s">
                        <li><a href="<?php echo home_url(); ?>">フロントページ</a></li>
                        <li><a href="<?php echo site_url();?>/parents">保護者の方へ</a></li>
                        <li><a href="<?php echo home_url(); ?>#obtain">免許取得の流れ</a></li>                    
                        <li><a href="<?php echo home_url(); ?>#enroll">ご入校までの流れ</a></li>
                        <li><a href="<?php echo home_url(); ?>#map">支店一覧</a></li>
                        <li><a href="<?php echo home_url(); ?>#reason">選ばれる理由</a></li>
                    </ul>
                    <div class="menu-btn wow animate__flipInX" data-wow-duration="1.5s">
                        <li><a href="<?php echo site_url();?>/companyinfo" >会社概要</a></li>
                    </div>
                    <div class="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <main>