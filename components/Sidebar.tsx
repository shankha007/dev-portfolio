const Sidebar = () => {
  return (
    <div>
      <img src="profile.jpg" alt="User Avatar" />
      <h3><span>Shankha Shubhra</span>Das</h3>
      <p>Web Developer</p>
      <p>Download Resume</p>
      {/* //Social Icons */}
      {/* address */}
      <div>
        <div>

          <span>Kolkata, India</span>
        </div>
        <p>shankhasdas07@gmail.com</p>
        <p>+91 9163178138</p>
      </div>
      {/* Email Button */}
      <button>Email Me!</button>
      <button>Toggle Theme</button>
    </div>
  );
};

export default Sidebar;
