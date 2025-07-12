urlmuangay="/2016/12/mua-ngay.html",urlgiohang="/p/gio-hang.html",urlnewimg="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6MLk_01qI7bbmaL7UkmJXOF9WlRIgBaTooLANtJoVHEBzYHA0o9b8bksfItRbBuVnSEUf4fn85AJWclpj53AIbv2i0-S-UEpQtMnWn-DBb6dUFpUC7mUIJyIBVoOjM5ckYTfx4qtGW1KZ/s29/new.gif",newimgwidth=29,newimgheight=19,sumtitle=35,numposts1=6,numposts5=5,newssumtitle=43,newssumposts=370,labelsumtitle=35,labelsumtitle2=20,renewstitle="Tin tức liên quan",relatedtitle="Sản phẩm liên quan";var purl=location.href,fb_href=purl.substring(0,purl.indexOf(".html")+5),fbcm='<div class="fb-comments" data-href="'+fb_href+'" data-num-posts="12" data-width="100%" colorscheme="light"></div>';function removeHtmlTag(e,t){for(var i=e.split("<"),n=0;n<i.length;n++)-1!=i[n].indexOf(">")&&(i[n]=i[n].substring(i[n].indexOf(">")+1,i[n].length));return(i=i.join("")).substring(0,t-1)}function flashsalerun(e){const[t,i,n]=e.split("/").map(Number),a=new Date(n,i-1,t).getTime(),r=setInterval((function(){const e=(new Date).getTime(),t=a-e,i=Math.floor(t/864e5),n=Math.floor(t%864e5/36e5),s=Math.floor(t%36e5/6e4),l=Math.floor(t%6e4/1e3);document.getElementById("days").innerHTML=i,document.getElementById("hours").innerHTML=n,document.getElementById("minutes").innerHTML=s,document.getElementById("seconds").innerHTML=l,console.log(t),t<0&&(clearInterval(r),document.getElementById("countdown").innerHTML="Flash Sale Đã Kết Thúc!",document.getElementsByClassName("discount")[0].style.display="none",window.stopgiamgia=0)}),1e3)}function tinhngay(e){const t=new Date(e),i=new Date-t;return daysDifference=Math.floor(i/864e5)}function displayRandomNumber(){const e=JSON.parse(localStorage.getItem("randomNumberData"))||{},t=e.lastUpdated?new Date(e.lastUpdated):null,i=new Date;if(!t||i-t>=30e4){const e=Math.floor(7*Math.random());return localStorage.setItem("randomNumberData",JSON.stringify({number:e,lastUpdated:i})),e}return randomIndex=e.number,randomIndex}function chitietsp(e,t,i){window.stopgiamgia=1;e.substring(7);var n="",a=(e=document.getElementById(e)).getElementsByTagName("img");1<=a.length&&(n='<img src="'+a[0].src+'"/>');var r=e.innerHTML.substring(e.innerHTML.indexOf("[giacu]")+7,e.innerHTML.indexOf("[/giacu]")),s=e.innerHTML.substring(e.innerHTML.indexOf("[giaban]")+8,e.innerHTML.indexOf("[/giaban]"));giavalue=r.replace(/,/gi,""),giagocvalue=s.replace(/,/gi,"");var l=parseInt(s.replace(/,/g,""));if(-1!=e.innerHTML.indexOf("[giacu]"))r=""+r,((parseInt(giagocvalue)-parseInt(giavalue))/parseInt(giagocvalue)*100).toFixed(0);else r="","0%";e.innerHTML.substring(e.innerHTML.indexOf("[tomtat]")+8,e.innerHTML.indexOf("[/tomtat]"));var o=e.innerHTML.substring(e.innerHTML.indexOf("[chitiet]")+9,e.innerHTML.indexOf("[/chitiet]"));e.innerHTML.substring(e.innerHTML.indexOf("[hot]")+5,e.innerHTML.indexOf("[/hot]"));tintuc=e.innerHTML.substring(e.innerHTML.indexOf("[tintuc]")+8,e.innerHTML.indexOf("[/tintuc]")),kythuat=-1!=e.innerHTML.indexOf("[kythuat]")?e.innerHTML.substring(e.innerHTML.indexOf("[kythuat]")+9,e.innerHTML.indexOf("[/kythuat]")):"Không có thông số kỹ thuật cho sản phẩm này",motangan=-1!=e.innerHTML.indexOf("[motangan]")?e.innerHTML.substring(e.innerHTML.indexOf("[motangan]")+10,e.innerHTML.indexOf("[/motangan]")):"";-1!=e.innerHTML.indexOf("[hot]")&&e.innerHTML.substring(e.innerHTML.indexOf("[hot]")+5,e.innerHTML.indexOf("[/hot]"));danhgia=-1!=e.innerHTML.indexOf("[danhgia]")?e.innerHTML.substring(e.innerHTML.indexOf("[danhgia]")+9,e.innerHTML.indexOf("[/danhgia]")):"Đang cập nhật",daban=-1!=e.innerHTML.indexOf("[daban]")?e.innerHTML.substring(e.innerHTML.indexOf("[daban]")+7,e.innerHTML.indexOf("[/daban]")):"",daban_txt="",""!=daban&&(daban_txt="<p class='inventory'>Đã bán: "+tinhngay(daban)+"</p>"),tinhtrang=-1!=e.innerHTML.indexOf("[tinhtrang]")?e.innerHTML.substring(e.innerHTML.indexOf("[tinhtrang]")+11,e.innerHTML.indexOf("[/tinhtrang]")):"Đang cập nhật",flashsale=-1!=e.innerHTML.indexOf("[flashsale]")?e.innerHTML.substring(e.innerHTML.indexOf("[flashsale]")+11,e.innerHTML.indexOf("[/flashsale]")):"14/11/2024",giamgia=-1!=e.innerHTML.indexOf("[giamgia]")?e.innerHTML.substring(e.innerHTML.indexOf("[giamgia]")+9,e.innerHTML.indexOf("[/giamgia]")):"";var c={};giamgia&&giamgia.split(",").forEach((function(e){var[t,i]=e.split("--");c[t.trim()]=i.trim()}));var d="";for(var u in console.log(c),n=0,k=displayRandomNumber(),console.log(k),c)if(c.hasOwnProperty(u)){if(n==k){const e=(l*(1-c[u]/100)).toLocaleString("vi-VN",{style:"currency",currency:"VND"});d+="Nhập "+u+" sẽ giảm giá "+c[u]+"% còn "+e+"<br>"}n+=1}flashshow="",giamgia&&(flashshow='<div id="countdown-timer">  <p>Flash Sale Kết Thúc Sau:</p>  <div id="countdown">    <span class="time-box"><span id="days">00</span><span class="label">Ngày</span></span>    <span class="time-box"><span id="hours">00</span><span class="label">Giờ</span></span>    <span class="time-box"><span id="minutes">00</span><span class="label">Phút</span></span>    <span class="time-box"><span id="seconds">00</span><span class="label">Giây</span></span>  </div>  <div class="discount">'+d+"</div></div>");var m='<div class="discount-code"><label for="discount-input">Mã giảm giá:</label><input type="text" id="discount-input" placeholder="Nhập mã giảm giá"><button onclick="applyDiscount('+l+')">Áp dụng</button></div><p id="discount-message" style="color: red; display: none;">Mã giảm giá không hợp lệ!</p>';window.applyDiscount=function(e){if(console.log(window.stopgiamgia),1==window.stopgiamgia){var t=document.getElementById("discount-input").value.trim();if(c.hasOwnProperty(t)){var i=parseFloat(c[t]),n=(e*(1-i/100)).toLocaleString("vi-VN",{style:"currency",currency:"VND"}).replace(/\./g,",");document.querySelector(".item_price").innerText=n;var a=document.querySelector(".item_name"),r=a.getAttribute("data-original-name")||a.innerText;a.setAttribute("data-original-name",r),a.innerText=r+" - Mã giảm giá "+t+" ("+i+"%, giá gốc "+e.toLocaleString("vi-VN",{style:"currency",currency:"VND"}).replace(/\./g,",")+")"}document.getElementById("discount-message").style.display="none"}else document.getElementById("discount-message").style.display="block"},km=-1!=e.innerHTML.indexOf("[km]")?e.innerHTML.substring(e.innerHTML.indexOf("[km]")+4,e.innerHTML.indexOf("[/km]")):"Đang cập nhật ....",km=-1!=e.innerHTML.indexOf("[km]")?e.innerHTML.substring(e.innerHTML.indexOf("[km]")+4,e.innerHTML.indexOf("[/km]")):"Đang cập nhật ....",chinhsach=-1!=e.innerHTML.indexOf("[chinhsach]")?e.innerHTML.substring(e.innerHTML.indexOf("[chinhsach]")+11,e.innerHTML.indexOf("[/chinhsach]")):"Đang cập nhật";var p=e.getElementsByTagName("img").length,h='<div class="item product-thumb"><a href="javascript:void(0)" data-image="'+a[0].src+'" data-zoom-image="'+a[0].src+'"><img alt="'+t+'" data-image="'+a[0].src+'" src="'+a[0].src+'" ></a></div>';p>1&&(h+='<div class="item product-thumb"><a href="javascript:void(0)" data-image="'+a[1].src+'" data-zoom-image="'+a[0].src+'"><img alt="'+t+'" data-image="'+a[1].src+'" src="'+a[1].src+'" ></a></div>\t'),p>2&&(h+='<div class="item product-thumb"><a href="javascript:void(0)" data-image="'+a[2].src+'" data-zoom-image="'+a[2].src+'"><img alt="'+t+'" data-image="'+a[2].src+'" src="'+a[2].src+'" ></a></div>\t'),p>3&&(h+='<div class="item product-thumb"><a href="javascript:void(0)" data-image="'+a[3].src+'" data-zoom-image="'+a[3].src+'"><img alt="'+t+'" data-image="'+a[3].src+'" src="'+a[3].src+'" ></a></div>\t');p=e.getElementsByTagName("img").length;var g='<li class="item product-thumb"><a href="javascript:void(0)" data-image="'+a[0].src+'" data-zoom-image="'+a[0].src+'"><img alt="Thép hình" data-image="'+a[0].src+'" src="'+a[0].src+'" ></a></li>';p>1&&(g+='<<li class="item product-thumb"><a href="javascript:void(0)" data-image="'+a[1].src+'" data-zoom-image="'+a[1].src+'"><img alt="Thép hình" data-image="'+a[1].src+'" src="'+a[1].src+'" ></a></li>'),p>2&&(g+='<li class="item product-thumb"><a href="javascript:void(0)" data-image="'+a[2].src+'" data-zoom-image="'+a[2].src+'"><img alt="Thép hình" data-image="'+a[2].src+'" src="'+a[2].src+'" ></a></li>\t'),p>3&&(g+='<li class="item product-thumb"><a href="javascript:void(0)" data-image="'+a[3].src+'" data-zoom-image="'+a[3].src+'"><img alt="Thép hình" data-image="'+a[3].src+'" src="'+a[3].src+'" ></a></li>\t'),e.innerHTML=-1!=e.innerHTML.indexOf("[tintuc]")?"<h1>"+t+'</h1><div class="content-page"><div class="clearfix"><p class="time pull-left">Đăng bởi:QTV</p><div class="socials pull-right"><div class="fb-like" data-layout="button" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div></div></div><div class="body-content">'+tintuc+"</div></div>":'<div  id="wrapper-detail" class="simpleCart_shelfItem"><div class="row"><a id="thumb" class="item_thumb" style="display:none"><img  src="'+a[0].src+'"></a><div class="col-sm-6 col-xs-12"><div id="surround"><div class="img-product"><img class=" product-image-feature hidden-xs" src="'+a[0].src+'" alt="'+t+'"></div><div class="thumb-mt20"><div id="sliderproduct" class="clearfix hidden-xs">'+h+'</div><div id="sliderproduct-mobile" class="visible-xs"><div class="slider-container "><ul class="slides clearfix">'+g+'</ul></div></div></div></div></div><div class="col-sm-6 col-xs-12 fix-mobile"><div class="product-title"><h1 class="item_name">'+t+'</h1></div><div class="product-price" id="price-preview"><span class="item_price">'+s+'₫</span></div><p class="inventory">Tình trạng: <strong>'+tinhtrang+"</strong></p>"+daban_txt+'<div id="add-item-form" action="/cart/add" method="post" class="variants clearfix"><div class="select-wrapper"><label>Số lượng : </label><input id="quantity" type="number" name="quantity" min="1" value="1" class="item-quantity item_quantity" /></div><div class="actions-btn"><a href="'+urlgiohang+'"><button id="add-to-cart"   class=" btn-add-cart btn-fix item_add" name="add"> Mua ngay </button></a></div></div> '+m+flashshow+'<div class="bonus"><p class="title">Khuyến mãi</p><ul class="bonus-list">'+km+'</ul></div></div><div class="col-xs-12"><div class="product-comment"><h4><span>Mô tả</span></h4><div id="mota"><div class="product-description-wrapper">'+o+"</div></div></div></div></div></div>",flashsalerun(flashsale)}

// DÁN TOÀN BỘ ĐOẠN CODE NÀY VÀO TEMPLATE ĐỂ THAY THẾ HÀM CŨ

function relatedproduct(e) {
    const container = document.getElementById('like');
    if (!container) {
        console.error('Không tìm thấy vùng chứa cho sản phẩm liên quan: #like');
        return;
    }

    let htmlOutput = '';
    const entries = e.feed.entry || [];
    const maxPosts = Math.min(relatednumposts, entries.length);

    // Xác định tiêu đề chung
    const isNews = entries.length > 0 && entries[0].content.$t.includes("[tintuc]");
    const retitle = isNews ? renewstitle : relatedtitle;
    htmlOutput += `<div class="title-line"><h4><span>${retitle}</span></h4></div><ul class="row clearfix content-product-list">`;

    // Lặp qua từng bài viết liên quan
    for (let i = 0; i < maxPosts; i++) {
        const entry = entries[i];
        if (!entry) continue;

        const title = entry.title.$t;
        let link = '';
        for (let j = 0; j < entry.link.length; j++) {
            if (entry.link[j].rel === 'alternate') {
                link = entry.link[j].href;
                break;
            }
        }
        
        const content = "content" in entry ? entry.content.$t : ("summary" in entry ? entry.summary.$t : "");

        const getShortcode = (tag) => {
            const startTag = `[${tag}]`;
            const endTag = `[/${tag}]`;
            if (content.includes(startTag) && content.includes(endTag)) {
                return content.substring(content.indexOf(startTag) + startTag.length, content.indexOf(endTag));
            }
            return "";
        };

        // Tạo HTML cho các thẻ overlay
        let overlayHtml = '';
        const giamgia_string = getShortcode("giamgia");
        let giamgia_percent = 0;
        if (giamgia_string) {
            const first_discount_part = giamgia_string.split(',')[0].trim();
            if (first_discount_part.includes('--')) {
                const percentage = first_discount_part.split('--')[1].trim();
                if (percentage && !isNaN(percentage)) {
                    giamgia_percent = parseFloat(percentage);
                    overlayHtml += `<span class="product-status discount">Giảm ${giamgia_percent}%</span>`;
                }
            }
        }
        const tinhtrang = getShortcode("tinhtrang");
        if (tinhtrang) {
            overlayHtml += `<span class="product-status tinhtrang">${tinhtrang}</span>`;
        }
        const daban_date = getShortcode("daban");
        if (daban_date) {
            overlayHtml += `<span class="product-status daban">Đã bán: ${tinhngay(daban_date)}</span>`;
        }

        // Logic tính toán và tạo HTML cho giá sản phẩm
        let priceHtml = '';
        const giaGocString = getShortcode("giaban");
        const giaGocValue = giaGocString ? parseInt(giaGocString.replace(/,/g, ''), 10) : 0;

        const formatCurrency = (value) => {
            if (isNaN(value)) return "Liên hệ";
            return value.toLocaleString('vi-VN') + '₫';
        };

        if (giamgia_percent > 0 && giaGocValue > 0) {
            const giaMoiValue = Math.round(giaGocValue * (1 - giamgia_percent / 100));
            priceHtml = `<span class="new-price item_price">${formatCurrency(giaMoiValue)}</span>
                         <span class="old-price"><del>${formatCurrency(giaGocValue)}</del></span>`;
        } else if (giaGocValue > 0) {
            priceHtml = `<span class="new-price item_price">${formatCurrency(giaGocValue)}</span>`;
        } else {
            priceHtml = `<span class="new-price item_price">Liên hệ</span>`;
        }

        // Lấy ảnh đại diện
        let imageSrc = "https://bit.ly/hGWr7r";
        const imgTagMatch = content.match(/<img[^>]+src="([^">]+)"/);
        if (imgTagMatch && imgTagMatch[1]) {
            imageSrc = imgTagMatch[1].replace(/\/s[0-9]+(-c)?\//, '/w400-h225-c/');
        }

        // Tạo HTML cho một sản phẩm
        htmlOutput += `
            <div class="col-xs-12 col-sm-6 col-md-4 simpleCart_shelfItem">
                <div class="product-loop">
                    <a href="${link}" class="product-image-container">
                        <img class="item_thumb" src="${imageSrc}" alt="${title}">
                        ${overlayHtml}
                    </a>
                    <div class="product-info clearfix">
                        <h3><a class="item_name" href="${link}">${title}</a></h3>
                        <p class="price">${priceHtml}</p>
                        <a href="${urlgiohang}" class="d-none">
                            <button type="submit" class="add-to-cart btn-fix item_add" name="add">Mua hàng</button>
                        </a>
                    </div>
                </div>
            </div>`;
    }

    htmlOutput += '</ul>';
    container.innerHTML = htmlOutput;
}
// DÁN HÀM NÀY VÀO KHU VỰC SCRIPT CHUNG

/**
 * Hàm render HTML cho mỗi sản phẩm/khóa học.
 * Tái sử dụng logic từ hàm labelproduct cũ.
 * @param {object} entry - Một đối tượng bài đăng từ feed của Blogger.
 * @returns {string} - Chuỗi HTML của một sản phẩm.
 */
// DÁN PHIÊN BẢN DUY NHẤT VÀ ĐẦY ĐỦ NHẤT NÀY VÀO

/**
 * Hàm render HTML cho mỗi sản phẩm/khóa học trong slider.
 * @param {object} entry - Một đối tượng bài đăng từ feed của Blogger.
 * @returns {string} - Chuỗi HTML của một sản phẩm/khóa học dạng <li>.
 */
/**
 * Hàm render HTML cho mỗi sản phẩm/khóa học trong slider. (ĐÃ CẬP NHẬT)
 * @param {object} entry - Một đối tượng bài đăng từ feed của Blogger.
 * @returns {string} - Chuỗi HTML của một sản phẩm/khóa học dạng <li>.
 */
/**
 * Hàm render HTML cho mỗi sản phẩm/khóa học trong slider. (ĐÃ SỬA LỖI)
 * @param {object} entry - Một đối tượng bài đăng từ feed của Blogger.
 * @returns {string} - Chuỗi HTML của một sản phẩm/khóa học dạng <li>.
 */
function renderProductItem(entry) {
    const title = (entry && entry.title && entry.title.$t) ? entry.title.$t : 'Tiêu đề không có';
    let link = '';
    if (entry.link) {
        for (let i = 0; i < entry.link.length; i++) {
            if (entry.link[i].rel === 'alternate') {
                link = entry.link[i].href;
                break;
            }
        }
    }
    const content = "content" in entry ? entry.content.$t : ("summary" in entry ? entry.summary.$t : "");
    const getShortcode = (tag) => {
        const startTag = `[${tag}]`;
        const endTag = `[/${tag}]`;
        if (content.includes(startTag) && content.includes(endTag)) {
            return content.substring(content.indexOf(startTag) + startTag.length, content.indexOf(endTag));
        }
        return "";
    };
    
    // Tạo HTML cho các thẻ overlay
    let overlayHtml = '';
    const giamgia_string = getShortcode("giamgia");
    let giamgia_percent = 0;
    if (giamgia_string) {
        const first_discount_part = giamgia_string.split(',')[0].trim();
        if (first_discount_part.includes('--')) {
            const percentage = first_discount_part.split('--')[1].trim();
            if (percentage && !isNaN(percentage)) {
                giamgia_percent = parseFloat(percentage);
                overlayHtml += `<span class="product-status discount">Giảm ${giamgia_percent}%</span>`;
            }
        }
    }
    const tinhtrang = getShortcode("tinhtrang");
    if (tinhtrang) {
        overlayHtml += `<span class="product-status tinhtrang">${tinhtrang}</span>`;
    }
    const daban_date = getShortcode("daban");
    if (daban_date) {
        overlayHtml += `<span class="product-status daban">Đã bán: ${tinhngay(daban_date)}</span>`;
    }

    // Logic tính toán và tạo HTML cho giá sản phẩm
    let priceHtml = '';
    const giaGocString = getShortcode("giaban");
    const giaGocValue = giaGocString ? parseInt(giaGocString.replace(/,/g, ''), 10) : 0;
    
    const formatCurrency = (value) => {
        if (isNaN(value)) return "Liên hệ";
        return value.toLocaleString('vi-VN') + '₫';
    };

    if (giamgia_percent > 0 && giaGocValue > 0) {
        const giaMoiValue = Math.round(giaGocValue * (1 - giamgia_percent / 100));
        priceHtml = `<span class="new-price item_price">${formatCurrency(giaMoiValue)}</span>
                     <span class="old-price"><del>${formatCurrency(giaGocValue)}</del></span>`;
    } else if (giaGocValue > 0) {
        priceHtml = `<span class="new-price item_price">${formatCurrency(giaGocValue)}</span>`;
    } else {
        priceHtml = `<span class="new-price item_price">Liên hệ</span>`;
    }

    let imageSrc = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhd6hRb8uI-t1hrf5z1RxcAD037Gr-8GT3l6i4r_2FJYIxypTlViNDf8cxwzXxUfAIyjJ2upQT3HykeFspb5wYwS7COmddSv18Dn9n0HKQvxEK80FaxbeWqoKUybE7AERbbCW7XdnFyd4ZB7TJ6xClLLsAI70DX3IFZK6xOVXe2eXhFfsiNoyN-CcJmz8Q/s320/logo%20DTC%20PNG-small.png";
    const imgTagMatch = content.match(/<img[^>]+src="([^">]+)"/);
    if (imgTagMatch && imgTagMatch[1]) {
        imageSrc = imgTagMatch[1].replace(/\/s[0-9]+(-c)?\//, '/w400-h225-c/');
    }
    // const shortTitle = typeof removeHtmlTag === 'function' ? removeHtmlTag(title, 35) : title.substring(0, 35); // Dòng này không cần nữa

    return `
      <li>
        <div class="col-xs-12 col-sm-12 col-md-12 simpleCart_shelfItem">
          <div class="product-loop">
            <a href="${link}" class="product-image-container">
              <img class="item_thumb lozad" data-src="${imageSrc}" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt="${title}">
              ${overlayHtml}
            </a>
            <div class="product-info clearfix">
              <h3><a href="${link}" class="item_name" title="${title}">${title}</a></h3>
              <p class="price">${priceHtml}</p>
              <a href="/p/gio-hang.html" class="d-none">
                <button type="submit" class="add-to-cart btn-fix item_add" name="add">Mua hàng</button>
              </a>
            </div>
          </div>
        </div>
      </li>
    `;
}
// DÁN 2 HÀM MỚI NÀY VÀO KHU VỰC SCRIPT CHUNG

/**
 * Hàm render HTML cho mỗi mục Tin Tức (ĐÃ SỬA CHO SLIDER).
 * @param {object} entry - Một đối tượng bài đăng từ feed của Blogger.
 * @returns {string} - Chuỗi HTML của một mục tin tức dạng <li>.
 */
function renderNewsItem(entry) {
    const title = (entry && entry.title && entry.title.$t) ? entry.title.$t : 'Tiêu đề không có';
    let link = '';
    if (entry.link) {
        for (let i = 0; i < entry.link.length; i++) {
            if (entry.link[i].rel === 'alternate') {
                link = entry.link[i].href;
                break;
            }
        }
    }

    const content = "content" in entry ? entry.content.$t : ("summary" in entry ? entry.summary.$t : "");

    let imageSrc = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhd6hRb8uI-t1hrf5z1RxcAD037Gr-8GT3l6i4r_2FJYIxypTlViNDf8cxwzXxUfAIyjJ2upQT3HykeFspb5wYwS7COmddSv18Dn9n0HKQvxEK80FaxbeWqoKUybE7AERbbCW7XdnFyd4ZB7TJ6xClLLsAI70DX3IFZK6xOVXe2eXhFfsiNoyN-CcJmz8Q/s320/logo%20DTC%20PNG-small.png";
    const imgTagMatch = content.match(/<img[^>]+src="([^">]+)"/);
    if (imgTagMatch && imgTagMatch[1]) {
        imageSrc = imgTagMatch[1].replace(/\/s[0-9]+(-c)?\//, '/s320/');
    }

    const newsSummary = content.includes("[tintuc]") ? content.substring(content.indexOf("[tintuc]") + 8, content.indexOf("[/tintuc]")) : removeHtmlTag(content, 150);

    // Gói đầu ra trong thẻ <li> để phù hợp với slider
    return `
        <li>
            <div class="col-xs-12 col-sm-12">
                <div class="blog-loop clearfix">
                    <div class="blog-img pull-left col-12">
                        <a href="${link}">
                            <img class="lozad" data-src="${imageSrc}" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt="${title}">
                        </a>
                    </div>
                    <div class="blog-info pull-right col-12">
                        <h3><a href="${link}">${title}</a></h3>
                        <p>${removeHtmlTag(newsSummary, 150)}...</p>
                        <a href="${link}" class="readmore">Xem thêm</a>
                    </div>
                </div>
            </div>
        </li>
    `;
}

/**
 * Hàm tải nội dung đơn giản, không dùng slider.
 * @param {string} feedUrl - URL của Blogger JSON feed.
 * @param {function} renderFunction - Hàm dùng để xử lý và tạo HTML cho mỗi bài đăng.
 * @param {string} containerId - ID của phần tử HTML sẽ chứa kết quả.
 */
async function loadSimpleGridAsync(feedUrl, renderFunction, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    try {
        const response = await fetch(feedUrl);
        if (!response.ok) throw new Error(`Lỗi mạng: ${response.statusText}`);

        const responseText = await response.text();
        const jsonString = responseText.substring(responseText.indexOf('{'), responseText.lastIndexOf('}') + 1);
        const data = JSON.parse(jsonString);

        if (!data.feed || !data.feed.entry || data.feed.entry.length === 0) {
            container.innerHTML = '<p style="text-align:center;">Không có bài viết nào.</p>';
            return;
        }

        let htmlOutput = '';
        for (const entry of data.feed.entry) {
            htmlOutput += renderFunction(entry);
        }

        container.innerHTML = htmlOutput;

        // Kích hoạt lazyload cho các ảnh vừa thêm vào
        if (typeof lozad === 'function') {
            const observer = lozad('#' + containerId + ' .lozad');
            observer.observe();
        }
    } catch (error) {
        console.error(`Lỗi khi tải dữ liệu cho ${containerId}:`, error);
        container.innerHTML = '<p style="text-align:center;">Không thể tải nội dung.</p>';
    }
}
/**
 * Hàm tải và lọc tin tức, sau đó hiển thị dưới dạng slider.
 */
async function loadAndFilterNewsSlider(feedUrl, renderFunction, containerId, maxItemsToDisplay) {
    const container = document.getElementById(containerId);
    if (!container) return;

    try {
        const response = await fetch(feedUrl);
        if (!response.ok) throw new Error(`Lỗi mạng: ${response.statusText}`);

        const responseText = await response.text();
        const jsonString = responseText.substring(responseText.indexOf('{'), responseText.lastIndexOf('}') + 1);
        const data = JSON.parse(jsonString);

        if (!data.feed || !data.feed.entry || data.feed.entry.length === 0) {
            container.innerHTML = '<p style="text-align:center;">Không có bài viết nào.</p>';
            return;
        }

        // Bắt đầu chuỗi HTML với cấu trúc của slider
        let htmlOutput = '<div class="slider-container-multiple"><ul class="slides clearfix">';
        let newsCount = 0;

        for (const entry of data.feed.entry) {
            if (newsCount >= maxItemsToDisplay) break;

            const content = "content" in entry ? entry.content.$t : ("summary" in entry ? entry.summary.$t : "");

            htmlOutput += renderFunction(entry);
            newsCount++;
        }

        // Đóng các thẻ của slider
        htmlOutput += '</ul></div>';

        if (newsCount === 0) {
             container.innerHTML = '<p style="text-align:center;">Không tìm thấy tin tức nào trong các bài viết gần đây.</p>';
        } else {
             container.innerHTML = htmlOutput;

             // *** KHỞI TẠO SLIDER SAU KHI THÊM HTML ***
             if (jQuery && jQuery.fn.flexslider) {
                const slider = jQuery('#' + containerId + ' .slider-container-multiple');
                if (slider.length > 0) {
                     slider.flexslider({
                        animation: "slide",
                        animationLoop: true,
                        itemWidth: 290,
                        itemMargin: 5,
                        directionNav: true,
                        controlNav: true
                    });
                }
            }
        }

        if (typeof lozad === 'function') {
            const observer = lozad('#' + containerId + ' .lozad');
            observer.observe();
        }
    } catch (error) {
        console.error(`Lỗi khi tải và lọc tin tức cho ${containerId}:`, error);
        container.innerHTML = '<p style="text-align:center;">Không thể tải nội dung.</p>';
    }
}
// === DÁN TOÀN BỘ KHỐI CODE NÀY VÀO KHU VỰC SCRIPT CHUNG ===

// Hàm chính để khởi tạo và hiển thị nội dung trang nhãn
// THAY THẾ TOÀN BỘ HÀM CŨ BẰNG HÀM NÀY

// THAY THẾ TOÀN BỘ HÀM CŨ BẰNG HÀM NÀY

function initializeLabelPage() {
    const postsContainer = document.getElementById('label-posts-container');
    const paginationContainer = document.getElementById('label-pagination-container');

    if (!postsContainer || !paginationContainer) {
        return;
    }

    // SỬA LẠI DÒNG NÀY: Dùng biến toàn cục đã tạo ở Bước 1
    const homepageurl = blogHomepageUrl;

    const str = location.href;
    const urlParams = new URLSearchParams(window.location.search);
    let page = parseInt(urlParams.get('page') || '1');

    let labelName = '';
    if (str.indexOf("search/label") !== -1) {
        const pathParts = window.location.pathname.split('/');
        labelName = decodeURIComponent(pathParts[pathParts.length - 1]);
    }

    const postsPerPage = 12;
    const startIndex = (page - 1) * postsPerPage + 1;

    fetchAndDisplayLabelPosts(labelName, startIndex, postsPerPage);
}

// Hàm tải dữ liệu từ Blogger và gọi hàm hiển thị
function fetchAndDisplayLabelPosts(label, start, count) {
    const feedUrl = `/feeds/posts/default/-/${encodeURIComponent(label)}?start-index=${start}&max-results=${count}&orderby=published&alt=json-in-script&callback=displayLabelPage`;

    const script = document.createElement('script');
    script.src = feedUrl;
    document.body.appendChild(script);
}

// Hàm callback chính, được gọi sau khi dữ liệu từ Blogger được tải về
// Hàm callback chính, được gọi sau khi dữ liệu từ Blogger được tải về (ĐÃ CẬP NHẬT)
function displayLabelPage(json) {
    const postsContainer = document.getElementById('label-posts-container');
    const paginationContainer = document.getElementById('label-pagination-container');
    let postsHtml = '';
    const entries = json.feed.entry || [];

    if (entries.length > 0) {
        entries.forEach(entry => {
            const title = entry.title.$t;
            let link = '';
            for (let e = 0; e < entry.link.length; e++) {
                if (entry.link[e].rel == 'alternate') {
                    link = entry.link[e].href;
                    break;
                }
            }
            const content = "content" in entry ? entry.content.$t : "summary" in entry ? entry.summary.$t : "";
            const getShortcode = (tag) => {
                const startTag = `[${tag}]`;
                const endTag = `[/${tag}]`;
                if (content.includes(startTag) && content.includes(endTag)) {
                    return content.substring(content.indexOf(startTag) + startTag.length, content.indexOf(endTag));
                }
                return "";
            };

            let imageUrl = "https://bit.ly/hGWr7r";
            const imgTagMatch = content.match(/<img[^>]+src="([^">]+)"/);
            if (imgTagMatch && imgTagMatch[1]) {
                imageUrl = imgTagMatch[1].replace(/\/s[0-9]+(-c)?\//, '/w400-h225-c/');
            }
            
            let overlayHtml = '';
            const giamgia_string = getShortcode("giamgia");
            let giamgia_percent = 0;
            if (giamgia_string) {
                const first_discount_part = giamgia_string.split(',')[0].trim();
                if (first_discount_part.includes('--')) {
                    const percentage = first_discount_part.split('--')[1].trim();
                    if (percentage && !isNaN(percentage)) {
                        giamgia_percent = parseFloat(percentage);
                        overlayHtml += `<span class="product-status discount">Giảm ${giamgia_percent}%</span>`;
                    }
                }
            }
            const tinhtrang = getShortcode("tinhtrang");
            if (tinhtrang) {
                overlayHtml += `<span class="product-status tinhtrang">${tinhtrang}</span>`;
            }
            const daban_date = getShortcode("daban");
            if (daban_date) {
                overlayHtml += `<span class="product-status daban">Đã bán: ${tinhngay(daban_date)}</span>`;
            }

            if (content.indexOf("[giaban]") !== -1) {
                let priceHtml = '';
                const giaGocString = getShortcode("giaban");
                const giaGocValue = giaGocString ? parseInt(giaGocString.replace(/,/g, ''), 10) : 0;
                const formatCurrency = (value) => {
                    if (isNaN(value)) return "Liên hệ";
                    return value.toLocaleString('vi-VN') + '₫';
                };

                if (giamgia_percent > 0 && giaGocValue > 0) {
                    const giaMoiValue = Math.round(giaGocValue * (1 - giamgia_percent / 100));
                    priceHtml = `<span class="new-price item_price">${formatCurrency(giaMoiValue)}</span>
                                 <span class="old-price"><del>${formatCurrency(giaGocValue)}</del></span>`;
                } else if (giaGocValue > 0) {
                    priceHtml = `<span class="new-price item_price">${formatCurrency(giaGocValue)}</span>`;
                } else {
                    priceHtml = `<span class="new-price item_price">Liên hệ</span>`;
                }
                
                postsHtml += `
                    <div class="col-xs-12 col-sm-6 col-md-4 simpleCart_shelfItem">
                        <div class="product-loop">
                            <a href="${link}" class="product-image-container">
                                <img class="item_thumb" src="${imageUrl}" alt="${title}" style="width:100%; height:auto;">
                                ${overlayHtml}
                            </a>
                            <div class="product-info clearfix">
                                <h3><a href="${link}" class="item_name">${title}</a></h3>
                                <p class="price">${priceHtml}</p>
                                <a href="/p/gio-hang.html" class="d-none"><button type="submit" class="add-to-cart btn-fix item_add" name="add">Mua hàng</button></a>
                            </div>
                        </div>
                    </div>`;
            } else {
                const authpost = entry.author[0].name.$t;
                const postDay = new Date(entry.published.$t).toLocaleDateString('vi-VN');
                const tintuc_summary = removeHtmlTag(content, 100);
                postsHtml += `
                    <div class="col-xs-12 col-sm-6">
                        <div class="article-loop">
                            <div class="image">
                                <a href="${link}"><img src="${imageUrl}" alt="${title}" style="width:100%; height:auto;"></a>
                            </div>
                            <div class="info">
                                <h3><a href="${link}">${title}</a></h3>
                                <p class="time">Đăng bởi: ${authpost} - ${postDay}</p>
                                <p class="des">${tintuc_summary}...</p>
                                <a href="${link}" class="view-more">Đọc tiếp</a>
                            </div>
                        </div>
                    </div>`;
            }
        });
    } else {
        postsHtml = "<p style='text-align:center; width:100%;'>Không có bài viết nào trong chuyên mục này.</p>";
    }
    postsContainer.innerHTML = postsHtml;

    const totalResults = parseInt(json.feed.openSearch$totalResults.$t, 10);
    const postsPerPage = 12;
    const totalPages = Math.ceil(totalResults / postsPerPage);
    const urlParams = new URLSearchParams(window.location.search);
    const currentPage = parseInt(urlParams.get('page') || '1');
    let paginationHtml = '';
    if (totalPages > 1) {
        paginationHtml += '<div id="page-rc-tooltip">';
        if (currentPage > 1) {
            urlParams.set('page', currentPage - 1);
            paginationHtml += `<a class="pagelink" href="?${urlParams.toString()}">Trang trước</a>`;
        }
        for (let i = 1; i <= totalPages; i++) {
            if (i === currentPage) {
                paginationHtml += `<span class="currentpage">${i}</span>`;
            } else {
                urlParams.set('page', i);
                paginationHtml += `<a class="pagelink" href="?${urlParams.toString()}">${i}</a>`;
            }
        }
        if (currentPage < totalPages) {
            urlParams.set('page', currentPage + 1);
            paginationHtml += `<a class="pagelink" href="?${urlParams.toString()}">Trang sau</a>`;
        }
        paginationHtml += '</div>';
    }
    paginationContainer.innerHTML = paginationHtml;
}

// Chạy hàm khởi tạo khi trang tải xong
document.addEventListener('DOMContentLoaded', initializeLabelPage);
// === DÁN 3 HÀM NÀY VÀO KHU VỰC SCRIPT CHUNG ===

function loadLatestPosts(json) {
  labeltintuc02(json, 'latest-posts-widget');
}

function loadLegalDocs(json) {
  labeltintuc02(json, 'legal-docs-widget');
}

function loadFooterPosts(json) {
  labeltintuc02(json, 'latest-posts-footer');
}
/**
 * Hàm tải và hiển thị nội dung từ Blogger feed một cách bất đồng bộ.
 * @param {string} feedUrl - URL của Blogger JSON feed.
 * @param {function} renderFunction - Hàm dùng để xử lý và tạo HTML cho mỗi bài đăng.
 * @param {string} containerId - ID của phần tử HTML sẽ chứa kết quả.
 */
async function loadContentAsync(feedUrl, renderFunction, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Không tìm thấy container với ID: ${containerId}`);
        return;
    }

    try {
        const response = await fetch(feedUrl);
        if (!response.ok) {
            throw new Error(`Lỗi mạng: ${response.statusText}`);
        }
        
        // Blogger trả về JSONP, cần trích xuất đối tượng JSON từ chuỗi.
        const responseText = await response.text();
        const jsonString = responseText.substring(responseText.indexOf('{'), responseText.lastIndexOf('}') + 1);
        const data = JSON.parse(jsonString);

        if (!data.feed || !data.feed.entry || data.feed.entry.length === 0) {
            container.innerHTML = '<p style="text-align:center;">Không có bài viết nào để hiển thị.</p>';
            return;
        }

        let htmlOutput = '';
        // Bắt đầu ul cho slider nếu cần
        htmlOutput += '<div class="slider-container-multiple"><ul class="slides clearfix">';
        
        for (const entry of data.feed.entry) {
            htmlOutput += renderFunction(entry); // Gọi hàm render cho mỗi bài
        }
        
        htmlOutput += '</ul></div>'; // Đóng ul slider

        container.innerHTML = htmlOutput;
        
        // Khởi tạo lại FlexSlider cho container vừa được cập nhật
        // Cần đảm bảo thư viện FlexSlider đã được tải xong
        if (jQuery && jQuery.fn.flexslider) {
            const slider = jQuery('#' + containerId + ' .slider-container-multiple');
            if(slider.length > 0) {
                 slider.flexslider({
                    animation: "slide",
                    animationLoop: true,
                    itemWidth: 290,
                    itemMargin: 5,
                    directionNav: true,
                    controlNav: true
                });
            }
        }
        
        // Kích hoạt lazyload cho các ảnh vừa thêm vào
        if (typeof lozad === 'function') {
            const observer = lozad('#' + containerId + ' .lozad');
            observer.observe();
        }


    } catch (error) {
        console.error(`Lỗi khi tải dữ liệu cho ${containerId}:`, error);
        container.innerHTML = '<p style="text-align:center;">Không thể tải được nội dung. Vui lòng thử lại sau.</p>';
    }
}


/**
 * Hàm render HTML cho mỗi sản phẩm/khóa học.
 * Tái sử dụng logic từ hàm labelproduct cũ.
 * @param {object} entry - Một đối tượng bài đăng từ feed của Blogger.
 * @returns {string} - Chuỗi HTML của một sản phẩm.
 */


		function labelproduct02(json, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let htmlOutput = '';
    const entries = json.feed.entry || [];
    const maxPosts = Math.min(20, entries.length);

    for (var t = 0; t < maxPosts; t++) {
        var i, n = entries[t],
            r = n.title.$t;

        for (var l = 0; l < n.link.length; l++) {
            if ("alternate" == n.link[l].rel) {
                i = n.link[l].href;
                break;
            }
        }

        var content = "content" in n ? n.content.$t : "summary" in n ? n.summary.$t : "";
        var giaban = -1 != content.indexOf("[giaban]") ? content.substring(content.indexOf("[giaban]") + 8, content.indexOf("[/giaban]")) : "";
        var img_s = content.indexOf("<img");
        var img_e = content.indexOf("src=\"", img_s);
        var img_e2 = content.indexOf("\"", img_e + 5);
        var img_url = (img_s != -1 && img_e != -1 && img_e2 != -1) ? content.substring(img_e + 5, img_e2) : "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhd6hRb8uI-t1hrf5z1RxcAD037Gr-8GT3l6i4r_2FJYIxypTlViNDf8cxwzXxUfAIyjJ2upQT3HykeFspb5wYwS7COmddSv18Dn9n0HKQvxEK80FaxbeWqoKUybE7AERbbCW7XdnFyd4ZB7TJ6xClLLsAI70DX3IFZK6xOVXe2eXhFfsiNoyN-CcJmz8Q/s160/logo%20DTC%20PNG-small.png";

        htmlOutput += `
          <div class="item clearfix">
            <div class="item-img">
              <a class="product-image img-small" href="${i}" title="${r}">
                <img src="${img_url}" alt="${r}">
              </a>
            </div>
            <div class="item-info">
              <div class="item-title">
                <a href="${i}" title="${r}">${removeHtmlTag(r, labelsumtitle2)}</a>
              </div>
              <div class="special-price">
                <span class="price">${giaban}₫</span>
              </div>
            </div>
          </div>
        `;
    }
    container.innerHTML = htmlOutput;
}
// DÁN ĐOẠN CODE NÀY VÀO ĐỂ THAY THẾ HÀM labeltintuc CŨ

function labeltintuc(json, containerId) {
    // 1. Tìm đến vùng chứa được chỉ định bằng ID
    const container = document.getElementById(containerId);
    if (!container) {
        console.error('Không tìm thấy vùng chứa cho slider tin tức: #' + containerId);
        return;
    }

    // 2. Khởi tạo các biến cần thiết
    let htmlOutput = '';
    const logoURL = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhd6hRb8uI-t1hrf5z1RxcAD037Gr-8GT3l6i4r_2FJYIxypTlViNDf8cxwzXxUfAIyjJ2upQT3HykeFspb5wYwS7COmddSv18Dn9n0HKQvxEK80FaxbeWqoKUybE7AERbbCW7XdnFyd4ZB7TJ6xClLLsAI70DX3IFZK6xOVXe2eXhFfsiNoyN-CcJmz8Q/s320/logo%20DTC%20PNG-small.png";

    // Bắt đầu chuỗi HTML với thẻ bọc của slider
    htmlOutput += '<div class="slider-container-multiple"><ul class="slides clearfix">';

    const entries = json.feed.entry || [];
    for (const entry of entries) {
        const title = entry.title.$t;
        let link = '';
        for (let i = 0; i < entry.link.length; i++) {
            if (entry.link[i].rel === 'alternate') {
                link = entry.link[i].href;
                break;
            }
        }

        const content = "content" in entry ? entry.content.$t : "summary" in entry ? entry.summary.$t : "";

        // Chỉ xử lý các bài có shortcode [tintuc]
        const startTag = "[tintuc]";
        const endTag = "[/tintuc]";
        const startIdx = content.indexOf(startTag);
        const endIdx = content.indexOf(endTag);

        if (startIdx === -1 || endIdx === -1) continue; // Bỏ qua nếu không có shortcode

        const tintucSummary = content.substring(startIdx + startTag.length, endIdx);

        // Xử lý ảnh
        let imageSrc = logoURL;
        const imgTagMatch = content.match(/<img[^>]+src="([^">]+)"/);
        if (imgTagMatch && imgTagMatch[1]) {
            imageSrc = imgTagMatch[1].replace(/\/s[0-9]+(-c)?\//, '/s320/');
        }

        // 3. Thay thế document.write() bằng cách cộng chuỗi
        htmlOutput += `
            <li>
                <div class="col-xs-12 col-sm-12">
                    <div class="blog-loop clearfix">
                        <div class="blog-img pull-left col-12">
                            <a href="${link}">
                                <img class="lozad" data-src="${imageSrc}" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt="${title}">
                            </a>
                        </div>
                        <div class="blog-info pull-right col-12">
                            <h3><a href="${link}">${title}</a></h3>
                            <p>${removeHtmlTag(tintucSummary, 150)}...</p>
                            <a href="${link}" class="readmore">Xem thêm</a>
                        </div>
                    </div>
                </div>
            </li>
        `;
    }

    // Đóng các thẻ bọc của slider
    htmlOutput += '</ul></div>';

    // 4. Chèn toàn bộ HTML đã tạo vào vùng chứa
    container.innerHTML = htmlOutput;

    // 5. Kích hoạt lại FlexSlider cho slider vừa được tạo
    if (jQuery && jQuery.fn.flexslider) {
        const slider = jQuery('#' + containerId + ' .slider-container-multiple');
        if (slider.length > 0) {
             slider.flexslider({
                animation: "slide",
                animationLoop: true,
                itemWidth: 290,
                itemMargin: 5,
                directionNav: true,
                controlNav: true
            });
        }
    }
}


// DÁN ĐOẠN CODE NÀY VÀO ĐỂ THAY THẾ HÀM labeltintuc02 CŨ

function labeltintuc02(json, containerId) {
    // 1. Tìm đến vùng chứa được chỉ định bằng ID
    const container = document.getElementById(containerId);
    if (!container) {
        console.error('Không tìm thấy vùng chứa: #' + containerId);
        return;
    }

    // 2. Khởi tạo biến để xây dựng chuỗi HTML
    let htmlOutput = '';
    const maxpost = json.feed.entry.length;

    // --- LOGIC CŨ ĐƯỢC GIỮ NGUYÊN ---
    // --- CHỈ THAY THẾ document.write() BẰNG htmlOutput += ---
    for (var t = 0; t < maxpost; t++) {
        var i, n = json.feed.entry[t],
            r = n.title.$t;
        if (t == json.feed.entry.length) break;

        for (var l = 0; l < n.link.length; l++) {
            if ("alternate" == n.link[l].rel) {
                i = n.link[l].href;
                break;
            }
        }
        
        const postdate = n.published.$t;
        const p = postdate.split("-")[2].substring(0, 2);
        const h = postdate.split("-")[1];
        const g = postdate.split("-")[0];
        const displayDate = p + "/" + h + "/" + g;

        // 3. Thay thế document.write() bằng cách cộng chuỗi
        htmlOutput += `
            <div class="blog-item">
                <div class="item-title">
                    <span class="icon">• </span>
                    <a href="${i}">${r}</a>
                </div>
                <p class="time">Ngày đăng ${displayDate}</p>
            </div>
        `;
    }

    // 4. Chèn toàn bộ HTML đã tạo vào vùng chứa
    container.innerHTML = htmlOutput;
}


function Cart(){var e=this;e.nextId=1,e.Version="2.2",e.Shelf=null,e.items={},e.isLoaded=!1,e.pageIsReady=!1,e.quantity=0,e.total=0,e.taxRate=0,e.taxCost=0,e.shippingFlatRate=0,e.shippingTotalRate=0,e.shippingQuantityRate=0,e.shippingRate=0,e.shippingCost=0,e.currency=VND,e.checkoutTo=PayPal,e.email="congngheazawebsite@gmail.com",e.merchantId="",e.successUrl="http://congngheazawebsite.com/",e.cancelUrl=null,e.entry="",e.entryURL="",e.entryDelete=!1,e.cookieDuration=30,e.storagePrefix="sc_",e.MAX_COOKIE_SIZE=4e3,e.cartHeaders=["thumb_image","Name","Price","decrement","Quantity","increment","total","Remove"],1==e.entryDelete&&(this.items={}),e.add=function(e){var t=this;t.pageIsReady||(t.initializeView(),t.update()),t.isLoaded||(t.load(),t.update());var i=new CartItem;if(!arguments||0===arguments.length)return null;var n=arguments;if(e&&"string"!=typeof e&&"number"!=typeof e&&(n=e),i.parseValuesFromArray(n),i.checkQuantityAndPrice(),t.hasItem(i)){var a=t.hasItem(i);a.quantity=parseInt(a.quantity,10)+parseInt(i.quantity,10),i=a}else t.items[i.id]=i;return t.update(),$("html, body").animate({scrollTop:0},1e3),i},e.remove=function(t){var i={};e.each((function(e){e.id!==t&&(i[e.id]=e)})),this.items=i},e.empty=function(){simpleCart.items={},simpleCart.update()},e.find=function(t){if(!t)return null;var i=[];return e.each((function(n,a,r){fits=!0,e.each(t,(function(e,t,i){n[i]&&n[i]==e||(fits=!1)})),fits&&i.push(n)})),0===i.length?null:i},e.each=function(t,i){var n,a=0;if("function"==typeof t){var r=t;s=e.items}else{if("function"!=typeof i)return;r=i;var s=t}for(n in s)if("function"!=typeof s[n]){if(!1===r.call(e,s[n],a,n))return;a++}},e.chunk=function(e,t){return void 0===t&&(t=2),e.match(RegExp(".{1,"+t+"}","g"))||[]},e.checkout=function(){if(0!==simpleCart.quantity)switch(simpleCart.checkoutTo){case PayPal:simpleCart.paypalCheckout();break;case GoogleCheckout:simpleCart.googleCheckout();break;case Email:simpleCart.emailCheckout();break;default:simpleCart.customCheckout()}else error("Cart is empty")},e.paypalCheckout=function(){var e,t=this,i="https://www.paypal.com/cgi-bin/webscr?cmd=_cart&upload=1&business="+t.email+"&currency_code="+t.currency,n=1,a="";t.taxRate&&(i=i+"&tax_cart="+t.currencyStringForPaypalCheckout(t.taxCost)),t.each((function(i,r){n=r+1,e="",t.each(i,(function(t,i,n){"id"!==n&&"price"!==n&&"quantity"!==n&&"name"!==n&&"shipping"!==n&&(e=e+", "+n+"="+t)})),e=e.substring(2),a=a+"&item_name_"+n+"="+i.name+"&item_number_"+n+"="+n+"&quantity_"+n+"="+i.quantity+"&amount_"+n+"="+t.currencyStringForPaypalCheckout(i.price)+"&on0_"+n+"=Options&os0_"+n+"="+e})),0!==t.shipping()&&(a=a+"&shipping="+t.currencyStringForPaypalCheckout(t.shippingCost)),t.successUrl&&(a=a+"&return="+t.successUrl),t.cancelUrl&&(a=a+"&cancel_return="+t.cancelUrl),i+=a,window.open(i,"paypal","scrollbars,location,resizable,status")},e.googleCheckout=function(){var e=this;if(e.currency===USD||e.currency===GBP)if(""!==e.merchantId&&null!==e.merchantId&&e.merchantId){var t,i=document.createElement("form"),n=1;i.style.display="none",i.method="POST",i.action="https://checkout.google.com/api/checkout/v2/checkoutForm/Merchant/"+e.merchantId,i.acceptCharset="utf-8",e.each((function(a,r){n=r+1,i.appendChild(e.createHiddenElement("item_name_"+n,a.name)),i.appendChild(e.createHiddenElement("item_quantity_"+n,a.quantity)),i.appendChild(e.createHiddenElement("item_price_"+n,a.price)),i.appendChild(e.createHiddenElement("item_currency_"+n,e.currency)),i.appendChild(e.createHiddenElement("item_tax_rate_"+n,e.taxRate)),i.appendChild(e.createHiddenElement("_charset_","")),t="",e.each(a,(function(e,i,n){"id"!==n&&"quantity"!==n&&"price"!==n&&(t=t+", "+n+": "+e)})),t=t.substring(1),i.appendChild(e.createHiddenElement("item_description_"+n,t))})),0!==e.shipping()&&(i.appendChild(e.createHiddenElement("ship_method_name_1","Shipping")),i.appendChild(e.createHiddenElement("ship_method_price_1",parseFloat(e.shippingCost).toFixed(2))),i.appendChild(e.createHiddenElement("ship_method_currency_1",e.currency))),document.body.appendChild(i),i.submit(),document.body.removeChild(i)}else error("No merchant Id for google checkout supplied.");else error("Google Checkout only allows the USD and GBP for currency.")},e.emailCheckout=function(){this.entryURL="'+urlmuangay+'",window.open(this.entryURL,"_parent")},e.customCheckout=function(){var e=this,t="https://www.nganluong.vn/button_payment.php?receiver="+e.email,i="",n=0;e.each((function(e,t){""==i?i="&product_name="+e.name:i+=" , "+e.name,n+=e.price*e.quantity,e.quantity>1&&(i+=" x "+e.quantity)})),n="&price="+n,e.successUrl&&(i=i+"&return_url="+e.successUrl),t=t+encodeURI(i)+n+"&comments=Thanh%20to%C3%A1n%20%C4%91%E1%BA%B7t%20h%C3%A0ng%20tr%E1%BB%B1c%20tuy%E1%BA%BFn",window.open(t,"Ngan Luong","scrollbars,location,resizable,status")},e.load=function(){var e=this;if(e.items={},e.total=0,e.quantity=0,readCookie(simpleCart.storagePrefix+"simpleCart_chunks")){var t,i,n=1*readCookie(simpleCart.storagePrefix+"simpleCart_chunks"),a=[],r="",s=0;if(n>0){for(s=0;s<n;s++)a.push(readCookie(simpleCart.storagePrefix+"simpleCart_"+(1+s)));r=unescape(a.join("")).split("++")}for(var l=0,o=r.length;l<o;l++)t=r[l].split("||"),(i=new CartItem).parseValuesFromArray(t)&&(i.checkQuantityAndPrice(),e.items[i.id]=i)}e.isLoaded=!0},e.save=function(){var t,i,n="";i=1*readCookie(simpleCart.storagePrefix+"simpleCart_chunks");for(var a=0;a<i;a++)eraseCookie(simpleCart.storagePrefix+"simpleCart_"+a);eraseCookie(simpleCart.storagePrefix+"simpleCart_chunks"),e.each((function(e){n=n+"++"+e.print()}));for(var r=0,s=(t=simpleCart.chunk(n.substring(2),simpleCart.MAX_COOKIE_SIZE)).length;r<s;r++)createCookie(simpleCart.storagePrefix+"simpleCart_"+(1+r),t[r],e.cookieDuration);createCookie(simpleCart.storagePrefix+"simpleCart_chunks",""+t.length,e.cookieDuration)},e.initializeView=function(){var e=this;e.totalOutlets=getElementsByClassName("simpleCart_total"),e.quantityOutlets=getElementsByClassName("simpleCart_quantity"),e.cartDivs=getElementsByClassName("simpleCart_items"),e.taxCostOutlets=getElementsByClassName("simpleCart_taxCost"),e.taxRateOutlets=getElementsByClassName("simpleCart_taxRate"),e.shippingCostOutlets=getElementsByClassName("simpleCart_shippingCost"),e.finalTotalOutlets=getElementsByClassName("simpleCart_finalTotal"),e.addEventToArray(getElementsByClassName("simpleCart_checkout"),simpleCart.checkout,"click"),e.addEventToArray(getElementsByClassName("simpleCart_empty"),simpleCart.empty,"click"),e.Shelf=new Shelf,e.Shelf.readPage(),e.pageIsReady=!0},e.updateView=function(){e.updateViewTotals(),e.cartDivs&&e.cartDivs.length>0&&e.updateCartView()},e.updateViewTotals=function(){for(var t=[["quantity","none"],["total","currency"],["shippingCost","currency"],["taxCost","currency"],["taxRate","percentage"],["finalTotal","currency"]],i=0,n=t.length;i<n;i++)for(var a,r=t[i][0]+"Outlets",s=0,l=e[r].length;s<l;s++){switch(t[i][1]){case"none":default:a=""+e[t[i][0]];break;case"currency":a=e.valueToCurrencyString(e[t[i][0]]);break;case"percentage":a=e.valueToPercentageString(e[t[i][0]])}e[r][s].innerHTML=""+a}},e.updateCartView=function(){var t,i,n,a,r,s=[];t=document.createElement("div");for(var l=0,o=e.cartHeaders.length;l<o;l++){i=document.createElement("div"),r=e.cartHeaders[l].split("_"),i.innerHTML=e.print(r[0]),i.className="item"+r[0];for(var c=1,d=r.length;c<d;c++)"noheader"==r[c].toLowerCase()&&(i.style.display="none");t.appendChild(i)}t.className="cartHeaders",s[0]=t;var u="",m=0;e.each((function(r,l){m+=r.price*r.quantity,u+=" - "+r.name+" -- ( "+number_format(r.price,0,".",",")+" x "+r.quantity+" = "+number_format(r.price*r.quantity,0,".",",")+" )\n",t=document.createElement("div");for(var o=0,c=e.cartHeaders.length;o<c;o++)i=document.createElement("div"),n=e.cartHeaders[o].split("_"),a=e.createCartRow(n,r,a),i.innerHTML=a,i.className="item"+n[0],t.appendChild(i);t.className="itemContainer group",s[l+1]=t})),u+="\n\n - Tổng Tiền: "+number_format(m,0,".",",")+" (VNĐ)";try{document.getElementById("tongtien").innerText=number_format(m,0,".",",")+" (VNĐ)"}catch(e){}try{e.entry="entry_2010230860",document.getElementById(e.entry).innerHTML=u}catch(e){}for(var p=0,h=e.cartDivs.length;p<h;p++){var g=e.cartDivs[p];if(g.childNodes&&g.appendChild){for(;g.childNodes[0];)g.removeChild(g.childNodes[0]);for(var f=0,v=s.length;f<v;f++)g.appendChild(s[f])}}},e.createCartRow=function(t,i,n){switch(t[0].toLowerCase()){case"total":n=e.valueToCurrencyString(parseFloat(i.price)*parseInt(i.quantity,10));break;case"increment":n=e.valueToLink("+","javascript:;","onclick=\"simpleCart.items['"+i.id+"'].increment();\"");break;case"decrement":n=e.valueToLink("-","javascript:;","onclick=\"simpleCart.items['"+i.id+"'].decrement();\"");break;case"remove":n=e.valueToLink("","javascript:;","onclick=\"simpleCart.items['"+i.id+"'].remove();\"");break;case"price":n=e.valueToCurrencyString(i[t[0].toLowerCase()]?i[t[0].toLowerCase()]:" ");break;default:n=i[t[0].toLowerCase()]?i[t[0].toLowerCase()]:" "}for(var a=1,r=t.length;a<r;a++)switch(option=t[a].toLowerCase(),option){case"image":case"img":n=e.valueToImageString(n);break;case"input":n=e.valueToTextInput(n,"onchange=\"simpleCart.items['"+i.id+"'].set('"+t[0].toLowerCase()+"' , this.value);\"");break;case"div":case"span":case"h1":case"h2":case"h3":case"h4":case"p":n=e.valueToElement(option,n,"");break;case"noheader":break;default:error("unkown header option: "+option)}return n},e.addEventToArray=function(e,t,i){for(var n,a=0,r=e.length;a<r;a++)(n=e[a]).addEventListener?n.addEventListener(i,t,!1):n.attachEvent&&n.attachEvent("on"+i,t)},e.createHiddenElement=function(e,t){var i=document.createElement("input");return i.type="hidden",i.name=e,i.value=t,i},e.currencySymbol=function(){switch(e.currency){case CHF:return"CHF&nbsp;";case CZK:return"CZK&nbsp;";case DKK:return"DKK&nbsp;";case HUF:return"HUF&nbsp;";case NOK:return"NOK&nbsp;";case PLN:return"PLN&nbsp;";case SEK:return"SEK&nbsp;";case JPY:return"&yen;";case EUR:return"&euro;";case GBP:return"&pound;";case CHF:return"CHF&nbsp;";case THB:return"&#3647;";case USD:case VND:return"&nbsp;₫";case CAD:case AUD:case NZD:case HKD:case SGD:return"&#36;";default:return""}},e.currencyStringForPaypalCheckout=function(t){return"&#36;"==e.currencySymbol()?"$"+parseFloat(t).toFixed(2):""+parseFloat(t).toFixed(2)},e.valueToCurrencyString=function(t){var i=parseFloat(t);return isNaN(i)&&(i=0),i.toCurrency(e.currencySymbol())},e.valueToPercentageString=function(e){return parseFloat(100*e)+"%"},e.valueToImageString=function(e){return e.match(/<\s*img.*src\=/)?e:'<img src="'+e+'" />'},e.valueToTextInput=function(e,t){return'<input type="text" value="'+e+'" '+t+" />"},e.valueToLink=function(e,t,i){return'<a href="'+t+'" '+i+" >"+e+"</a>"},e.valueToElement=function(e,t,i){return"<"+e+" "+i+" > "+t+"</"+e+">"},e.hasItem=function(t){var i,n=!1;return e.each((function(a){i=!0,e.each(t,(function(e,n,r){"quantity"!==r&&"id"!==r&&t[r]!==a[r]&&(i=!1)})),i&&(n=a)})),n},e.ln={en_us:{quantity:"Quantity",price:"Price",total:"Total",decrement:"Decrement",increment:"Increment",remove:"Remove",tax:"Tax",shipping:"Shipping",image:"Image"}},e.language="en_us",e.print=function(e){var t=this;return t.ln[t.language]&&t.ln[t.language][e.toLowerCase()]?t.ln[t.language][e.toLowerCase()]:e},e.update=function(){simpleCart.isLoaded||simpleCart.load(),simpleCart.pageIsReady||simpleCart.initializeView(),e.updateTotals(),e.updateView(),e.save()},e.updateTotals=function(){e.total=0,e.quantity=0,e.each((function(t){t.quantity<1?t.remove():null!==t.quantity&&"undefined"!==t.quantity&&(e.quantity=parseInt(e.quantity,10)+parseInt(t.quantity,10)),t.price&&(e.total=parseFloat(e.total)+parseInt(t.quantity,10)*parseFloat(t.price))})),e.shippingCost=e.shipping(),e.taxCost=parseFloat(e.total)*e.taxRate,e.finalTotal=e.shippingCost+e.taxCost+e.total},e.shipping=function(){if(0===parseInt(e.quantity,10))return 0;var t=parseFloat(e.shippingFlatRate)+parseFloat(e.shippingTotalRate)*parseFloat(e.total)+parseFloat(e.shippingQuantityRate)*parseInt(e.quantity,10);return e.each((function(e){e.shipping&&("function"==typeof e.shipping?t+=parseFloat(e.shipping()):t+=parseFloat(e.shipping))})),t},e.initialize=function(){simpleCart.initializeView(),simpleCart.load(),simpleCart.update()}}function CartItem(){for(;simpleCart.items["c"+simpleCart.nextId];)simpleCart.nextId++;this.id="c"+simpleCart.nextId}function Shelf(){this.items={}}function ShelfItem(){this.id="s"+simpleCart.nextId++}function createCookie(e,t,i){if(i){var n=new Date;n.setTime(n.getTime()+24*i*60*60*1e3);var a="; expires="+n.toGMTString()}else a="";t=t.replace(/\=/g,"~"),document.cookie=e+"="+escape(t)+a+"; path=/"}function readCookie(e){for(var t=e+"=",i=document.cookie.split(";"),n=0;n<i.length;n++){for(var a=i[n];" "==a.charAt(0);)a=a.substring(1,a.length);if(0===a.indexOf(t))return unescape(a.substring(t.length,a.length)).replace(/\~/g,"=")}return null}function eraseCookie(e){createCookie(e,"",-1)}function number_format(e,t,i,n){var a=e,r=isNaN(t=Math.abs(t))?2:t,s=null==i?",":i,l=null==n?".":n,o=a<0?"-":"",c=parseInt(a=Math.abs(+a||0).toFixed(r))+"",d=(d=c.length)>3?d%3:0;return o+(d?c.substr(0,d)+l:"")+c.substr(d).replace(/(\d{3})(?=\d)/g,"$1"+l)+(r?s+Math.abs(a-c).toFixed(r).slice(2):"")}function error(e){try{console.log(e)}catch(e){}}imgr=[],showRandomImg=!0,labelnumposts=101,labelnumposts1=12,showPostDate=!0;var thumbnail_mode="no-float";summary_img=summary_noimg=0,relatednumposts=4,newimgwidth=29,newimgheight=19,sumtitle=35,labelsumtitle=64;var Custom="Custom",GoogleCheckout="GoogleCheckout",PayPal="PayPal",Email="Email",AustralianDollar="AUD",AUD="AUD",CanadianDollar="CAD",CAD="CAD",CzechKoruna="CZK",CZK="CZK",DanishKrone="DKK",DKK="DKK",Euro="EUR",EUR="EUR",HongKongDollar="HKD",HKD="HKD",HungarianForint="HUF",HUF="HUF",IsraeliNewSheqel="ILS",ILS="ILS",JapaneseYen="JPY",JPY="JPY",MexicanPeso="MXN",MXN="MXN",NorwegianKrone="NOK",NOK="NOK",NewZealandDollar="NZD",NZD="NZD",PolishZloty="PLN",PLN="PLN",PoundSterling="GBP",GBP="GBP",SingaporeDollar="SGD",SGD="SGD",SwedishKrona="SEK",SEK="SEK",SwissFranc="CHF",CHF="CHF",ThaiBaht="THB",THB="THB",USDollar="USD",USD="USD",VND="VND",CryptoJS=CryptoJS||function(e,t){var i={},n=i.lib={},a=function(){},r=n.Base={extend:function(e){a.prototype=this;var t=new a;return e&&t.mixIn(e),t.hasOwnProperty("init")||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},s=n.WordArray=r.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=null!=t?t:4*e.length},toString:function(e){return(e||o).stringify(this)},concat:function(e){var t=this.words,i=e.words,n=this.sigBytes;if(e=e.sigBytes,this.clamp(),n%4)for(var a=0;a<e;a++)t[n+a>>>2]|=(i[a>>>2]>>>24-a%4*8&255)<<24-(n+a)%4*8;else if(65535<i.length)for(a=0;a<e;a+=4)t[n+a>>>2]=i[a>>>2];else t.push.apply(t,i);return this.sigBytes+=e,this},clamp:function(){var t=this.words,i=this.sigBytes;t[i>>>2]&=4294967295<<32-i%4*8,t.length=e.ceil(i/4)},clone:function(){var e=r.clone.call(this);return e.words=this.words.slice(0),e},random:function(t){for(var i=[],n=0;n<t;n+=4)i.push(4294967296*e.random()|0);return new s.init(i,t)}}),l=i.enc={},o=l.Hex={stringify:function(e){var t=e.words;e=e.sigBytes;for(var i=[],n=0;n<e;n++){var a=t[n>>>2]>>>24-n%4*8&255;i.push((a>>>4).toString(16)),i.push((15&a).toString(16))}return i.join("")},parse:function(e){for(var t=e.length,i=[],n=0;n<t;n+=2)i[n>>>3]|=parseInt(e.substr(n,2),16)<<24-n%8*4;return new s.init(i,t/2)}},c=l.Latin1={stringify:function(e){var t=e.words;e=e.sigBytes;for(var i=[],n=0;n<e;n++)i.push(String.fromCharCode(t[n>>>2]>>>24-n%4*8&255));return i.join("")},parse:function(e){for(var t=e.length,i=[],n=0;n<t;n++)i[n>>>2]|=(255&e.charCodeAt(n))<<24-n%4*8;return new s.init(i,t)}},d=l.Utf8={stringify:function(e){try{return decodeURIComponent(escape(c.stringify(e)))}catch(e){throw Error("Malformed UTF-8 data")}},parse:function(e){return c.parse(unescape(encodeURIComponent(e)))}},u=n.BufferedBlockAlgorithm=r.extend({reset:function(){this._data=new s.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=d.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var i=this._data,n=i.words,a=i.sigBytes,r=this.blockSize,l=a/(4*r);if(t=(l=t?e.ceil(l):e.max((0|l)-this._minBufferSize,0))*r,a=e.min(4*t,a),t){for(var o=0;o<t;o+=r)this._doProcessBlock(n,o);o=n.splice(0,t),i.sigBytes-=a}return new s.init(o,a)},clone:function(){var e=r.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0});n.Hasher=u.extend({cfg:r.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){u.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(t,i){return new e.init(i).finalize(t)}},_createHmacHelper:function(e){return function(t,i){return new m.HMAC.init(e,i).finalize(t)}}});var m=i.algo={};return i}(Math);!function(e){function t(e,t,i,n,a,r,s){return((e=e+(t&i|~t&n)+a+s)<<r|e>>>32-r)+t}function i(e,t,i,n,a,r,s){return((e=e+(t&n|i&~n)+a+s)<<r|e>>>32-r)+t}function n(e,t,i,n,a,r,s){return((e=e+(t^i^n)+a+s)<<r|e>>>32-r)+t}function a(e,t,i,n,a,r,s){return((e=e+(i^(t|~n))+a+s)<<r|e>>>32-r)+t}for(var r=CryptoJS,s=(o=r.lib).WordArray,l=o.Hasher,o=r.algo,c=[],d=0;64>d;d++)c[d]=4294967296*e.abs(e.sin(d+1))|0;o=o.MD5=l.extend({_doReset:function(){this._hash=new s.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,r){for(var s=0;16>s;s++){var l=e[o=r+s];e[o]=16711935&(l<<8|l>>>24)|4278255360&(l<<24|l>>>8)}s=this._hash.words;var o=e[r+0],d=(l=e[r+1],e[r+2]),u=e[r+3],m=e[r+4],p=e[r+5],h=e[r+6],g=e[r+7],f=e[r+8],v=e[r+9],y=e[r+10],b=e[r+11],x=e[r+12],C=e[r+13],w=e[r+14],k=e[r+15],T=t(T=s[0],_=s[1],H=s[2],O=s[3],o,7,c[0]),O=t(O,T,_,H,l,12,c[1]),H=t(H,O,T,_,d,17,c[2]),_=t(_,H,O,T,u,22,c[3]);T=t(T,_,H,O,m,7,c[4]),O=t(O,T,_,H,p,12,c[5]),H=t(H,O,T,_,h,17,c[6]),_=t(_,H,O,T,g,22,c[7]),T=t(T,_,H,O,f,7,c[8]),O=t(O,T,_,H,v,12,c[9]),H=t(H,O,T,_,y,17,c[10]),_=t(_,H,O,T,b,22,c[11]),T=t(T,_,H,O,x,7,c[12]),O=t(O,T,_,H,C,12,c[13]),H=t(H,O,T,_,w,17,c[14]),T=i(T,_=t(_,H,O,T,k,22,c[15]),H,O,l,5,c[16]),O=i(O,T,_,H,h,9,c[17]),H=i(H,O,T,_,b,14,c[18]),_=i(_,H,O,T,o,20,c[19]),T=i(T,_,H,O,p,5,c[20]),O=i(O,T,_,H,y,9,c[21]),H=i(H,O,T,_,k,14,c[22]),_=i(_,H,O,T,m,20,c[23]),T=i(T,_,H,O,v,5,c[24]),O=i(O,T,_,H,w,9,c[25]),H=i(H,O,T,_,u,14,c[26]),_=i(_,H,O,T,f,20,c[27]),T=i(T,_,H,O,C,5,c[28]),O=i(O,T,_,H,d,9,c[29]),H=i(H,O,T,_,g,14,c[30]),T=n(T,_=i(_,H,O,T,x,20,c[31]),H,O,p,4,c[32]),O=n(O,T,_,H,f,11,c[33]),H=n(H,O,T,_,b,16,c[34]),_=n(_,H,O,T,w,23,c[35]),T=n(T,_,H,O,l,4,c[36]),O=n(O,T,_,H,m,11,c[37]),H=n(H,O,T,_,g,16,c[38]),_=n(_,H,O,T,y,23,c[39]),T=n(T,_,H,O,C,4,c[40]),O=n(O,T,_,H,o,11,c[41]),H=n(H,O,T,_,u,16,c[42]),_=n(_,H,O,T,h,23,c[43]),T=n(T,_,H,O,v,4,c[44]),O=n(O,T,_,H,x,11,c[45]),H=n(H,O,T,_,k,16,c[46]),T=a(T,_=n(_,H,O,T,d,23,c[47]),H,O,o,6,c[48]),O=a(O,T,_,H,g,10,c[49]),H=a(H,O,T,_,w,15,c[50]),_=a(_,H,O,T,p,21,c[51]),T=a(T,_,H,O,x,6,c[52]),O=a(O,T,_,H,u,10,c[53]),H=a(H,O,T,_,y,15,c[54]),_=a(_,H,O,T,l,21,c[55]),T=a(T,_,H,O,f,6,c[56]),O=a(O,T,_,H,k,10,c[57]),H=a(H,O,T,_,h,15,c[58]),_=a(_,H,O,T,C,21,c[59]),T=a(T,_,H,O,m,6,c[60]),O=a(O,T,_,H,b,10,c[61]),H=a(H,O,T,_,d,15,c[62]),_=a(_,H,O,T,v,21,c[63]);s[0]=s[0]+T|0,s[1]=s[1]+_|0,s[2]=s[2]+H|0,s[3]=s[3]+O|0},_doFinalize:function(){var t=this._data,i=t.words,n=8*this._nDataBytes,a=8*t.sigBytes;i[a>>>5]|=128<<24-a%32;var r=e.floor(n/4294967296);for(i[15+(a+64>>>9<<4)]=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8),i[14+(a+64>>>9<<4)]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8),t.sigBytes=4*(i.length+1),this._process(),i=(t=this._hash).words,n=0;4>n;n++)a=i[n],i[n]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8);return t},clone:function(){var e=l.clone.call(this);return e._hash=this._hash.clone(),e}}),r.MD5=l._createHelper(o),r.HmacMD5=l._createHmacHelper(o)}(Math),CartItem.prototype.set=function(e,t){"function"!=typeof this[e=e.toLowerCase()]&&"id"!==e?("quantity"==e?(t=(t=t.replace(/[^(\d|\.)]*/gi,"")).replace(/,*/gi,""),t=parseInt(t,10)):"price"==e&&(t=(t=t.replace(/[^(\d|\.)]*/gi,"")).replace(/,*/gi,""),t=parseFloat(t)),"number"==typeof t&&isNaN(t)?error("Improperly formatted input."):(t.match(/\~|\=/)&&error("Special character ~ or = not allowed: "+t),t=t.replace(/\~|\=/g,""),this[e]=t,this.checkQuantityAndPrice())):error("Cannot change "+e+", this is a reserved field."),simpleCart.update()},CartItem.prototype.increment=function(){this.quantity=parseInt(this.quantity,10)+1,simpleCart.update()},CartItem.prototype.decrement=function(){parseInt(this.quantity,10)<2?this.remove():(this.quantity=parseInt(this.quantity,10)-1,simpleCart.update())},CartItem.prototype.print=function(){var e="";return simpleCart.each(this,(function(t,i,n){e+=escape(n)+"="+escape(t)+"||"})),e.substring(0,e.length-2)},CartItem.prototype.checkQuantityAndPrice=function(){this.quantity&&null!=this.quantity&&"undefined"!=this.quantity?(this.quantity=(""+this.quantity).replace(/,*/gi,""),this.quantity=parseInt((""+this.quantity).replace(/[^(\d|\.)]*/gi,""),10),isNaN(this.quantity)&&(error("Quantity is not a number."),this.quantity=1)):(this.quantity=1,error("No quantity for item.")),this.price&&null!=this.price&&"undefined"!=this.price?(this.price=(""+this.price).replace(/,*/gi,""),this.price=parseFloat((""+this.price).replace(/[^(\d|\.)]*/gi,"")),isNaN(this.price)&&(error("Price is not a number."),this.price=0)):(this.price=0,error("No price for item or price not properly formatted."))},CartItem.prototype.parseValuesFromArray=function(e){if(e&&e.length&&e.length>0){for(var t=0,i=e.length;t<i;t++){e[t]=e[t].replace(/\|\|/g,"| |"),e[t]=e[t].replace(/\+\+/g,"+ +"),e[t].match(/\~/)&&error("Special character ~ not allowed: "+e[t]),e[t]=e[t].replace(/\~/g,"");var n=e[t].split("=");if(n.length>1){if(n.length>2)for(var a=2,r=n.length;a<r;a++)n[1]=n[1]+"="+n[a];this[unescape(n[0]).toLowerCase()]=unescape(n[1])}}return!0}return!1},CartItem.prototype.remove=function(){simpleCart.remove(this.id),simpleCart.update()},Shelf.prototype.readPage=function(){this.items={};var e,t=getElementsByClassName("simpleCart_shelfItem");me=this;for(var i=0,n=t.length;i<n;i++)e=new ShelfItem,me.checkChildren(t[i],e),me.items[e.id]=e},Shelf.prototype.checkChildren=function(e,t){if(e.childNodes)for(var i=0;e.childNodes[i];i++){var n=e.childNodes[i];if(n.className&&n.className.match(/item_[^ ]+/)){var a=/item_[^ ]+/.exec(n.className)[0].split("_");if("add"==a[1]||"Add"==a[1]){var r=[];r.push(n);var s=simpleCart.Shelf.addToCart(t.id);simpleCart.addEventToArray(r,s,"click"),n.id=t.id}else t[a[1]]=n}n.childNodes[0]&&this.checkChildren(n,t)}},Shelf.prototype.empty=function(){this.items={}},Shelf.prototype.addToCart=function(e){return function(){simpleCart.Shelf.items[e]?simpleCart.Shelf.items[e].addToCart():error("Shelf item with id of "+e+" does not exist.")}},ShelfItem.prototype.remove=function(){simpleCart.Shelf.items[this.id]=null},ShelfItem.prototype.addToCart=function(){var e,t,i=[];for(t in this)if("function"!=typeof this[t]&&"id"!==t){switch(e="",t){case"price":this[t].value?e=this[t].value:this[t].innerHTML&&(e=this[t].innerHTML),e=(e=e.replace(/[^(\d|\.)]*/gi,"")).replace(/,*/,"");break;case"image":e=this[t].src;break;default:e=this[t].value?this[t].value:this[t].innerHTML?this[t].innerHTML:this[t].src?this[t].src:this[t]}i.push(t+"="+e)}simpleCart.add(i)};var getElementsByClassName=function(e,t,i){return getElementsByClassName=document.getElementsByClassName?function(e,t,i){for(var n,a=(i=i||document).getElementsByClassName(e),r=t?new RegExp("\\b"+t+"\\b","i"):null,s=[],l=0,o=a.length;l<o;l+=1)n=a[l],r&&!r.test(n.nodeName)||s.push(n);return s}:document.evaluate?function(e,t,i){t=t||"*",i=i||document;for(var n,a,r=e.split(" "),s="",l="http://www.w3.org/1999/xhtml",o=document.documentElement.namespaceURI===l?l:null,c=[],d=0,u=r.length;d<u;d+=1)s+="[contains(concat(' ', @class, ' '), ' "+r[d]+" ')]";try{n=document.evaluate(".//"+t+s,i,o,0,null)}catch(e){n=document.evaluate(".//"+t+s,i,null,0,null)}for(;a=n.iterateNext();)c.push(a);return c}:function(e,t,i){t=t||"*",i=i||document;for(var n,a,r=e.split(" "),s=[],l="*"===t&&i.all?i.all:i.getElementsByTagName(t),o=[],c=0,d=r.length;c<d;c+=1)s.push(new RegExp("(^|\\s)"+r[c]+"(\\s|$)"));for(var u=0,m=l.length;u<m;u+=1){n=l[u],a=!1;for(var p=0,h=s.length;p<h&&(a=s[p].test(n.className));p+=1);a&&o.push(n)}return o},getElementsByClassName(e,t,i)};String.prototype.reverse=function(){return this.split("").reverse().join("")},Number.prototype.withCommas=function(){for(var e=6,t=parseFloat(this).toFixed(0).toString().reverse();e<t.length;)t=t.substring(0,e)+","+t.substring(e),e+=4;return t.reverse()},Number.prototype.toCurrency=function(){return this.withCommas()+(arguments[0]?arguments[0]:"$")};var simpleCart=new Cart;"undefined"!=typeof jQuery?$(document).ready((function(){simpleCart.initialize()})):"undefined"!=typeof Prototype&&Event.observe(window,"load",(function(){simpleCart.initialize()}));




$(document).ready(function()
	{
	$('a[name="breadcrumbs"]').before($('#Theme-breadcrumbs').html());
	$('#Theme-breadcrumbs').html('');
}
);




   function countdown_thuctd(id, timecountdown) {
   	// Thiết lập thời gian đích mà ta sẽ đếm
   	var countDownDate = new Date(timecountdown).getTime();
   	var x = setInterval(function () {
   		var now = new Date().getTime();
   		var distance = countDownDate - now;
   		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
   		document.getElementById(id).innerHTML = " 0 ngày : " + " 0 giờ : " + minutes + " phút : " + seconds + " giây : " + " Mã ưu đãi: TIETKIEM";
   		if (distance < 0) {
   			clearInterval(x);
   			document.getElementById(id).innerHTML = "Kết thúc";
   		}
   	}, 1000);
   }


    var blogHomepageUrl = &quot;<data:blog.homepageUrl/>&quot;;






/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(window, document, $) {

	var isInputSupported = 'placeholder' in document.createElement('input');
	var isTextareaSupported = 'placeholder' in document.createElement('textarea');
	var prototype = $.fn;
	var valHooks = $.valHooks;
	var propHooks = $.propHooks;
	var hooks;
	var placeholder;

	if (isInputSupported && isTextareaSupported) {

		placeholder = prototype.placeholder = function() {
			return this;
		};

		placeholder.input = placeholder.textarea = true;

	} else {

		placeholder = prototype.placeholder = function() {
			var $this = this;
			$this
				.filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
				.not('.placeholder')
				.bind({
					'focus.placeholder': clearPlaceholder,
					'blur.placeholder': setPlaceholder
				})
				.data('placeholder-enabled', true)
				.trigger('blur.placeholder');
			return $this;
		};

		placeholder.input = isInputSupported;
		placeholder.textarea = isTextareaSupported;

		hooks = {
			'get': function(element) {
				var $element = $(element);

				var $passwordInput = $element.data('placeholder-password');
				if ($passwordInput) {
					return $passwordInput[0].value;
				}

				return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
			},
			'set': function(element, value) {
				var $element = $(element);

				var $passwordInput = $element.data('placeholder-password');
				if ($passwordInput) {
					return $passwordInput[0].value = value;
				}

				if (!$element.data('placeholder-enabled')) {
					return element.value = value;
				}
				if (value == '') {
					element.value = value;
					// Issue #56: Setting the placeholder causes problems if the element continues to have focus.
					if (element != document.activeElement) {
						// We can't use `triggerHandler` here because of dummy text/password inputs :(
						setPlaceholder.call(element);
					}
				} else if ($element.hasClass('placeholder')) {
					clearPlaceholder.call(element, true, value) || (element.value = value);
				} else {
					element.value = value;
				}
				// `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
				return $element;
			}
		};

		if (!isInputSupported) {
			valHooks.input = hooks;
			propHooks.value = hooks;
		}
		if (!isTextareaSupported) {
			valHooks.textarea = hooks;
			propHooks.value = hooks;
		}

		$(function() {
			// Look for forms
			$(document).delegate('form', 'submit.placeholder', function() {
				// Clear the placeholder values so they don't get submitted
				var $inputs = $('.placeholder', this).each(clearPlaceholder);
				setTimeout(function() {
					$inputs.each(setPlaceholder);
				}, 10);
			});
		});

		// Clear placeholder values upon page reload
		$(window).bind('beforeunload.placeholder', function() {
			$('.placeholder').each(function() {
				this.value = '';
			});
		});

	}

	function args(elem) {
		// Return an object of element attributes
		var newAttrs = {};
		var rinlinejQuery = /^jQuery\d+$/;
		$.each(elem.attributes, function(i, attr) {
			if (attr.specified && !rinlinejQuery.test(attr.name)) {
				newAttrs[attr.name] = attr.value;
			}
		});
		return newAttrs;
	}

	function clearPlaceholder(event, value) {
		var input = this;
		var $input = $(input);
		if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
			if ($input.data('placeholder-password')) {
				$input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
				// If `clearPlaceholder` was called from `$.valHooks.input.set`
				if (event === true) {
					return $input[0].value = value;
				}
				$input.focus();
			} else {
				input.value = '';
				$input.removeClass('placeholder');
				input == document.activeElement && input.select();
			}
		}
	}

	function setPlaceholder() {
		var $replacement;
		var input = this;
		var $input = $(input);
		var id = this.id;
		if (input.value == '') {
			if (input.type == 'password') {
				if (!$input.data('placeholder-textinput')) {
					try {
						$replacement = $input.clone().attr({ 'type': 'text' });
					} catch(e) {
						$replacement = $('<input>').attr($.extend(args(this), { 'type': 'text' }));
					}
					$replacement
						.removeAttr('name')
						.data({
							'placeholder-password': $input,
							'placeholder-id': id
						})
						.bind('focus.placeholder', clearPlaceholder);
					$input
						.data({
							'placeholder-textinput': $replacement,
							'placeholder-id': id
						})
						.before($replacement);
				}
				$input = $input.removeAttr('id').hide().prev().attr('id', id).show();
				// Note: `$input[0] != input` now!
			}
			$input.addClass('placeholder');
			$input[0].value = $input.attr('placeholder');
		} else {
			$input.removeClass('placeholder');
		}
	}

}(this, document, jQuery));






/**
 * author Remy Sharp
 * url http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 */
(function ($) {
    function getViewportHeight() {
        var height = window.innerHeight; // Safari, Opera
        var mode = document.compatMode;

        if ( (mode || !$.support.boxModel) ) { // IE, Gecko
            height = (mode == 'CSS1Compat') ?
            document.documentElement.clientHeight : // Standards
            document.body.clientHeight; // Quirks
        }

        return height;
    }

    $(window).scroll(function () {
        var vpH = getViewportHeight(),
            scrolltop = (document.documentElement.scrollTop ?
                document.documentElement.scrollTop :
                document.body.scrollTop),
            elems = [];
        
        // naughty, but this is how it knows which elements to check for
        $.each($.cache, function () {
            if (this.events && this.events.inview) {
                elems.push(this.handle.elem);
            }
        });

        if (elems.length) {
            $(elems).each(function () {
                var $el = $(this),
                    top = $el.offset().top,
                    height = $el.height(),
                    inview = $el.data('inview') || false;

                if (scrolltop > (top + height) || scrolltop + vpH < top) {
                    if (inview) {
                        $el.data('inview', false);
                        $el.trigger('inview', [ false ]);                        
                    }
                } else if (scrolltop < (top + height)) {
                    if (!inview) {
                        $el.data('inview', true);
                        $el.trigger('inview', [ true ]);
                    }
                }
            });
        }
    });
    
    // kick the event to pick up any elements already in view.
    // note however, this only works if the plugin is included after the elements are bound to 'inview'
    $(function () {
        $(window).scroll();
    });
})(jQuery);





document.addEventListener("DOMContentLoaded", function() {
    // Chỉ chạy các script này trên trang chủ
    if (window.location.pathname === '/') {
        // Tải danh sách Khóa học (dùng hàm có slider)
        const khoaHocUrl = '/feeds/posts/default/-/khóa%20học?max-results=6&orderby=published&alt=json-in-script';
        loadContentAsync(khoaHocUrl, renderProductItem, 'danh-sach-khoa-hoc');

        // Tải danh sách Sản phẩm (dùng hàm có slider)
        const sanPhamUrl = '/feeds/posts/default/-/Sản%20phẩm%20mới?max-results=6&orderby=published&alt=json-in-script';
        loadContentAsync(sanPhamUrl, renderProductItem, 'danh-sach-san-pham');

        // Tải danh sách Tin Tức (dùng hàm không có slider)
        const allPostsUrl = '/feeds/posts/default?max-results=50&orderby=published&alt=json-in-script';
		loadAndFilterNewsSlider(allPostsUrl, renderNewsItem, 'news-list-container', 12);
    }
});



/*!
 * SlickNav Responsive Mobile Menu v1.0.4
 * (c) 2015 Josh Cope
 * licensed under MIT
 */
!function(e,n){function t(n,t){this.element=n,this.settings=e.extend({},a,t),this._defaults=a,this._name=i,this.init()}var a={label:"MENU",duplicate:!0,duration:200,easingOpen:"swing",easingClose:"swing",closedSymbol:"&#9658;",openedSymbol:"&#9660;",prependTo:"body",appendTo:"",parentTag:"a",closeOnClick:!1,allowParentLinks:!1,nestedParentLinks:!0,showChildren:!1,removeIds:!1,removeClasses:!1,brand:"",init:function(){},beforeOpen:function(){},beforeClose:function(){},afterOpen:function(){},afterClose:function(){}},i="slicknav",s="slicknav";t.prototype.init=function(){var t,a,i=this,l=e(this.element),o=this.settings;if(o.duplicate?(i.mobileNav=l.clone(),i.mobileNav.removeAttr("id"),i.mobileNav.find("*").each(function(n,t){e(t).removeAttr("id")})):(i.mobileNav=l,i.mobileNav.removeAttr("id"),i.mobileNav.find("*").each(function(n,t){e(t).removeAttr("id")})),o.removeClasses&&(i.mobileNav.removeAttr("class"),i.mobileNav.find("*").each(function(n,t){e(t).removeAttr("class")})),t=s+"_icon",""===o.label&&(t+=" "+s+"_no-text"),"a"==o.parentTag&&(o.parentTag='a'),i.mobileNav.attr("class",s+"_nav"),a=e('<div class="'+s+'_menu"></div>'),""!==o.brand){var r=e('<div class="'+s+'_brand">'+o.brand+"</div>");e(a).append(r)}i.btn=e(["<"+o.parentTag+' aria-haspopup="true" tabindex="0" class="'+s+"_btn "+s+'_collapsed">','<span class="'+s+'_menutxt">'+o.label+"</span>",'<span class="'+t+'">','<span class="'+s+'_icon-bar"></span>','<span class="'+s+'_icon-bar"></span>','<span class="'+s+'_icon-bar"></span>',"</span>","</"+o.parentTag+">"].join("")),e(a).append(i.btn),""!==o.appendTo?e(o.appendTo).append(a):e(o.prependTo).prepend(a),a.append(i.mobileNav);var d=i.mobileNav.find("li");e(d).each(function(){var n=e(this),t={};if(t.children=n.children("ul").attr("role","menu"),n.data("menu",t),t.children.length>0){var a=n.contents(),l=!1,r=[];e(a).each(function(){return e(this).is("ul")?!1:(r.push(this),void(e(this).is("a")&&(l=!0)))});var d=e("<"+o.parentTag+' role="menuitem" aria-haspopup="true" tabindex="-1" class="'+s+'_item"/>');if(o.allowParentLinks&&!o.nestedParentLinks&&l)e(r).wrapAll('<span class="'+s+"_parent-link "+s+'_row"/>').parent();else{var p=e(r).wrapAll(d).parent();p.addClass(s+"_row")}n.addClass(o.showChildren?s+"_open":s+"_collapsed"),n.addClass(s+"_parent");var c=e('<span class="'+s+'_arrow">'+(o.showChildren?o.openedSymbol:o.closedSymbol)+"</span>");o.allowParentLinks&&!o.nestedParentLinks&&l&&(c=c.wrap(d).parent()),e(r).last().after(c)}else 0===n.children().length&&n.addClass(s+"_txtnode");n.children("a").attr("role","menuitem").click(function(n){o.closeOnClick&&!e(n.target).parent().closest("li").hasClass(s+"_parent")&&e(i.btn).click()}),o.closeOnClick&&o.allowParentLinks&&(n.children("a").children("a").click(function(){e(i.btn).click()}),n.find("."+s+"_parent-link a:not(."+s+"_item)").click(function(){e(i.btn).click()}))}),e(d).each(function(){var n=e(this).data("menu");o.showChildren||i._visibilityToggle(n.children,null,!1,null,!0)}),i._visibilityToggle(i.mobileNav,null,!1,"init",!0),i.mobileNav.attr("role","menu"),e(n).mousedown(function(){i._outlines(!1)}),e(n).keyup(function(){i._outlines(!0)}),e(i.btn).click(function(e){e.preventDefault(),i._menuToggle()}),i.mobileNav.on("click","."+s+"_item",function(n){n.preventDefault(),i._itemClick(e(this))}),e(i.btn).keydown(function(e){var n=e||event;13==n.keyCode&&(e.preventDefault(),i._menuToggle())}),i.mobileNav.on("keydown","."+s+"_item",function(n){var t=n||event;13==t.keyCode&&(n.preventDefault(),i._itemClick(e(n.target)))}),o.allowParentLinks&&o.nestedParentLinks&&e("."+s+"_item a").click(function(e){e.stopImmediatePropagation()})},t.prototype._menuToggle=function(){var e=this,n=e.btn,t=e.mobileNav;n.hasClass(s+"_collapsed")?(n.removeClass(s+"_collapsed"),n.addClass(s+"_open")):(n.removeClass(s+"_open"),n.addClass(s+"_collapsed")),n.addClass(s+"_animating"),e._visibilityToggle(t,n.parent(),!0,n)},t.prototype._itemClick=function(e){var n=this,t=n.settings,a=e.data("menu");a||(a={},a.arrow=e.children("."+s+"_arrow"),a.ul=e.next("ul"),a.parent=e.parent(),a.parent.hasClass(s+"_parent-link")&&(a.parent=e.parent().parent(),a.ul=e.parent().next("ul")),e.data("menu",a)),a.parent.hasClass(s+"_collapsed")?(a.arrow.html(t.openedSymbol),a.parent.removeClass(s+"_collapsed"),a.parent.addClass(s+"_open"),a.parent.addClass(s+"_animating"),n._visibilityToggle(a.ul,a.parent,!0,e)):(a.arrow.html(t.closedSymbol),a.parent.addClass(s+"_collapsed"),a.parent.removeClass(s+"_open"),a.parent.addClass(s+"_animating"),n._visibilityToggle(a.ul,a.parent,!0,e))},t.prototype._visibilityToggle=function(n,t,a,i,l){var o=this,r=o.settings,d=o._getActionItems(n),p=0;a&&(p=r.duration),n.hasClass(s+"_hidden")?(n.removeClass(s+"_hidden"),l||r.beforeOpen(i),n.slideDown(p,r.easingOpen,function(){e(i).removeClass(s+"_animating"),e(t).removeClass(s+"_animating"),l||r.afterOpen(i)}),n.attr("aria-hidden","false"),d.attr("tabindex","0"),o._setVisAttr(n,!1)):(n.addClass(s+"_hidden"),l||r.beforeClose(i),n.slideUp(p,this.settings.easingClose,function(){n.attr("aria-hidden","true"),d.attr("tabindex","-1"),o._setVisAttr(n,!0),n.hide(),e(i).removeClass(s+"_animating"),e(t).removeClass(s+"_animating"),l?"init"==i&&r.init():r.afterClose(i)}))},t.prototype._setVisAttr=function(n,t){var a=this,i=n.children("li").children("ul").not("."+s+"_hidden");i.each(t?function(){var n=e(this);n.attr("aria-hidden","true");var i=a._getActionItems(n);i.attr("tabindex","-1"),a._setVisAttr(n,t)}:function(){var n=e(this);n.attr("aria-hidden","false");var i=a._getActionItems(n);i.attr("tabindex","0"),a._setVisAttr(n,t)})},t.prototype._getActionItems=function(e){var n=e.data("menu");if(!n){n={};var t=e.children("li"),a=t.find("a");n.links=a.add(t.find("."+s+"_item")),e.data("menu",n)}return n.links},t.prototype._outlines=function(n){n?e("."+s+"_item, ."+s+"_btn").css("outline",""):e("."+s+"_item, ."+s+"_btn").css("outline","none")},t.prototype.toggle=function(){var e=this;e._menuToggle()},t.prototype.open=function(){var e=this;e.btn.hasClass(s+"_collapsed")&&e._menuToggle()},t.prototype.close=function(){var e=this;e.btn.hasClass(s+"_open")&&e._menuToggle()},e.fn[i]=function(n){var a=arguments;if(void 0===n||"object"==typeof n)return this.each(function(){e.data(this,"plugin_"+i)||e.data(this,"plugin_"+i,new t(this,n))});if("string"==typeof n&&"_"!==n[0]&&"init"!==n){var s;return this.each(function(){var l=e.data(this,"plugin_"+i);l instanceof t&&"function"==typeof l[n]&&(s=l[n].apply(l,Array.prototype.slice.call(a,1)))}),void 0!==s?s:this}}}(jQuery,document,window);






jQuery(document).ready(function ($) {

    $('#mmenu').slicknav({
        label:'', 
        prependTo:'#header-mobile-menu'
    });

    var lastId,
            topMenu = $("#top-navigation"),
            topMenuHeight = topMenu.outerHeight(),
            // All list items
            menuItems = topMenu.find("a"),
            // Anchors corresponding to menu items
            scrollItems = menuItems.map(function () {
                var href = $(this).attr("href");
                if(href.indexOf("#") === 0){
                    var item = $($(this).attr("href"));
                    if (item.length) {
                        return item;
                    }
                }
            });

    // Khởi tạo FlexSlider cho phần khách hàng (ĐÃ SỬA LỖI)
$('#client-slider-container').flexslider({
    animation: "slide",
    animationLoop: true,
    itemWidth: 210,
    itemMargin: 20,
    minItems: 2,
    maxItems: 5,
    move: 1,
    controlNav: false, // Ẩn các chấm tròn điều hướng
    directionNav: true, // Hiện mũi tên trái/phải
    slideshow: true, // Tự động chạy
    slideshowSpeed: 3000,
    pauseOnHover: true
});

    $('input, textarea').placeholder();

    // Bind to scroll
    $(window).scroll(function () {

        //Display or hide scroll to top button 
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
        if($(window).width() > 991){
            if($(window).scrollTop() > 100){
                $('.nav-header-fix').addClass('scroll-fixed');
            }else{
                $('.nav-header-fix').removeClass('scroll-fixed');
            }
        }else{
            if($(window).scrollTop() > 100){
                $('.nav-header-fix').addClass('scroll-fixed-mobile');
            }else{
                $('.nav-header-fix').removeClass('scroll-fixed-mobile');
            }
        }

        /******************************************************************
         * PHẦN SỬA LỖI NẰM Ở ĐÂY
         ******************************************************************/
        var fromTop = $(this).scrollTop() + topMenuHeight + 50;

        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });

        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Xóa class "active" khỏi tất cả các mục
            menuItems.parent().removeClass("active");
            // Chỉ thêm class "active" nếu có ID và dùng cú pháp selector đúng
            if (id) {
                menuItems.filter('[href="#' + id + '"]').parent().addClass('active');
            }
        }
         /******************************************************************
         * KẾT THÚC PHẦN SỬA LỖI
         ******************************************************************/
    });

    /*
    Function for scrolling to top
    ************************************/
    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $(window).load(function () {
        function filterPath(string) {
            return string.replace(/^\//, '').replace(/(index|default).[a-zA-Z]{3,4}$/, '').replace(/\/$/, '');
        }
        $('a[href*="#"]').each(function () {
            if (filterPath(location.pathname) == filterPath(this.pathname) && location.hostname == this.hostname && this.hash.replace(/#/, '')) {
                var $targetId = $(this.hash),
                        $targetAnchor = $('[name=' + this.hash.slice(1) + ']');
                var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;

                if ($target) {

                    $(this).click(function () {

                        //Hack collapse top navigation after clicking
                        topMenu.parent().attr('style', 'height:0px').removeClass('in'); //Close navigation
                        $('.navbar .btn-navbar').addClass('collapsed');

                        var targetOffset = $target.offset().top - 63;
                        $('html, body').animate({
                            scrollTop: targetOffset
                        }, 800);
                        return false;
                    });
                }
            }
        });
    });

    //Function for show or hide portfolio description.
    $.fn.showHide = function (options) {
        var defaults = {
            speed: 1000,
            easing: '',
            changeText: 0,
            showText: 'Show',
            hideText: 'Hide'
        };
        var options = $.extend(defaults, options);
        $(this).click(function () {
            $('.toggleDiv').slideUp(options.speed, options.easing);
            var toggleClick = $(this);
            var toggleDiv = $(this).attr('rel');
            $(toggleDiv).slideToggle(options.speed, options.easing, function () {
                if (options.changeText == 1) {
                    $(toggleDiv).is(":visible") ? toggleClick.text(options.hideText) : toggleClick.text(options.showText);
                }
            });
            return false;
        });
    };

    //Initial Show/Hide portfolio element.
    $('div.toggleDiv').hide();
    $('.show_hide').showHide({
        speed: 500,
        changeText: 0,
        showText: 'View',
        hideText: 'Close'
    });

    /************************
    Animate elements
    *************************/

    //Animate thumbnails 
    jQuery('.thumbnail').one('inview', function (event, visible) {
        if (visible == true) {
            jQuery(this).addClass("animated fadeInDown");
        } else {
            jQuery(this).removeClass("animated fadeInDown");
        }
    });

    //animate first team member
    jQuery('#first-person').bind('inview', function (event, visible) {
        if (visible == true) {
            jQuery('#first-person').addClass("animated pulse");
        } else {
            jQuery('#first-person').removeClass("animated pulse");
        }
    });

    //animate second team member
    jQuery('#second-person').bind('inview', function (event, visible) {
        if (visible == true) {
            jQuery('#second-person').addClass("animated pulse");
        } else {
            jQuery('#second-person').removeClass("animated pulse");
        }
    });

    //animate third team member
    jQuery('#third-person').bind('inview', function (event, visible) {
        if (visible == true) {
            jQuery('#third-person').addClass("animated pulse");
        } else {
            jQuery('#third-person').removeClass("animated pulse");
        }
    });

    //Animate price columns
    jQuery('.testimonial').bind('inview', function (event, visible) {
        if (visible == true) {
            jQuery(this).addClass("animated fadeInDown");
        } else {
            jQuery(this).removeClass("animated fadeInDown");
        }
    });

    //Animate contact form
    jQuery('.contact-form').bind('inview', function (event, visible) {
        if (visible == true) {
            jQuery('.contact-form').addClass("animated bounceIn");
        } else {
            jQuery('.contact-form').removeClass("animated bounceIn");
        }
    });
});





		$(document).ready(function(){
			window.onload = function(e){
				var ha = location.hash;
				if(ha != ''){
					history.pushState(null , null , 'https://www.dutoancongtrinh.edu.vn');	
					$("#top-navigation li a[href="+ha+"]").trigger("click");
				}
			}
		})






/*
 * jQuery FlexSlider v2.2.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
!function(a){a.flexslider=function(b,c){var d=a(b);d.vars=a.extend({},a.flexslider.defaults,c);var j,e=d.vars.namespace,f=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,g=("ontouchstart"in window||f||window.DocumentTouch&&document instanceof DocumentTouch)&&d.vars.touch,h="click touchend MSPointerUp",i="",k="vertical"===d.vars.direction,l=d.vars.reverse,m=d.vars.itemWidth>0,n="fade"===d.vars.animation,o=""!==d.vars.asNavFor,p={},q=!0;a.data(b,"flexslider",d),p={init:function(){d.animating=!1,d.currentSlide=parseInt(d.vars.startAt?d.vars.startAt:0,10),isNaN(d.currentSlide)&&(d.currentSlide=0),d.animatingTo=d.currentSlide,d.atEnd=0===d.currentSlide||d.currentSlide===d.last,d.containerSelector=d.vars.selector.substr(0,d.vars.selector.search(" ")),d.slides=a(d.vars.selector,d),d.container=a(d.containerSelector,d),d.count=d.slides.length,d.syncExists=a(d.vars.sync).length>0,"slide"===d.vars.animation&&(d.vars.animation="swing"),d.prop=k?"top":"marginLeft",d.args={},d.manualPause=!1,d.stopped=!1,d.started=!1,d.startTimeout=null,d.transitions=!d.vars.video&&!n&&d.vars.useCSS&&function(){var a=document.createElement("div"),b=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var c in b)if(void 0!==a.style[b[c]])return d.pfx=b[c].replace("Perspective","").toLowerCase(),d.prop="-"+d.pfx+"-transform",!0;return!1}(),d.ensureAnimationEnd="",""!==d.vars.controlsContainer&&(d.controlsContainer=a(d.vars.controlsContainer).length>0&&a(d.vars.controlsContainer)),""!==d.vars.manualControls&&(d.manualControls=a(d.vars.manualControls).length>0&&a(d.vars.manualControls)),d.vars.randomize&&(d.slides.sort(function(){return Math.round(Math.random())-.5}),d.container.empty().append(d.slides)),d.doMath(),d.setup("init"),d.vars.controlNav&&p.controlNav.setup(),d.vars.directionNav&&p.directionNav.setup(),d.vars.keyboard&&(1===a(d.containerSelector).length||d.vars.multipleKeyboard)&&a(document).bind("keyup",function(a){var b=a.keyCode;if(!d.animating&&(39===b||37===b)){var c=39===b?d.getTarget("next"):37===b?d.getTarget("prev"):!1;d.flexAnimate(c,d.vars.pauseOnAction)}}),d.vars.mousewheel&&d.bind("mousewheel",function(a,b){a.preventDefault();var f=0>b?d.getTarget("next"):d.getTarget("prev");d.flexAnimate(f,d.vars.pauseOnAction)}),d.vars.pausePlay&&p.pausePlay.setup(),d.vars.slideshow&&d.vars.pauseInvisible&&p.pauseInvisible.init(),d.vars.slideshow&&(d.vars.pauseOnHover&&d.hover(function(){d.manualPlay||d.manualPause||d.pause()},function(){d.manualPause||d.manualPlay||d.stopped||d.play()}),d.vars.pauseInvisible&&p.pauseInvisible.isHidden()||(d.vars.initDelay>0?d.startTimeout=setTimeout(d.play,d.vars.initDelay):d.play())),o&&p.asNav.setup(),g&&d.vars.touch&&p.touch(),(!n||n&&d.vars.smoothHeight)&&a(window).bind("resize orientationchange focus",p.resize),d.find("img").attr("draggable","false"),setTimeout(function(){d.vars.start(d)},200)},asNav:{setup:function(){d.asNav=!0,d.animatingTo=Math.floor(d.currentSlide/d.move),d.currentItem=d.currentSlide,d.slides.removeClass(e+"active-slide").eq(d.currentItem).addClass(e+"active-slide"),f?(b._slider=d,d.slides.each(function(){var b=this;b._gesture=new MSGesture,b._gesture.target=b,b.addEventListener("MSPointerDown",function(a){a.preventDefault(),a.currentTarget._gesture&&a.currentTarget._gesture.addPointer(a.pointerId)},!1),b.addEventListener("MSGestureTap",function(b){b.preventDefault();var c=a(this),e=c.index();a(d.vars.asNavFor).data("flexslider").animating||c.hasClass("active")||(d.direction=d.currentItem<e?"next":"prev",d.flexAnimate(e,d.vars.pauseOnAction,!1,!0,!0))})})):d.slides.on(h,function(b){b.preventDefault();var c=a(this),f=c.index(),g=c.offset().left-a(d).scrollLeft();0>=g&&c.hasClass(e+"active-slide")?d.flexAnimate(d.getTarget("prev"),!0):a(d.vars.asNavFor).data("flexslider").animating||c.hasClass(e+"active-slide")||(d.direction=d.currentItem<f?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){d.manualControls?p.controlNav.setupManual():p.controlNav.setupPaging()},setupPaging:function(){var f,g,b="thumbnails"===d.vars.controlNav?"control-thumbs":"control-paging",c=1;if(d.controlNavScaffold=a('<ol class="'+e+"control-nav "+e+b+'"></ol>'),d.pagingCount>1)for(var j=0;j<d.pagingCount;j++){if(g=d.slides.eq(j),f="thumbnails"===d.vars.controlNav?'<img src="'+g.attr("data-thumb")+'"/>':"<a>"+c+"</a>","thumbnails"===d.vars.controlNav&&!0===d.vars.thumbCaptions){var k=g.attr("data-thumbcaption");""!=k&&void 0!=k&&(f+='<span class="'+e+'caption">'+k+"</span>")}d.controlNavScaffold.append("<li>"+f+"</li>"),c++}d.controlsContainer?a(d.controlsContainer).append(d.controlNavScaffold):d.append(d.controlNavScaffold),p.controlNav.set(),p.controlNav.active(),d.controlNavScaffold.delegate("a, img",h,function(b){if(b.preventDefault(),""===i||i===b.type){var c=a(this),f=d.controlNav.index(c);c.hasClass(e+"active")||(d.direction=f>d.currentSlide?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction))}""===i&&(i=b.type),p.setToClearWatchedEvent()})},setupManual:function(){d.controlNav=d.manualControls,p.controlNav.active(),d.controlNav.bind(h,function(b){if(b.preventDefault(),""===i||i===b.type){var c=a(this),f=d.controlNav.index(c);c.hasClass(e+"active")||(d.direction=f>d.currentSlide?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction))}""===i&&(i=b.type),p.setToClearWatchedEvent()})},set:function(){var b="thumbnails"===d.vars.controlNav?"img":"a";d.controlNav=a("."+e+"control-nav li "+b,d.controlsContainer?d.controlsContainer:d)},active:function(){d.controlNav.removeClass(e+"active").eq(d.animatingTo).addClass(e+"active")},update:function(b,c){d.pagingCount>1&&"add"===b?d.controlNavScaffold.append(a("<li><a>"+d.count+"</a></li>")):1===d.pagingCount?d.controlNavScaffold.find("li").remove():d.controlNav.eq(c).closest("li").remove(),p.controlNav.set(),d.pagingCount>1&&d.pagingCount!==d.controlNav.length?d.update(c,b):p.controlNav.active()}},directionNav:{setup:function(){var b=a('<ul class="'+e+'direction-nav"><li><a class="'+e+'prev" href="#">'+d.vars.prevText+'</a></li><li><a class="'+e+'next" href="#">'+d.vars.nextText+"</a></li></ul>");d.controlsContainer?(a(d.controlsContainer).append(b),d.directionNav=a("."+e+"direction-nav li a",d.controlsContainer)):(d.append(b),d.directionNav=a("."+e+"direction-nav li a",d)),p.directionNav.update(),d.directionNav.bind(h,function(b){b.preventDefault();var c;(""===i||i===b.type)&&(c=a(this).hasClass(e+"next")?d.getTarget("next"):d.getTarget("prev"),d.flexAnimate(c,d.vars.pauseOnAction)),""===i&&(i=b.type),p.setToClearWatchedEvent()})},update:function(){var a=e+"disabled";1===d.pagingCount?d.directionNav.addClass(a).attr("tabindex","-1"):d.vars.animationLoop?d.directionNav.removeClass(a).removeAttr("tabindex"):0===d.animatingTo?d.directionNav.removeClass(a).filter("."+e+"prev").addClass(a).attr("tabindex","-1"):d.animatingTo===d.last?d.directionNav.removeClass(a).filter("."+e+"next").addClass(a).attr("tabindex","-1"):d.directionNav.removeClass(a).removeAttr("tabindex")}},pausePlay:{setup:function(){var b=a('<div class="'+e+'pauseplay"><a></a></div>');d.controlsContainer?(d.controlsContainer.append(b),d.pausePlay=a("."+e+"pauseplay a",d.controlsContainer)):(d.append(b),d.pausePlay=a("."+e+"pauseplay a",d)),p.pausePlay.update(d.vars.slideshow?e+"pause":e+"play"),d.pausePlay.bind(h,function(b){b.preventDefault(),(""===i||i===b.type)&&(a(this).hasClass(e+"pause")?(d.manualPause=!0,d.manualPlay=!1,d.pause()):(d.manualPause=!1,d.manualPlay=!0,d.play())),""===i&&(i=b.type),p.setToClearWatchedEvent()})},update:function(a){"play"===a?d.pausePlay.removeClass(e+"pause").addClass(e+"play").html(d.vars.playText):d.pausePlay.removeClass(e+"play").addClass(e+"pause").html(d.vars.pauseText)}},touch:function(){function r(f){d.animating?f.preventDefault():(window.navigator.msPointerEnabled||1===f.touches.length)&&(d.pause(),g=k?d.h:d.w,i=Number(new Date),o=f.touches[0].pageX,p=f.touches[0].pageY,e=m&&l&&d.animatingTo===d.last?0:m&&l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:m&&d.currentSlide===d.last?d.limit:m?(d.itemW+d.vars.itemMargin)*d.move*d.currentSlide:l?(d.last-d.currentSlide+d.cloneOffset)*g:(d.currentSlide+d.cloneOffset)*g,a=k?p:o,c=k?o:p,b.addEventListener("touchmove",s,!1),b.addEventListener("touchend",t,!1))}function s(b){o=b.touches[0].pageX,p=b.touches[0].pageY,h=k?a-p:a-o,j=k?Math.abs(h)<Math.abs(o-c):Math.abs(h)<Math.abs(p-c);var f=500;(!j||Number(new Date)-i>f)&&(b.preventDefault(),!n&&d.transitions&&(d.vars.animationLoop||(h/=0===d.currentSlide&&0>h||d.currentSlide===d.last&&h>0?Math.abs(h)/g+2:1),d.setProps(e+h,"setTouch")))}function t(){if(b.removeEventListener("touchmove",s,!1),d.animatingTo===d.currentSlide&&!j&&null!==h){var k=l?-h:h,m=k>0?d.getTarget("next"):d.getTarget("prev");d.canAdvance(m)&&(Number(new Date)-i<550&&Math.abs(k)>50||Math.abs(k)>g/2)?d.flexAnimate(m,d.vars.pauseOnAction):n||d.flexAnimate(d.currentSlide,d.vars.pauseOnAction,!0)}b.removeEventListener("touchend",t,!1),a=null,c=null,h=null,e=null}function u(a){a.stopPropagation(),d.animating?a.preventDefault():(d.pause(),b._gesture.addPointer(a.pointerId),q=0,g=k?d.h:d.w,i=Number(new Date),e=m&&l&&d.animatingTo===d.last?0:m&&l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:m&&d.currentSlide===d.last?d.limit:m?(d.itemW+d.vars.itemMargin)*d.move*d.currentSlide:l?(d.last-d.currentSlide+d.cloneOffset)*g:(d.currentSlide+d.cloneOffset)*g)}function v(a){a.stopPropagation();var c=a.target._slider;if(c){var d=-a.translationX,f=-a.translationY;return q+=k?f:d,h=q,j=k?Math.abs(q)<Math.abs(-d):Math.abs(q)<Math.abs(-f),a.detail===a.MSGESTURE_FLAG_INERTIA?(setImmediate(function(){b._gesture.stop()}),void 0):((!j||Number(new Date)-i>500)&&(a.preventDefault(),!n&&c.transitions&&(c.vars.animationLoop||(h=q/(0===c.currentSlide&&0>q||c.currentSlide===c.last&&q>0?Math.abs(q)/g+2:1)),c.setProps(e+h,"setTouch"))),void 0)}}function w(b){b.stopPropagation();var d=b.target._slider;if(d){if(d.animatingTo===d.currentSlide&&!j&&null!==h){var f=l?-h:h,k=f>0?d.getTarget("next"):d.getTarget("prev");d.canAdvance(k)&&(Number(new Date)-i<550&&Math.abs(f)>50||Math.abs(f)>g/2)?d.flexAnimate(k,d.vars.pauseOnAction):n||d.flexAnimate(d.currentSlide,d.vars.pauseOnAction,!0)}a=null,c=null,h=null,e=null,q=0}}var a,c,e,g,h,i,j=!1,o=0,p=0,q=0;f?(b.style.msTouchAction="none",b._gesture=new MSGesture,b._gesture.target=b,b.addEventListener("MSPointerDown",u,!1),b._slider=d,b.addEventListener("MSGestureChange",v,!1),b.addEventListener("MSGestureEnd",w,!1)):b.addEventListener("touchstart",r,!1)},resize:function(){!d.animating&&d.is(":visible")&&(m||d.doMath(),n?p.smoothHeight():m?(d.slides.width(d.computedW),d.update(d.pagingCount),d.setProps()):k?(d.viewport.height(d.h),d.setProps(d.h,"setTotal")):(d.vars.smoothHeight&&p.smoothHeight(),d.newSlides.width(d.computedW),d.setProps(d.computedW,"setTotal")))},smoothHeight:function(a){if(!k||n){var b=n?d:d.viewport;a?b.animate({height:d.slides.eq(d.animatingTo).height()},a):b.height(d.slides.eq(d.animatingTo).height())}},sync:function(b){var c=a(d.vars.sync).data("flexslider"),e=d.animatingTo;switch(b){case"animate":c.flexAnimate(e,d.vars.pauseOnAction,!1,!0);break;case"play":c.playing||c.asNav||c.play();break;case"pause":c.pause()}},uniqueID:function(b){return b.find("[id]").each(function(){var b=a(this);b.attr("id",b.attr("id")+"_clone")}),b},pauseInvisible:{visProp:null,init:function(){var a=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var b=0;b<a.length;b++)a[b]+"Hidden"in document&&(p.pauseInvisible.visProp=a[b]+"Hidden");if(p.pauseInvisible.visProp){var c=p.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(c,function(){p.pauseInvisible.isHidden()?d.startTimeout?clearTimeout(d.startTimeout):d.pause():d.started?d.play():d.vars.initDelay>0?setTimeout(d.play,d.vars.initDelay):d.play()})}},isHidden:function(){return document[p.pauseInvisible.visProp]||!1}},setToClearWatchedEvent:function(){clearTimeout(j),j=setTimeout(function(){i=""},3e3)}},d.flexAnimate=function(b,c,f,h,i){if(d.vars.animationLoop||b===d.currentSlide||(d.direction=b>d.currentSlide?"next":"prev"),o&&1===d.pagingCount&&(d.direction=d.currentItem<b?"next":"prev"),!d.animating&&(d.canAdvance(b,i)||f)&&d.is(":visible")){if(o&&h){var j=a(d.vars.asNavFor).data("flexslider");if(d.atEnd=0===b||b===d.count-1,j.flexAnimate(b,!0,!1,!0,i),d.direction=d.currentItem<b?"next":"prev",j.direction=d.direction,Math.ceil((b+1)/d.visible)-1===d.currentSlide||0===b)return d.currentItem=b,d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;d.currentItem=b,d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),b=Math.floor(b/d.visible)}if(d.animating=!0,d.animatingTo=b,c&&d.pause(),d.vars.before(d),d.syncExists&&!i&&p.sync("animate"),d.vars.controlNav&&p.controlNav.active(),m||d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),d.atEnd=0===b||b===d.last,d.vars.directionNav&&p.directionNav.update(),b===d.last&&(d.vars.end(d),d.vars.animationLoop||d.pause()),n)g?(d.slides.eq(d.currentSlide).css({opacity:0,zIndex:1}),d.slides.eq(b).css({opacity:1,zIndex:2}),d.wrapup(q)):(d.slides.eq(d.currentSlide).css({zIndex:1}).animate({opacity:0},d.vars.animationSpeed,d.vars.easing),d.slides.eq(b).css({zIndex:2}).animate({opacity:1},d.vars.animationSpeed,d.vars.easing,d.wrapup));else{var r,s,t,q=k?d.slides.filter(":first").height():d.computedW;m?(r=d.vars.itemMargin,t=(d.itemW+r)*d.move*d.animatingTo,s=t>d.limit&&1!==d.visible?d.limit:t):s=0===d.currentSlide&&b===d.count-1&&d.vars.animationLoop&&"next"!==d.direction?l?(d.count+d.cloneOffset)*q:0:d.currentSlide===d.last&&0===b&&d.vars.animationLoop&&"prev"!==d.direction?l?0:(d.count+1)*q:l?(d.count-1-b+d.cloneOffset)*q:(b+d.cloneOffset)*q,d.setProps(s,"",d.vars.animationSpeed),d.transitions?(d.vars.animationLoop&&d.atEnd||(d.animating=!1,d.currentSlide=d.animatingTo),d.container.unbind("webkitTransitionEnd transitionend"),d.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(d.ensureAnimationEnd),d.wrapup(q)}),clearTimeout(d.ensureAnimationEnd),d.ensureAnimationEnd=setTimeout(function(){d.wrapup(q)},d.vars.animationSpeed+100)):d.container.animate(d.args,d.vars.animationSpeed,d.vars.easing,function(){d.wrapup(q)})}d.vars.smoothHeight&&p.smoothHeight(d.vars.animationSpeed)}},d.wrapup=function(a){n||m||(0===d.currentSlide&&d.animatingTo===d.last&&d.vars.animationLoop?d.setProps(a,"jumpEnd"):d.currentSlide===d.last&&0===d.animatingTo&&d.vars.animationLoop&&d.setProps(a,"jumpStart")),d.animating=!1,d.currentSlide=d.animatingTo,d.vars.after(d)},d.animateSlides=function(){!d.animating&&q&&d.flexAnimate(d.getTarget("next"))},d.pause=function(){clearInterval(d.animatedSlides),d.animatedSlides=null,d.playing=!1,d.vars.pausePlay&&p.pausePlay.update("play"),d.syncExists&&p.sync("pause")},d.play=function(){d.playing&&clearInterval(d.animatedSlides),d.animatedSlides=d.animatedSlides||setInterval(d.animateSlides,d.vars.slideshowSpeed),d.started=d.playing=!0,d.vars.pausePlay&&p.pausePlay.update("pause"),d.syncExists&&p.sync("play")},d.stop=function(){d.pause(),d.stopped=!0},d.canAdvance=function(a,b){var c=o?d.pagingCount-1:d.last;return b?!0:o&&d.currentItem===d.count-1&&0===a&&"prev"===d.direction?!0:o&&0===d.currentItem&&a===d.pagingCount-1&&"next"!==d.direction?!1:a!==d.currentSlide||o?d.vars.animationLoop?!0:d.atEnd&&0===d.currentSlide&&a===c&&"next"!==d.direction?!1:d.atEnd&&d.currentSlide===c&&0===a&&"next"===d.direction?!1:!0:!1},d.getTarget=function(a){return d.direction=a,"next"===a?d.currentSlide===d.last?0:d.currentSlide+1:0===d.currentSlide?d.last:d.currentSlide-1},d.setProps=function(a,b,c){var e=function(){var c=a?a:(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo,e=function(){if(m)return"setTouch"===b?a:l&&d.animatingTo===d.last?0:l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:d.animatingTo===d.last?d.limit:c;switch(b){case"setTotal":return l?(d.count-1-d.currentSlide+d.cloneOffset)*a:(d.currentSlide+d.cloneOffset)*a;case"setTouch":return l?a:a;case"jumpEnd":return l?a:d.count*a;case"jumpStart":return l?d.count*a:a;default:return a}}();return-1*e+"px"}();d.transitions&&(e=k?"translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",c=void 0!==c?c/1e3+"s":"0s",d.container.css("-"+d.pfx+"-transition-duration",c),d.container.css("transition-duration",c)),d.args[d.prop]=e,(d.transitions||void 0===c)&&d.container.css(d.args),d.container.css("transform",e)},d.setup=function(b){if(n)d.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(g?d.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+d.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(d.currentSlide).css({opacity:1,zIndex:2}):d.slides.css({opacity:0,display:"block",zIndex:1}).eq(d.currentSlide).css({zIndex:2}).animate({opacity:1},d.vars.animationSpeed,d.vars.easing)),d.vars.smoothHeight&&p.smoothHeight();else{var c,f;"init"===b&&(d.viewport=a('<div class="'+e+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(d).append(d.container),d.cloneCount=0,d.cloneOffset=0,l&&(f=a.makeArray(d.slides).reverse(),d.slides=a(f),d.container.empty().append(d.slides))),d.vars.animationLoop&&!m&&(d.cloneCount=2,d.cloneOffset=1,"init"!==b&&d.container.find(".clone").remove(),p.uniqueID(d.slides.first().clone().addClass("clone").attr("aria-hidden","true")).appendTo(d.container),p.uniqueID(d.slides.last().clone().addClass("clone").attr("aria-hidden","true")).prependTo(d.container)),d.newSlides=a(d.vars.selector,d),c=l?d.count-1-d.currentSlide+d.cloneOffset:d.currentSlide+d.cloneOffset,k&&!m?(d.container.height(200*(d.count+d.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){d.newSlides.css({display:"block"}),d.doMath(),d.viewport.height(d.h),d.setProps(c*d.h,"init")},"init"===b?100:0)):(d.container.width(200*(d.count+d.cloneCount)+"%"),d.setProps(c*d.computedW,"init"),setTimeout(function(){d.doMath(),d.newSlides.css({width:d.computedW,"float":"left",display:"block"}),d.vars.smoothHeight&&p.smoothHeight()},"init"===b?100:0))}m||d.slides.removeClass(e+"active-slide").eq(d.currentSlide).addClass(e+"active-slide"),d.vars.init(d)},d.doMath=function(){var a=d.slides.first(),b=d.vars.itemMargin,c=d.vars.minItems,e=d.vars.maxItems;d.w=void 0===d.viewport?d.width():d.viewport.width(),d.h=a.height(),d.boxPadding=a.outerWidth()-a.width(),m?(d.itemT=d.vars.itemWidth+b,d.minW=c?c*d.itemT:d.w,d.maxW=e?e*d.itemT-b:d.w,d.itemW=d.minW>d.w?(d.w-b*(c-1))/c:d.maxW<d.w?(d.w-b*(e-1))/e:d.vars.itemWidth>d.w?d.w:d.vars.itemWidth,d.visible=Math.floor(d.w/d.itemW),d.move=d.vars.move>0&&d.vars.move<d.visible?d.vars.move:d.visible,d.pagingCount=Math.ceil((d.count-d.visible)/d.move+1),d.last=d.pagingCount-1,d.limit=1===d.pagingCount?0:d.vars.itemWidth>d.w?d.itemW*(d.count-1)+b*(d.count-1):(d.itemW+b)*d.count-d.w-b):(d.itemW=d.w,d.pagingCount=d.count,d.last=d.count-1),d.computedW=d.itemW-d.boxPadding},d.update=function(a,b){d.doMath(),m||(a<d.currentSlide?d.currentSlide+=1:a<=d.currentSlide&&0!==a&&(d.currentSlide-=1),d.animatingTo=d.currentSlide),d.vars.controlNav&&!d.manualControls&&("add"===b&&!m||d.pagingCount>d.controlNav.length?p.controlNav.update("add"):("remove"===b&&!m||d.pagingCount<d.controlNav.length)&&(m&&d.currentSlide>d.last&&(d.currentSlide-=1,d.animatingTo-=1),p.controlNav.update("remove",d.last))),d.vars.directionNav&&p.directionNav.update()},d.addSlide=function(b,c){var e=a(b);d.count+=1,d.last=d.count-1,k&&l?void 0!==c?d.slides.eq(d.count-c).after(e):d.container.prepend(e):void 0!==c?d.slides.eq(c).before(e):d.container.append(e),d.update(c,"add"),d.slides=a(d.vars.selector+":not(.clone)",d),d.setup(),d.vars.added(d)},d.removeSlide=function(b){var c=isNaN(b)?d.slides.index(a(b)):b;d.count-=1,d.last=d.count-1,isNaN(b)?a(b,d.slides).remove():k&&l?d.slides.eq(d.last).remove():d.slides.eq(b).remove(),d.doMath(),d.update(c,"remove"),d.slides=a(d.vars.selector+":not(.clone)",d),d.setup(),d.vars.removed(d)},p.init()},a(window).blur(function(){focused=!1}).focus(function(){focused=!0}),a.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},a.fn.flexslider=function(b){if(void 0===b&&(b={}),"object"==typeof b)return this.each(function(){var c=a(this),d=b.selector?b.selector:".slides > li",e=c.find(d);1===e.length&&b.allowOneSlide===!0||0===e.length?(e.fadeIn(400),b.start&&b.start(c)):void 0===c.data("flexslider")&&new a.flexslider(this,b)});var c=a(this).data("flexslider");switch(b){case"play":c.play();break;case"pause":c.pause();break;case"stop":c.stop();break;case"next":c.flexAnimate(c.getTarget("next"),!0);break;case"prev":case"previous":c.flexAnimate(c.getTarget("prev"),!0);break;default:"number"==typeof b&&c.flexAnimate(b,!0)}}}(jQuery);




$(document).ready(function() {
window.addEventListener('load', function() {
setTimeout(function(){

			$('.slider-container').flexslider({
				namespace: "leo-", 
				animation: "slide",
				smoothHeight: false
			});
			$('.slider-container-multiple').flexslider({
            animation: "slide",
//namespace: "leo-", 
            animationLoop: true,
            itemWidth: 290,
            itemMargin: 5,
directionNav: true,
                controlNav: true,

			});
			$('.slider-container-multiple-dichvu').flexslider({
            animation: "slide",
//namespace: "leo-", 
            animationLoop: true,
            itemWidth: 320,
            itemMargin: 5,
directionNav: true,
                controlNav: true,
			});
  		$('.slider-container-multiple-course').flexslider({
            animation: "slide",
            animationLoop: true,
            itemWidth: 400,
			itemHeight: 600,
            itemMargin: 5
			});
		});

}, 1000);
})




var images = document.getElementsByTagName("img");
for(var i=0;i<images.length;i++) {
images[i].src = images[i].src.replace(/[0-9]+.bp.blogspot.com/,"lh4.googleusercontent.com");
}






		$(document).ready(function() {
			$('div#popup1 .close').click(function(){
				$('.overlay').toggle('slow')
                $('.boxpop').show()
      		})
			$('.boxpop .button').click(function(){
				$('.overlay').toggle('slow')
      		})
		});




    var submitted = false;
    function emptycart() {
        submitted = true;
        $(&#39;.blockform&#39;).toggle();
        $(&#39;.hidden-message&#39;).show();
        $(&#39;#formx&#39;).hide()
    }
    $(&quot;iframe#hidden_iframe&quot;).on(&#39;load&#39;, function() {
        simpleCart.empty();
    });


  document.addEventListener(&#39;DOMContentLoaded&#39;, function() {
    const popup = document.getElementById(&#39;popup1&#39;);
    const openBtn = document.getElementById(&#39;openPopupBtn&#39;);
    const closeBtn = document.getElementById(&#39;closePopup&#39;);

    function openPopup() {
      popup.classList.add(&#39;active&#39;);
    }
    function closePopup() {
      popup.classList.remove(&#39;active&#39;);
    }
    openBtn.addEventListener(&#39;click&#39;, function(e) {
      e.preventDefault();
      openPopup();
    });
    closeBtn.addEventListener(&#39;click&#39;, function(e) {
      e.preventDefault();
      closePopup();
    });
    popup.addEventListener(&#39;click&#39;, function(e) {
      if (e.target === popup) {
        closePopup();
      }
    });
  });




$(document).ready(function() {
    // FEEDBACK HOC VIEN
    window.addEventListener('load', function() {
        setTimeout(function() {
            let noidung_feedback = ``;
            $('#feedbackhv').html(noidung_feedback);
        }, 5000);

        setTimeout(function() {
            let noidungduantieubieuhn = `
<marquee direction='left' id='marq' loop='50' onmouseout='this.start()' onmouseover='this.stop()' scrollamount='10' scrolldelay='0'>
<a><img height='300' src='https://blogger.googleusercontent.com/img/a/AVvXsEigkzOslrLlDqpP04_PihHcgU0XUzWAz1gVN_vMXNDls892oD2fMLW25Bgqxc6Wp9JGLLBv3th0SkYMaAadnJTmIGS6kOEll3kclkaT6qbOTguJ2ncnOLhyKjmKQQxlMWuskewthegOoymGA67RawkQGgi5WMygZZCr5gRJEtw6pgnns1ho8XwVtKAIFfk' title='Dự án chung cư cao tầng Aurora Quận 8, Tphcm |DTC' width='200'/> </a>
<a><img height='300' src='https://blogger.googleusercontent.com/img/a/AVvXsEjM0NtXfwjeybmJC9_W5Bo_eVHPqgJTJEKUAPyisNvP_loBlGq81r3crIfw0c6R6paZi6t1jaVAXquFFFfJ-lctQKuKAOR5-83t_wsOiVSAkkcXWFPRov7_ObJ--iIdB1zLrreuc7ACZXoqQvjboBzxwNrJrE0SYvSaCtaYEjmZe4u3yWIALegS0rGnpLw' title='Dự án khách sạn 4 sao Đà Nẵng Palm Holtel |DTC' width='200'/> </a> 
<a><img height='300' src='https://blogger.googleusercontent.com/img/a/AVvXsEgCH6CYaMTohNn2EI7gG_Zcb0F-p9jAt95xCjlfBusHV4TrhALi1KeiitZ1agsaDDwleU5DBIT608E3LKMKZFg1f1mg6v24FMIGtUnj1f8RSNMovUFHlopQ1URS_ldFtfGiDdBSJK3n8N6TKIMPWTAD64boft4TAWey5xIwcvpe3PxjjYGSGb6w0fWacsA' title='Dự án Ofice and Store Ecopark |DTC' width='200'/> </a>  
<a><img height='300' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxAU3jO_l7e2ZB8tRHOAt6oGlrok9O_sYOCXXx3ScQ2SLtsAyAbR68oanGVwyGnZQPqiouZwkqBNhh153Ix_d9CMsntiSkzG0_bLfws_9pWcdwEWM_JToVRVm7HKQDOigheZ5q4vQTELY/s640/b%25C3%25A1o+gi%25C3%25A1+l%25E1%25BA%25ADp+d%25E1%25BB%25B1+to%25C3%25A1n+thu%25C3%25AA+%25286%2529.PNG' title='Dự án Edna Resort Mũi né Phan thiết |DTC' width='200'/> </a>  
<a><img height='300' src='https://blogger.googleusercontent.com/img/a/AVvXsEjJaQ7ttySOklB-vJ3XfHCNy5Tpj3z8e--fOMsT1Lo-XdFIRLak3VA-pQlAv2_F4tvUmFIZld1Qu6ySBcN-mrrja1QdJyZIwASCy7o2ymiw69Or9pVZIr2ibQFWcVQ_4zAWiq6ulTc5Y8Zth76UBHGhBwUxQ0LwTMTs8b4UlWxWF68KnVtiV_taxiCQUV8' title='Dự án Dốc Lết Resort Nha Trang |DTC' width='200'/> </a>  
<a><img height='300' src='https://blogger.googleusercontent.com/img/a/AVvXsEhomxIlsH5G9pZ05LgPmMAqCuIumB11hkgcEztNfXMAw4knTqhHmeik6CCb-50eo7XadDVnMKwGNg4o--tkHeN3galoQ7v0laq11FeDmemYs3LSlmV_zwDhlzt4F6a-dWHmObTCKKXNpXJEzQkV6kr07PJQNItyZzY15lWHTNr77ob4UF-r50sCN7CG6J0' title='Dự án Dốc nhà máy dệt Kangna Tiền Giang |DTC' width='200'/> </a> 
<a><img height='300' src='https://blogger.googleusercontent.com/img/a/AVvXsEhp2h29SeiJAKnkfoNHBf2pnREdtZp1mOIMGvLTWu0clPTTmkhd2ilg7VYb8lvND5OMYnqVieTySR_vP9ixrCxMhO50aoUQG2Bk_n0-4n1FnYwC_ju8xF8bSPaBJg2DlRrrKaDQwxOy8hKYZu2W_GPh0waC3dGIrATqC0_ss5K1ym4PKqXk_0G6U_26xyM' title='Dự án khu dân cư An hội Gò Vấp |DTC' width='200'/> </a> 
<a><img height='300' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilf-S2_XtzGrZPgXQDy_lXutBqGM5JfygBstghU17qQ9BK3gFl3nvHtv5zB8E5DCsWdisY-6JWy8F0exe5N-hOO2hKGaW9N9toat0DUrL9V1v1HdGn8lljA-rWjgU4bfiOHOAcbuxsgjI/s340/du-toan-club-1.png' title='Dự án cảng dầu khí quốc tế Pacific Pertro Long An |DTC' width='200'/> </a>
<a><img height='300' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTgi2DI_A3ubLe9Lr3U5599OmFzx2k1thJ4nb8TCUqAVGhOlnRGe7GQcqNQ3tHxlz7ihaUXFA83QeyfMM6JSt4aXNL11w3g0nF-E0aCvF_zi-qXMtzkBr0t9yzLLW1bsdBnsL5b8Vp34w/s340/du-toan-club-4.png' title='Dự án Chung cư An Hội 5 - Gò Vấp |DTC' width='200'/> </a>
<a><img height='300' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrBdIMoa8pNooj84ieQiBAd7-WewnZpeVkk9aA5pUDEOpg_Q-tcF_u-NyCeMHDIywTbiVXzL0QdoZ7PL1mLZTs-LvldqYOXLTfJlUiXXKFoivdbrgaamrn8pNLVay99D74-dkp1mLDNsw/s340/du-toan-club-2.png' title='Dự án nhà văn phòng điều hành cảng dầu khí Long An |DTC' width='200'/> </a>
<a><img height='300' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgq7szvMPedYX-Qj3CS8KhB_vBLyd4yERj4J4uFZjdUviyC6IGu-kYLyfFoZFjKvJpGXp95UU6up1L-Ehi9gAxUpd1qLtJFSqbaNXHBEpvRe2E6ANItbXa80bqzzsm5rbcT_vVnjKfHE8M/s340/du-toan-club-3.png' title='Dự án trường tiểu học Vinschool |DTC' width='200'/> </a>
<a><img height='300' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvJLT_nFnA5VtEFK27LVSle7UsP1uiQpyyTqWtzbx9NRBu_AwwMwuDFs6T3RZ6EPnpZiaaR7Jx7sPQVGeHKsi562h1Y6wbbn55_wZlBrIDLDK3_o28LMpMGjOMeHpofcz_yod4dXRvdI4/s340/du-toan-club-5.png' title='Dự án chung cư An Hội 4 |DTC' width='200'/> </a>
<a><img height='300' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUQjZOAzKCXG3tcBeLOhug-W2VE28sbvRF8kvbcynP6DjbuBxiWBKgo3ogW5IOEDTEw4g69K7PhHdQkWWlor4UIvMu45e1VTawIkd4xeUdYvHoMfczljtHI5q3xLcEaH37qqTsd0U9X7I/s340/du-toan-club-13-1.png' title='Dự án cây xăng Đồng Tháp |DTC' width='200'/> </a>
<a><img height='300' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTHHbZj3dtZDtmWWxrbjKVK2BEpVSeeKuORO002jUrrQtZcJv50yg_PmlckfmK2QSq8dUBgpwoUIG9Zd1loFAq-0FUJLy8p-NxAAPh9Ojrv45nwvoFtTLIM-SxMKm9lohVZ2YkI16tieQ/s340/du-toan-club-6-1.png' title='Dự án biệt thự vườn An Giang |DTC' width='200'/> </a>
<a><img height='300' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgHbf3eluLr4my3hWmZjYVBq1SlRilXaf8HIYumIZE9GN8AG7ZkxmWUWR5Tt3wmh5ABhNzRjLWDT_H-AAK9K9KoPV4tGbG-pCylnK6lZ_-dxsPm1FEb_HGIWyqCrckcOoirnehnC9D4rtA/s340/du-toan-club-7-1.png' title='Dự án Resort Sheraton Hội An |DTC' width='200'/> </a>
<a><img height='300' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilUm8z6z5hS9aS2DfgtP0O39qEZ_orA7ji0bznhBxhErIDmyCTcZQxor5_lvr8r6fpcvJaOT5b9yBfBu8T6Vk1zn2BeL5UeJvQmFyOs7UPQcs41H-EoQmvu6sHLut2vuwSOsNzETPsKMw/s340/du-toan-club-12-1.png' title='Dự án Chung cư Vista Reverside Bình Dương |DTC' width='200'/> </a>
<a><img height='300' src='https://blogger.googleusercontent.com/img/a/AVvXsEjga4Wnzm9xYweRDmKUJBkV_OPYJ_qukL295ldpSKTKnTu3dG946CARvZYGiVwlhA0zrdNtXOrDXsuoGYnhUqqpTvovDKfLc72EMAs5GczItXpNbcEcYCdH0MfzdtVdQwt5xXRBt0FhvaLLniuhrwRwVgzxMuoHz_aYuC225BTThW8eVzWUDmehZc6-J5E' title='Dự án Spa chăm sóc sắc đẹp Đà Nẵng |DTC' width='200'/> </a>
<a><img height='300' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjd4W3p7a5om1rYB4hl6a5TBDGhyphenhyphen-SfxZVEwB8aiiIH_28fWxNRTe_q-0_0PVYuHonkqm8yAQoyiaE_mC4266SoR5zLrRpsxpo4Ush5HWHdiM_F4MhZtUh4ukxdn8JTaf86e-Wg8VmzEtc/s340/du-toan-club-10-1.png' title='Dự án sửa chữa cải tạo bệnh viên Nhân dân 115 |DTC' width='200'/> </a>
<a><img height='300' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRRpH9qq_CyoWeVmexdxyVu6b_Tscc-KnA-MZ-YF-dJ-VPoeg16rjgzLLZOwu9nk-4Wcv2tIkBp2TpTxWFwG5kCDy8xTILH8p0jF0NvhWjv_EakjcihSmQLPQdR7jrr7fZoAF2MvQo4wo/s340/du-toan-club-11-1.png' title='Dự án nhà văn phòng kết hợp xưởng Nguyên Khang |DTC' width='200'/> </a>
<a><img height='300' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3h_XiWsX0zMimbqZ1HL7UxEp9BDr8_WqvJe_P-8cE9EAc2pYGsoYhyoxQZtvo7leSX0JQNw5BKzt1f8DJhwvH8JfB8mdZ0w-ERHy0ySje_NMbttpgrGieo3nSEvTtEzoZVls-KX8Z6jg/s340/du-toan-club-14-1.png' title='Dự án Khu biệt thự liền kề Jomona Goden Silk Quận 7 |DTC' width='200'/> </a>
<a><img height='300' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPzYGf3WWVJxSAbtx-_5oRcxkObcMOoDRUQ3oUhxj-trDCV_NchILaER6QMgM7CJMyKQG8dMCRGmsIQNPQM74ISOMp5AjWwpeAisbyvIpR34WpxJ2KNbq6Badz5IazFO7K7ZZi1uOGMfQ/s340/du-toan-club-15-1.png' title='Dự án nhà máy bia Sài Gòn |DTC' width='200'/> </a>
<a><img height='300' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_uFqBNm5NIvBA8Tcd6c2nqZTU9DleAILzmEcUt-rEtaatJncH8PmX_v6BjqVsFB1CFHnw4PFhO0kTx2lUvGS972xPchyphenhyphenVcoSJPvkM7YZ-fSeTR2DVpLH_2ZclDYAjNSWxl43CxX0EaUg/s340/du-toan-club-16-1.png' title='Dự án trạm dừng chân Cao tốc Long Thành dầu dây |DTC' width='200'/> </a>
<a><img height='300' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhrGbRHruVECGVJmusj5CZmo-DtRBHkX2A-cmga-wyg1MOQi1JMnKIZcesCgzqMM6e0LMpIBIYrSa8s30NOHqxGt1nDTlPOx7wcgtEH8i3jOWY8J6950H-sNs5hPe8mBkq1dIG-R3kWnF4/s340/du-toan-club-17-1.png' title='Dự án căn hộ Luxury Apartment |DTC' width='200'/> </a>
<a><img height='300' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBPjwu6xUbB22F2OxyeTZSXJvZT79RJx0R6EZCyRAEh5tUhG53y7h0h6MPPGijCDtV-twHXyOTcRe6_NcTtSO7h1uFzCbVxTFnTmGG3GxNjA6mJzxX5YJhXTFGnIgAmIlwM9DpNDg_DhE/s340/du-toan-club-18-1.png' title='Dự án Bệnh viện chợ rẫy 2 |DTC' width='200'/> </a>
<a><img height='300' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1izHHnw-hF0zVZ-XavS1JZc8YJ0oxxyL1NFd24ujN6WiIybsSWOv6wHVXwq_5eBxYMclSJiwU6C9zAvUVnCDJAcGD05C6ag3VhbyDqPwANyjNEXipZFOj0y2MLTJCdScjWzLeCc_TRmo/s340/du-toan-club-19-1.png' title='Dự án bệnh viện Hoa Lâm |DTC' width='200'/> </a>
                </marquee>
            `;
            $('#duantieubieuhn').html(noidungduantieubieuhn); 
        }, 10000);
    });
});







setTimeout(function(){
function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("script")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" }) }
loadCSS("//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");loadCSS("https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700,700i&subset=vietnamese");
}, 5000);
//const observer = lozad();
//observer.observe();

function lazyloaddelay() {
  setTimeout(function() {
    var lazyloadImages = document.querySelectorAll("img.lozad");
    lazyloadImages.forEach(function(img) {
      img.src = img.dataset.src;
      img.classList.remove('lazy_timeout');
    });
  }, 5000);
}
function lazyload() {
  setTimeout(function() {
    var lazyloadImages = document.querySelectorAll("img.lozad");
    lazyloadImages.forEach(function(img) {
      img.src = img.dataset.src;
      img.classList.remove('lazy_timeout');
      $('.lozad').show()
    });
  }, 4000);
}
document.addEventListener('scroll', lazyload());
window.addEventListener('resize', lazyload());
window.addEventListener('orientationChange', lazyload());






