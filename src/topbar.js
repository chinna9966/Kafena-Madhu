import './topbar.css'
function Topbar () {
    return(
    <>    
    <div className="topbar">
        <h1 className="logo"> EDYODA </h1><span>Explore categories</span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEX////t7e3u7u4AAADr6+vs7Oyvr6/39/f09PTX19fHx8daWlpTU1NRUVFVVVXExMS8vLyc04pTAAAFX0lEQVR4nO2da3OjMAxFeYQNNOnj///abeI8oAFhC11ZDvKnO7NJljuYo1OGtFV1WXXTNPWbpsrIcXhDb7jWsKvr+vCmqfpNdXdNh7dMddVk30bY1HjD4lNzvQ7DJXl4y3QDqo2DwaSwbGwon/jekGqY3zzcadjJnab8tIeG7jTFp7BsbCif+N6QapjfPNxp2Mmdpvy0h4buNMWnsGxsKJ/43pBqmN883GnYyZ2m/LSHhu40xaewbGwon/jekGqY3zzcadjJnab8tIeG7jTFp7BsbCif+N6QapjfPNxp2Mmdpvy0h4buNMWnsGxsKJ/43pBqmN883GnYyZ2m/LSHhu40xaewbGyofBPf7qXayDQ8ffcW2syk/vsU25CyglPbfvRmDGWUuv6jbU+rr1txmu54bn/XYMVQJmm4HNrnsSZft+Y0x6+2DRVNbMtR6kLBtv06kq9bm/jn9raG3kSvZ+qH+6F9bml4ah/rwxRu6ss1eF8kbminGRUc4Sb/ED9MCoaKDKe5Qea5BhvlrmmYHtr52C2+o5o5sVPIjCta2KCXNPw9NAI3yw3Pfz/FCm7q/qXgb8X0hqfXTzGCm+k1OL4Wk5xmtqAFu+nmCy7bzazTdP3MFr1tVBsmM7fO/ZzdzDtN87P0Kblx0y0XbNufuR81Fib+8R9RMSdu5iBzX/+OKU5DVcyIm6VrMBRMcxq6ogmTeTmDqU5DbVQbJjMpuPjeanFTkNeiDZMZn8HF9y43tIabdMisNrSFGwZkaKe5pijc5DWZ2xnk36dZx01ukxlDhnWfxgRuSJMhIENN/HvqTOCGC5mYhiZww4YM6TSPRJ5FFbvhmEyU05ixG5bJxDiNFdzwIbM+8S3YzRbIJDTMh5tNkIlwmtx2s8FkGM/TZLEbtslwnqfRx80Wk0mZ+Plwsx0yiQ21cSMAmTinyXXvZpvJJDpNFrvZaDJpTpMDNxKQSZn42riRgQyroQ5uhCCT5DSadiNiMpueEYbbjYDJbHtGGI0bOcikTvx7wt67kYQMtyESNyuDnvHJzGeEYXYjZTJsp4HbjZjJcJ0GjRtZyPAmPtBuZp+TeRbkXtzshvK4EYcM02lQdiNsMkLfexK1G1GTkfrekyRuEJDhT3x53GAgI9BQCjcgyGxwGmG7kTcZAacRtRuAyWx3GkncoCCzdeIL4QZkMqINt+EGCJnNTvNMPd9uUCYj/l1utt2ATEb+u9xc3GAhIzHxt+EGDRnRhhzcwCEj4jSPlP7cDdJkRJ2GbTdQk5F0Gi5u8JCRm/gc3GhABtAwHjcqkBF0muR7N3iTAf5+mii7gZuMvNOk4EbmORn9iR+PGz3IgBqu4UYRMrJOE3vvplIxGZDTRNkN9U+QY6lEtkIKbogzCDkWTENyoy4WlL4EoQ1J3CwUFIcMxGni7Gb+DEofAcppouzmtSDkCDBOw8INCDKoiX9P5E/9f7dokQ2jcQODDMxp4uxmfAZxR4D/nXvrFTEmg3aaBNwAIYOd+LF2g4SMUkMaN1DIgJ0mym5wJqPiNOt2gzMZHadZxQ0cMviJT+MGDxnFhnO4UYCMgtM80qujYk1G0WmW7AZtMnpOs4AbFchoTfw53OhARr3hEzdKkFFzmhe70TAZZaeZ2o2GyWg7zQQ3ipDRnPiP1A+94v+Wo6F68r+N8AYpLBsbqvyJ7w2RDZWcJkvyv/dUfNrDxH//hu40xaewbGwon/jekGqY3zzcadjJnab8tIeG7jTFp7BsbCif+N6QapjfPNxp2Mmdpvy0h4buNMWnsGxsKJ/43pBqmN883GnYyZ2m/LSHhu40xaewbGwon/jekGr4BOr7pf8YU+uwHmgQ5wAAAABJRU5ErkJggg==" alt="icon" id="icon" width="15px"/><br></br><i>Stories</i>
    </div>
    <TrendingSection/>
    </>
    )
};


function TrendingSection () {
    return(
        <>
        <div className="container">

        <div id="catagories">
            <div style={{paddingBottom:"10px"}}>
                <h1 className="heading">Trending Posts</h1>
            <img src="https://cdn4.iconfinder.com/data/icons/fedora-color/512/filter-512.png" alt="" width="20px"/>
              <span className="filter">Filter by Catagory</span>
            </div>
            <br></br>
            <span className="button" style={{color:"#fff", backgroundColor:"#0084ff"}}>All</span>
            <span className="button">Artificial Intelligence</span>
            <span className="button">Cloud Computing</span>
            <span className="button">DevOps</span>
            <span className="button">Programming Languages</span>
            <span className="button">Mobile Application Development</span>
            <span className="button">Technology and Tools</span>
            <span className="button">Get a Job in a Tech Company</span>
            <span className="button">Others</span>
    
    
        </div>
        </div>
     
        </>
    )
}
export default Topbar;