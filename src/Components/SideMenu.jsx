import ButtonComponent from "./ButtonComponent";

export default function SideMenu() {
  const buttons = [
    {
      id: 1,
      name: "button1",
      children: (
        <>
          <i class="bi bi-stars"></i>
          <i class="bi bi-stars"></i>
          <i class="bi bi-stars"></i>
        </>
      ),
    },
    {
      id: 2,
      name: "button2",
      children: (
        <div>
          <img
            src="https://images.pexels.com/photos/30994370/pexels-photo-30994370.jpeg?cs=srgb&dl=pexels-optical-chemist-340351297-30994370.jpg&fm=jpg"
            alt="flower image"
            style={{ width: "50px" }}
          />
        </div>
      ),
    },
    {
      id: 3,
      name: "button3",
      children: (
        <div>
          <i class="bi bi-stars"></i>
          <i class="bi bi-stars"></i>
          <i class="bi bi-stars"></i>

          <div>
            <img
              src="https://images.pexels.com/photos/30994370/pexels-photo-30994370.jpeg?cs=srgb&dl=pexels-optical-chemist-340351297-30994370.jpg&fm=jpg"
              alt="flower image"
              style={{ width: "50px" }}
            />
          </div>
        </div>
      ),
    },
    {
      id: 4,
      name: "button 4",
      children: null,
    },
  ];
  return (
    <div className="button-container">
      {buttons.map((button) => (
        <ButtonComponent key={button.id} name={button.name}>
          {button.children}
        </ButtonComponent>
      ))}
    </div>
  );
}
