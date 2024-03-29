const Save = ({ onClick, color }) => {
  return (
    <button className="btn-save" onClick={onClick}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet"
        width="20px" 
        height="20px"
      >
        <g
          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
          fill={color}
          stroke="none"
        >
          <path
            d="M1185 4799 c-623 -79 -1101 -596 -1174 -1271 -54 -492 100 -921 501
-1406 230 -276 503 -533 1253 -1176 270 -231 537 -461 595 -511 58 -51 119
-99 137 -109 39 -19 89 -21 123 -3 28 15 1082 916 1300 1111 664 596 980 995
1118 1413 212 637 -3 1358 -513 1721 -364 259 -845 313 -1248 141 -251 -106
-514 -352 -671 -626 -22 -40 -43 -72 -46 -72 -3 0 -24 32 -46 72 -94 164 -263
359 -404 467 -269 205 -589 291 -925 249z"
          />
        </g>
      </svg>
    </button>
  );
};

export default Save;
