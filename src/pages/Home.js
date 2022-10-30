

const Home = () => {
    const firstPic = require('./HomePage/4M9A1433.jpg');
    const secondPic = require('./HomePage/4M9A1413.jpg');
    return (
        <div class="row" style={{ margin: '15px' }}>
            <div class="col-md-7">
               <h1>Welcome To Kayli's Blog</h1>
               <div>
                   <div>
                   Hello! My name is Kayli, I am married to the wonderful Bruce (he made this blog for me). We have a little baby on the way come April. 
                   </div>
                   <br />
                   <div>
                   This blog came about because I started to write emails to family members to keep them updated on the comings and goings of our lives. 
                   </div>
                   <br />
                   <div>
                   Bruce plans to make this blog into a website were I can easily add new enteries and keep it updated. He hopes to get this site a real url, 
                   that people can visit and get a following. He also plans to have a newsletter and run adds.
                   </div>
                   <br />
                   <div>
                   We hope that by reading some of our experiences you will learn something or be inspired to do something in your own life!
                   </div>
               </div>
               <img src={firstPic} style={{width: '100%'}}></img>
           </div>
           <div class="col-md-5">
               <img src={secondPic} style={{width: '100%'}}></img>
           </div>
           <div class="col-md-12">
                <a href={"https://github.com/bruce-gill/KaylisAventures"} target={"_blank"} style={{align: "center"}}>Github Repo</a>
            </div>
        </div>
    );
};

export default Home;
