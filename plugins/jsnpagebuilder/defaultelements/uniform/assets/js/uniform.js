/**
 * @version    $Id$
 * @package    JSN_PageBuilder
 * @author     JoomlaShine Team <support@joomlashine.com>
 * @copyright  Copyright (C) 2012 JoomlaShine.com. All Rights Reserved.
 * @license    GNU/GPL v2 or later http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Websites: http://www.joomlashine.com
 * Technical Support:  Feedback - http://www.joomlashine.com/contact-us/get-support.html
 */

( function ($) {
    $(document).ready(function () {
        if ($('#form-preview-backend').val() == 1) {
            $('[type="submit"]').each(function () {
                $(this).attr('disabled','disabled');
            });
        }
    });
})(JoomlaShine.jQuery);