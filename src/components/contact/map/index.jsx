import React from "react";
import "./map.scss";
import Headline from "../../../common/headline";
const Map = () => {
  return (<>
      <Headline headline="Our Location"/>
    <div className="map container animation"  >
      <iframe
        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Khasra no. 162,163, Bhopa Road, Jat Munjheda Khas, Jatmajhra, Muzaffarnagar, Uttar Pradesh&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </>
  );
};

export default Map;
