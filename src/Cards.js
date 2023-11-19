import './Cards.css';

// const dataArray = [
//     {
//         thumbnail: "https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png",
//         title: "Introduction To A Machine Learning Online Course",
//         author: "Edyoda",
//         date: "23 Aug 2019",
//         description: "We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what a machine learning online course holds. To begin with, one must understand what machine learning is..."
//     },
//     {
//         thumbnail: "https://edyoda.s3.amazonaws.com/media/blog-images/6.png",
//         title: "LAMP Stack Vs MEAN stack: Choosing the right platform...",
//         author: "Edyoda",
//         date: "23 Aug 2019",
//         description: "In today’s dynamic world, rapid web application development with a smooth user interface that can adapt to specific features is the main business requirement. Many organizations around the world that intensely depend on programming for their everyday business operations..."
//     },
//     {
//         thumbnail: "https://edyoda.s3.amazonaws.com/media/blog-images/4.png",
//         title: "Impact of Cloud Computing in various industries",
//         author: "Edyoda",
//         date: "23 Aug 2019",
//         description: "Cloud computing has been rapidly gaining pace in the world of information technology. It has been observed that over 90% of global enterprises are using cloud technology as part of their business. Every industry has its own technology dynamics designed to suit..."
//     },
//     {
//         thumbnail: "https://edyoda.s3.amazonaws.com/media/blog-images/3.png",
//         title: "Challenges of Machine Learning in Big Data Analytics",
//         author: "Edyoda",
//         date: "23 Aug 2019",
//         description: "Machine Learning is a subset of artificial intelligence which is an important part of computer science. The revolution of Big Data promises to transform the way we work, live and think by enabling the process of optimization, discovering insights and improved decision making..."
//     },
//     {
//         thumbnail: "https://edyoda.s3.amazonaws.com/media/blog-images/5.png",
//         title: "Breaking the Myths around Cybersecurity",
//         author: "Edyoda",
//         date: "23 Aug 2019",
//         description: "As the dependency on online platforms is increasing daily, cybersecurity is becoming an important concern for all companies today. The number of cyberattacks is ever-rising even after adopting every security measure possible by businesses. Cyber attackers..."
//     },
//     {
//         thumbnail: "https://edyoda.s3.amazonaws.com/media/blog-images/7.png",
//         title: "Importance of Data Backup and Recovery in the IT industry",
//         author: "Edyoda",
//         date: "23 Aug 2019",
//         description: "A business must always introspect the areas where they lack in order to bring about a positive change in the work environment. One of the main precautions or a contingency plan that is necessary for every business and especially industries working with clouds, networks..."
//     },
//     {
//         thumbnail: "https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png",
//         title: "What is Web Scraping?",
//         author: "Zac Clancy",
//         date: "23 Aug 2019",
//         description: "Simply put, web scraping is one of the tools developers use to gather and analyze information from the Internet.Some websites and platforms offer application programming interfaces (APIs) which we can use to access information in a structured way,but others might not. While APIs are certainly..."
//     },
//     {
//         thumbnail: "https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1.png",
//         title: "What is Income Share Agreement?",
//         author: "Edyoda",
//         date: "23 Aug 2019",
//         description: "The term Income Share Agreement has been around for a long time since 1955 to be precise. Surprised, eh? It was first introduced by Milton Friedman, an American economist, and statistician who strongly believed in “free-market capitalism”. In the last few months..."
//     },
//     {
//         thumbnail: "https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png",
//         title: "Practical Machine Learning with Python and Keras",
//         author: "Daniel Pyrathon",
//         date: "23 Aug 2019",
//         description: "Machine learning is a field of artificial intelligence that uses statistical techniques to give computer systems the ability to “learn” (e.g., progressively improve performance on a specific task) from data, without being explicitly programmed. Think of how efficiently..."
//     }
// ];

const Cards = (props) => {
    return ( 
        <>
        
                <div id="cards">
                    <img class="thumbnail" src={props.img.thumbnail} alt={props.img.title}/>
                    <div class="text-section">
                        <h3>{props.img.title}</h3>
                        <span class="author-container">
                            <h6 class="author">{props.img.author}</h6>
                            <h6 class="date">| {props.img.date}</h6>
                        </span>
                        <p>{props.img.description}</p>
                    </div>
                </div>
    </>
     );
}
 
export default Cards;

// fpropsunction Cards(dataArray[0]) {
//     return (
//         <>
//             <div className="card">
//                 <img className="images" src={dataArray.thumbnail} alt="Practical Machine Learning with Python and Keras" />
//                 <div className="text-part">
//                     <h1 className="title">{dataArray.title}</h1>
//                     <span className="edyoda">{dataArray.author}</span> | <span className="date">{dataArray.date}</span>
//                     <p className="description">{dataArray.description}</p>
//                 </div>
//             </div>
//         </>
//     )
// };
// export default Cards;