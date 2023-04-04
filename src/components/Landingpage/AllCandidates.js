import React from 'react'
import pic from '../../assects/dp.png'
import pic2 from '../../assects/pht.png'
import Card1 from '../common/Card1'
const data = [
{
  icon: pic,
  title1: "Microsoft",
  sub: "Freelance",
  title2: "Senior UI Designer",
  sub2: "Fulltime",
  para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.",
  price: "$2500/month",
  btn: "Apply Now"
},
{
  icon: pic,
  title1: "Microsoft",
  sub: "Freelance",
  title2: "Senior UI Designer",
  sub2: "Fulltime",
  para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.",
  price: "$2500/month",
  btn: "Apply Now"
},
{
  icon: pic,
  title1: "Microsoft",
  sub: "Freelance",
  title2: "Senior UI Designer",
  sub2: "Fulltime",
  para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.",
  price: "$2500/month",
  btn: "Apply Now"
},
{
  icon: pic,
  title1: "Microsoft",
  sub: "Freelance",
  title2: "Senior UI Designer",
  sub2: "Fulltime",
  para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.",
  price: "$2500/month",
  btn: "Apply Now"
},
{
  icon: pic,
  title1: "Microsoft",
  sub: "Freelance",
  title2: "Senior UI Designer",
  sub2: "Fulltime",
  para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.",
  price: "$2500/month",
  btn: "Apply Now"
},
{
  icon: pic,
  title1: "Microsoft",
  sub: "Freelance",
  title2: "Senior UI Designer",
  sub2: "Fulltime",
  para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.",
  price: "$2500/month",
  btn: "Apply Now"
},
{
  icon: pic,
  title1: "Microsoft",
  sub: "Freelance",
  title2: "Senior UI Designer",
  sub2: "Fulltime",
  para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.",
  price: "$2500/month",
  btn: "Apply Now"
},
{
  icon: pic,
  title1: "Microsoft",
  sub: "Freelance",
  title2: "Senior UI Designer",
  sub2: "Fulltime",
  para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.",
  price: "$2500/month",
  btn: "Apply Now"
}
]

function Allcandidates() {
  return (
    <div className="box">
      <div className='box1'> 
      {data.map((item, index) => {
        return (
          <Card1
            icon={item.icon}
            title1={item.title1}
            title2={item.title2}
            para={item.para}
            sub={item.sub}
            sub2={item.sub2}
            price={item.price}
            btn={item.btn}
            key={index}
          />
        );
      })}
      </div>

     <div className='box2'><button>Find More Jobs</button></div>

     <div className='box3'> <img src={pic2} alt='logo'/> </div>

    </div>
  )
}

export default Allcandidates
