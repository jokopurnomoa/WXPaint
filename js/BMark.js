/**
 * Created with JetBrains PhpStorm.
 * User: JOKO PURNOMO A
 * Date: 5/30/14
 * Time: 7:07 AM
 * To change this template use File | Settings | File Templates.
 */

BMark = {

    startTime : 0,
    endTime : 0,

    microtime : function(get_as_float) {
        //  discuss at: http://phpjs.org/functions/microtime/
        // original by: Paulo Freitas
        //   example 1: timeStamp = microtime(true);
        //   example 1: timeStamp > 1000000000 && timeStamp < 2000000000
        //   returns 1: true

        var now = new Date().getTime() / 1000;
        var s = parseInt(now, 10);

        return (get_as_float) ? now : (Math.round((now - s) * 1000) / 1000) + ' ' + s;
    },

    start : function(){
        this.startTime = this.microtime(true);
    },

    getTime : function(dec){
        this.endTime = this.microtime(true);
        return (this.endTime - this.startTime).toFixed(dec);
    }

};