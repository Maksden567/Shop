export function isWebp(){
    function isWebp(callback){
        let webP= new Image()
        webP.onload= webP.onerror = function(){
            callback(webP.height==2)
        }
        webP.src="data:image/jpeg;base64,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"

        testWebP(function(support){
            let className = support === true ? 'webp': 'no-webp';
            document.documentElement.classList.add(className)
        })
    }
}