import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";

const Template = () => {
  const [icons, setIcons] = useState([]);

const classList = [
  "bg-gradient-cyan-indigo p-3 rounded text-white",
  "bg-gradient-blue-purple p-3 rounded text-white",
  "bg-gradient-purple-pink p-3 rounded text-white",
  "bg-gradient-pink-rose p-3 rounded text-white",
  "bg-gradient-red-orange p-3 rounded text-white",
  "bg-gradient-orange-yellow p-3 rounded text-dark",
  "bg-gradient-green-teal p-3 rounded text-white",
  "bg-gradient-lime-emerald p-3 rounded text-dark",
  "bg-gradient-teal-blue p-3 rounded text-white",
  "bg-gradient-navy-black p-3 rounded text-white",
  "bg-gradient-silver-gray p-3 rounded text-dark",
  "bg-gradient-gold-amber p-3 rounded text-dark",
  "bg-gradient-sky p-3 rounded text-white",
  "bg-gradient-sunset p-3 rounded text-white",

  // ⭐ NEW BLUE GRADIENTS
  "bg-gradient-blue-sky p-3 rounded text-white",
  "bg-gradient-blue-deep p-3 rounded text-white",
  "bg-gradient-blue-ocean p-3 rounded text-white",
  "bg-gradient-blue-ice p-3 rounded text-dark",
  "bg-gradient-blue-royal p-3 rounded text-white",

  // ⭐ NEW GREEN GRADIENTS
  "bg-gradient-green-lime p-3 rounded text-dark",
  "bg-gradient-green-mint p-3 rounded text-white",
  "bg-gradient-green-forest p-3 rounded text-white",
  "bg-gradient-green-apple p-3 rounded text-dark",
  "bg-gradient-green-neon p-3 rounded text-dark",

  // ⭐ NEW RED / PINK GRADIENTS
  "bg-gradient-red-crimson p-3 rounded text-white",
  "bg-gradient-red-blood p-3 rounded text-white",
  "bg-gradient-pink-bloom p-3 rounded text-dark",
  "bg-gradient-pink-neon p-3 rounded text-white",
  "bg-gradient-rose-hot p-3 rounded text-white",

  // ⭐ NEW ORANGE / GOLD GRADIENTS
  "bg-gradient-orange-fire p-3 rounded text-white",
  "bg-gradient-orange-coral p-3 rounded text-white",
  "bg-gradient-amber-deep p-3 rounded text-dark",
  "bg-gradient-copper-gold p-3 rounded text-dark",
  "bg-gradient-orange-mango p-3 rounded text-dark",

  // ⭐ NEW PURPLE / VIOLET GRADIENTS
  "bg-gradient-purple-deep p-3 rounded text-white",
  "bg-gradient-purple-luxury p-3 rounded text-white",
  "bg-gradient-purple-dusk p-3 rounded text-white",
  "bg-gradient-purple-space p-3 rounded text-white",
  "bg-gradient-lavender-soft p-3 rounded text-dark",

  // ⭐ NEW DARK GRADIENTS
  "bg-gradient-black-carbon p-3 rounded text-white",
  "bg-gradient-black-steel p-3 rounded text-white",
  "bg-gradient-black-silver p-3 rounded text-white",
  "bg-gradient-black-purple p-3 rounded text-white",
  "bg-gradient-night-sky p-3 rounded text-white",

  // ⭐ MULTI-COLOR
  "bg-gradient-rainbow p-3 rounded text-dark",
  "bg-gradient-rainbow-soft p-3 rounded text-dark",
  "bg-gradient-candy p-3 rounded text-dark",
  "bg-gradient-horizon p-3 rounded text-white",
  "bg-gradient-mystic p-3 rounded text-white",
];


  useEffect(() => {
    fetch("/assets/plugins/ionicons/dist/ionicons.json")
      .then((res) => res.json())
      .then((data) => setIcons(data.icons || []))
      .catch((err) => console.error("Error loading ionicons.json:", err));
  }, []);

  return (
    <MainLayout>
      <ol className="breadcrumb float-xl-end">
        <li className="breadcrumb-item"><a href="javascript:;">Home</a></li>
        <li className="breadcrumb-item active">Ionicons</li>
      </ol>

      <h1 className="page-header">
        All Ionicons <small>Complete Icon Library</small>
      </h1>

        {/* CLASS LIST */}
      <div className="row mt-4">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-header fw-bold">ALL Classes Preview</div>

            <div className="card-body">
              <div className="d-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "20px" }}>
                {classList.map((cls, idx) => (
                  <div key={idx} className={cls}>
                    {cls}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ICON LIST */}
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-header fw-bold">ALL IONICONS</div>
            <div className="card-body">
              {icons.length === 0 ? (
                <div>Loading icons...</div>
              ) : (
                <div
                  className="d-grid"
                  style={{
                    gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                    gap: "20px",
                  }}
                >
                  {icons.map((icon, idx) => (
                    <div
                      key={idx}
                      className="text-center p-3 border rounded"
                      style={{ background: "#fafafa" }}
                    >
                      <ion-icon name={icon.name} style={{ fontSize: "32px" }}></ion-icon>
                      <div className="small mt-2">{icon.name}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

    

    </MainLayout>
  );
};

export default Template;
