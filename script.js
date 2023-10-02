
var url= 'https://api.thecatapi.com/v1/images/search?limit=10'
var url2='https://api.thedogapi.com/v1/images/search?limit=10'
var url3='https://nekos.best/api/v2/hug?amount=20'

var catdetail=document.getElementById('catdetail')
var dogdetail=document.getElementById('dogdetail')
var avatar=document.getElementById('avatar')
var anime=document.getElementById('anime')

async function getcatdetail(){
    var data=await fetch(url)
    var res=await data.json()
    console.log(res)
    let i=0;
    if(i<10){
        let pic=res[i].url
        catdetail.innerHTML=`<img src="${pic}" class="card-img-top" alt="...">`
    }
    i++
    
}
async function getdogdetail(){
    var data1=await fetch(url2)
    var res1=await data1.json()
    console.log(res1)
    let i=0;
    if(i<10){
        let pict=res1[i].url
        dogdetail.innerHTML=`<img src="${pict}" class="card-img-top" alt="...">`
    }
    i++
}
async function getavatardetail(){
    var avatarName=document.getElementById('avatarName').value
    var url1=`https://api.dicebear.com/7.x/lorelei/svg?seed=${avatarName}`
    var data=await fetch(url1)
    console.log(data)
    var res=data.url
    avatar.innerHTML=`
    <div class="card" style="width: 28rem;">         
        <img src="${res}" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text">This is the Unique Avatar according to your Name</p>
        </div>
    </div>
    `
}
async function getanimedetail(){
    var data=await fetch(url3)
    var res=await data.json()
    console.log(res)
    let i=0;
    if(i<10){
        let picture=res.results[i].url
        console.log(picture)
        anime.innerHTML=`<img src="${picture}" class="card-img-top" alt="...">`
    }
    i++
}