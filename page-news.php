<?php 
    get_header();
?>
 <section id="news">
            <div class="m-width">
                <div class="text-section">
                    <h1><span>News</span></h1>
                    <span>お知らせ</span>
                </div>
                <hr>
                <div class="news-main">
                    <?php
                        $args = array(
                            'post_type' => 'news',  // Use 'post' or a custom post type if applicable
                        );

                        $news_query = new WP_Query($args);

                        if ($news_query->have_posts()) : 
                            while ($news_query->have_posts()) : $news_query->the_post();
                        ?>
                                <!-- <a href="<?php the_permalink(); ?>" class="news-item">                                     -->
                                    <div class="row">
                                        <div>
                                            <div class="mark">お知らせ</div>
                                            <p><?php echo get_the_date('Y.m.d'); ?></p>
                                        </div>
                                        <div id="title"><?php the_title(); ?></div>                                       
                                        <p id="content">
                                            <?php echo wp_trim_words(get_the_excerpt(), 20, '...'); ?>  <!-- Trim words to 20, can adjust -->
                                        </p>
                                    </div>
                                <!-- </a> -->
                                <hr>
                                <?php
                                    endwhile;
                                    wp_reset_postdata();
                                else :
                                ?>
                    <div class="row">
                        <div>
                            <div class="mark">お知らせ</div>
                            <p>現在、お知らせはありません。</p>
                        </div>
                    </div>
                <?php endif; ?>
                    <br>
                </div>
            </div>
        </section>

<?php
    get_footer(); 
?>