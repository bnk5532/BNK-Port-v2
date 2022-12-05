import React from "react";
import codeBadge1 from "../../assets/images/codeBadge1.png"

function Recommendations() {
  return (
    <div className="mx-3 pb-2">
      <h1>Recommendations</h1>

      <div className="recommendations">
        "Brian stood out in many ways as a student, but a couple of things that
        really set him apart were his perfect attendance and the fact that he
        consistently arrived early to attend optional office hours before class.
        This is indicative of his commitment to, and focus on, learning to code.
        As his instructor, I could always count on him to not only not be
        absent, but to be truly present. During class, Brian was always actively
        engaged in completing the lesson’s activities, and his problem-solving
        ability soon became apparent: he displayed the all-important skills of
        knowing when to ask questions and knowing what questions to ask. Brian
        also showed that he is a great collaborator with leadership ability, a
        sense of humor, and the proper temperament to take on the challenges of
        software development. He will be a valuable asset to any organization,
        and I give him my full recommendation."
        <br></br>
        <strong> - Peter Colella, <em>Web Developer & Bootcamp Instructor.</em> </strong>
        <br></br>
        <br></br>
        “Using a consultant mindset, Brian takes great pride in finding creative
        solutions to complex problems. I have seen him work tirelessly to find a
        new angle or a new approach that will both meet the financial needs of
        the company and the personal needs of his customers. He is tactful and
        delicate in the way he positions bad news and strives to share the
        silver lining in any difficult situation. A depth of knowledge and
        real-life experience allows Brian to empathize with his customers and
        speak to them in a way that is unique and engaging. His ability to
        deliver consistently strong results make him an asset to any team.”
        <br></br>
        <strong> – Jason Forgey, <em>Program & Project Manager.</em> </strong>
        <br></br>
        <br></br>
        ​​”Brian has an innate ability to constantly think 2-3 steps ahead in
        any situation, always adding value by compelling those he works with to
        use this foresight to plan & prepare for their own success. I’ve worked
        directly with Brian for the better part of five (5) years and have
        personally experienced the dedication, pride and passion that he puts
        into all he’s involved with (both inside & outside of work). Brian
        remains a constant beacon of business knowledge, strategic insight &
        personal integrity that any Team would be fortunate [to] incorporate.”
        <br></br>
        <strong> – Matt Mercer, <em>HR Business Partner.</em></strong>
        <br></br>
        <br></br>
      </div>
      <br></br>
      <br></br>
      <a
        href="https://www.credly.com/badges/a2526be3-fc55-45e8-8c4b-db81fb685808/linked_in?t=rm9jm1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="badge1"
          src={codeBadge1}
          alt=""
        />
      </a>
    </div>
  );
}

export default Recommendations;
