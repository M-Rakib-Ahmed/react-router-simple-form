import Cousin from "../Cousin/Cousin";

const Aunty = () => {
    return (
        <div>
            <h1>Aunty</h1>
            <section className="flex">
                <Cousin name={'Mamshad'}></Cousin>
                <Cousin name={'Rokaya'}></Cousin>

            </section>
        </div>
    );
};

export default Aunty;