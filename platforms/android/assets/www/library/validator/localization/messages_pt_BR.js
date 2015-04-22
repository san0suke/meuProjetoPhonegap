(function (factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery", "../jquery.validate"], factory);
    } else {
        factory(jQuery);
    }
}(function ($) {

    /*
     * Translated default messages for the jQuery validation plugin.
     * Locale: PT (Portuguese; português)
     * Region: BR (Brazil)
     */
    $.extend($.validator.messages, {
        required: txt.validator.required,
        remote: txt.validator.remote,
        email: txt.validator.email,
        url: txt.validator.url,
        date: txt.validator.date,
        dateISO: txt.validator.dateISO,
        number: txt.validator.number,
        digits: txt.validator.digits,
        creditcard: txt.validator.creditcard,
        equalTo: txt.validator.equalTo,
        extension: txt.validator.extension,
        maxlength: $.validator.format(txt.validator.maxlength),
        minlength: $.validator.format(txt.validator.minlength),
        rangelength: $.validator.format(txt.validator.rangelength),
        range: $.validator.format(txt.validator.range),
        max: $.validator.format(txt.validator.max),
        min: $.validator.format(txt.validator.min),
        nifES: txt.validator.nifES,
        nieES: txt.validator.nieES,
        cifEE: txt.validator.cifEE,
        postalcodeBR: txt.validator.postalcodeBR
    });

}));