import "../blocks/Profile.css";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";

function Profile({ onSelectCard, clothingItems, handleCreateModal }) {
  return (
    <section className="profile">
      <SideBar />
      <div className="profile__items">
        <div className="profile__items-header">
          <p className="profile__items-title">Your items</p>
          <button onClick={handleCreateModal} className="profile__items-button">
            + Add new
          </button>
        </div>
        <ClothesSection
          onSelectCard={onSelectCard}
          clothingItems={clothingItems}
        />
      </div>
    </section>
  );
}

export default Profile;
