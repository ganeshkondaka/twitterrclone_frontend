interface CButtProps {
    data: string;
}

const C_butt: React.FC<CButtProps> = ({ data }) => {
    return (
    <div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
            {data}
        </button>
    </div>
    );
};

export default C_butt;
