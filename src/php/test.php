<?
define("PAGE", "test");
require_once './includes/start.php';
?>



<div class="wrap">
    <div class="text view-children">
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>
            <b>TEST PAGE</b>
        </p>
        <p>&nbsp;</p>
        <? for ($i = 0; $i < 50; $i++) { ?>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non hic corporis, esse dolores ullam aperiam voluptatum quia molestiae corrupti eos magnam quibusdam inventore iste eveniet at suscipit laudantium? Deserunt, eum.</p>
        <? } ?>
    </div>
</div>



<? require_once './includes/end.php'; ?>