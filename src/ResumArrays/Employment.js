import getTags from "../Helpers/getTags"
import jesco from "../Assets/jesco.svg"
import self from "../Assets/self.svg"
import apt from "../Assets/apt.png"

const roles = {
    contents: [
        {
            employer: "AdvancePro Technologies",
            role: "Product Expert/Implementations Manager",
            acheivements: [
                "Successfully implemented ERP systems for dozens of clients",
                "Built a massive library of video tutorials for the product",
                "Provides a strong contribution to Sales, Product Leadership, Marketing, and Services Coordination teams"
            ],
            date:"2012-current",
            website: "https://advanceprotech.com/",
            logo:apt,
            tags: ["Technology", "Management", "Education", "Communications"]
        },
        {
            employer: "Self Employed",
            role: "Software Consultant and technical writers",
            acheivements: [
                "Implemented a wide variety of software and web technologies for dozens of clients",
                "Created manuals and guides for products and organizations"
            ],
            date:"2010-2012",
            website: "https://en.wikipedia.org/wiki/Self-employment",
            logo: self,
            tags: ["Technology", "Communications"]
        },
        {
            employer: "Jesco International",
            role: "Regional Sales Manager",
            acheivements: [
                "Managed a team of up to 15 salespeople across southern Ontario",
                "Doubled regional sales within a month of starting",
                "Additionally managed our shipping hub for all national business"
            ],
            date:"2008-2010",
            website: "https://www.corporationwiki.com/Texas/Carrollton/us-jesco-international-ltd-inc/33274735.aspx",
            logo: jesco,
            tags: ["Sales", "Communications"]
        }
        ]
}

roles.tags = getTags(roles.contents)
export default roles