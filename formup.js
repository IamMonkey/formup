(function(_this) {
    'use strict';
    if(_this.formup){
        return
    }
    _this.formup=function(url,data){
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            if(xhr.upload){
                xhr.upload.onprogress = function(evt) {
                    var per = Math.floor(100 * evt.loaded / evt.total);
                    data.onprogress(per)
                };
            }
            xhr.onload=function(){
                var body = 'response' in xhr ? xhr.response : xhr.responseText;
                resolve(body)
            }
            xhr.open(data.method||'POST',url);
            xhr.send(data.body);
        })
    }
    export default _this.formup;
})(typeof _this !== 'undefined' ? _this : this);