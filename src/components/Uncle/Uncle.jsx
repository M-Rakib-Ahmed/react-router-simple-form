import Cousin from "../Cousin/Cousin";


const Uncle = ({asset}) => {
    return (
        <div>
           <h1>Uncle</h1> 
           <section className="flex">
            <Cousin name={'M Rakib Ahmed'} asset={asset}></Cousin>
            <Cousin name={'Md Rafiul Islam'}></Cousin>
           </section>
        </div>
    );
};

export default Uncle;