export default function($target) {
    /*
    if (!window.FileReader)
        return;

    const dragOverClass = 'drag-over';

    $(document).on('dragover', function(e) {
        $target.addClass(dragOverClass);
        e.preventDefault();
    });

    $(document).on('dragend', function(e) {
        $target.removeClass(dragOverClass);
        e.preventDefault();
    });

    $(document).on('drop', function(e) {
        $target.removeClass(dragOverClass);
        handleDrop(e.originalEvent.dataTransfer.files[0]);
        e.preventDefault();
        e.stopPropagation();
    });*/
}

function handleDrop(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        console.log(e.target);
    };
    reader.readAsText(file);
}
