
import './wiki-pages.css'
import './SchoolPolicies.css';

// Import all the cards
// eslint-disable-next-line
import { Info } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Tips } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Important } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Warning } from '../../Global/InfoCardReact.js'

export default function SchoolPolicies() {
    return (
        <div className="wiki-pages-div">
            <div className="spacer-20"></div>
            <h3 className="nav-label"><i className="fa-solid fa-house"></i><i className="fa-solid fa-arrow-right nav-icon"></i>📄 School Policies</h3>

            <div className="spacer-20"></div>
            <h1 id="title">📄 School Policies</h1>
            <t>As useful as our witty commentaries may be, we're aware some of you may wish to look at solid legal documents.</t>
            <t>Therefore, we've added links to each and every one of the school policies for you to read at your own convenience.</t>
            <t>From Attendance to Whistle blowing, CAST really is prepared for anything!</t>
{/* links taken from: https://www.cambridgeast.org.uk/about-us/key-information/policies */}
            <ul className="list-group">
                <li className="list-item"><a href="https://www.cambridgeast.org.uk/Portals/0/adam/Files/hVmFRzHuV02Ti48DY2xDSQ/Url/_Acceptable%20Use%20Policy.pdf" class="list-group-item list-group-item-action ps-1" aria-current="true" target="_blank">
                    Acceptable Use Policy
                    (268.85 KB)
                </a></li>
                <li className="list-item"><a href="https://www.cambridgeast.org.uk/Portals/0/adam/Files/KHmOWy6q4Em7wr2XYnHnyQ/Url/United%20Learning%20Accessibility%20Plan%20Sept%2025.pdf" class="list-group-item list-group-item-action ps-1" aria-current="true" target="_blank">
                    Accessibility Policy
                    (348.04 KB)
                </a></li>
                <li className="list-item"><a href="https://www.cambridgeast.org.uk/Portals/0/adam/Files/tPw0tXDipESTPc5mOoXhXQ/Url/Admission%20Policy%202025-26.pdf" class="list-group-item list-group-item-action ps-1" aria-current="true" target="_blank">
                    Admission Policy 2025-26
                    (230.19 KB)
                </a></li>
                <li className="list-item"><a href="https://www.cambridgeast.org.uk/Portals/0/adam/Files/yQCJo5fruk61n22Kvbj4oQ/Url/Admission%20Policy%202026-27.pdf" class="list-group-item list-group-item-action ps-1" aria-current="true" target="_blank">
                    Admission Policy 2026-27
                    (197.94 KB)
                </a></li>
                <li className="list-item"><a href="https://www.cambridgeast.org.uk/Portals/0/adam/Files/-a5wegehAkCl9EjCFMljJw/Url/Anti-bullying%20Policy.pdf" class="list-group-item list-group-item-action ps-1" aria-current="true" target="_blank">
                    Anti-bullying Policy
                    (272.63 KB)
                </a></li>
                <li className="list-item"><a href="https://www.cambridgeast.org.uk/Portals/0/adam/Files/WMcybW0mOUy3dkO1ZQguLw/Url/Attendance%20Policy.pdf" class="list-group-item list-group-item-action ps-1" aria-current="true" target="_blank">
                    Attendance Policy
                    (385.81 KB)
                </a></li>
                <li className="list-item"><a href="https://www.cambridgeast.org.uk/Portals/0/adam/Files/NyEZfbZD50aB2a_gkZviWw/Url/Behaviour%20Policy.pdf" class="list-group-item list-group-item-action ps-1" aria-current="true" target="_blank">
                    Behaviour Policy
                    (451.23 KB)
                </a></li>
                <li className="list-item"><a href="https://www.cambridgeast.org.uk/Portals/0/adam/Files/9pg63vW_CE6bDWdKTkNwBg/Url/CCTV%20Policy.pdf" class="list-group-item list-group-item-action ps-1" aria-current="true" target="_blank">
                    CCTV Policy
                    (299.16 KB)
                </a></li>
                <li className="list-item"><a href="https://www.cambridgeast.org.uk/Portals/0/adam/Files/184uULs4v0qGPmaVXaMf0w/Url/CEIG%20Policy.pdf" class="list-group-item list-group-item-action ps-1" aria-current="true" target="_blank">
                    CEIG Policy
                    (330.22 KB)
                </a></li>
                <li className="list-item"><a href="https://www.cambridgeast.org.uk/Portals/0/adam/Files/d---IDmf-UGBHafIrgmdlQ/Url/Charging%20and%20Remissions%20Policy.pdf" class="list-group-item list-group-item-action ps-1" aria-current="true" target="_blank">
                    Charging and Remissions Policy
                    (214.69 KB)
                </a></li>
                <li className="list-item"><a href="https://www.cambridgeast.org.uk/Portals/0/adam/Files/hYpdfT0MMU2IVdLJ3ZB51g/Url/Complaints%20Policy.pdf" class="list-group-item list-group-item-action ps-1" aria-current="true" target="_blank">
                    Complaints Policy
                    (725.51 KB)
                </a></li>
                <li className="list-item"><a href="https://www.cambridgeast.org.uk/Portals/0/adam/Files/6yLLW1ayr02ahp8OWkhAqw/Url/Data%20Protection%20Policy.pdf" class="list-group-item list-group-item-action ps-1" aria-current="true" target="_blank">
                    Data Protection Policy
                    (291.62 KB)
                </a></li>
                <li className="list-item"><a href="https://www.cambridgeast.org.uk/Portals/0/adam/Files/5sbvb5OEBUy3aE-TCayzgQ/Url/Equal%20Opportunities%20Statement%20and%20Equality%20Objectives.pdf" class="list-group-item list-group-item-action ps-1" aria-current="true" target="_blank">
                    Equality Analysis and Objectives
                    (185.4 KB)
                </a></li>
                <li className="list-item"><a href="https://www.cambridgeast.org.uk/Portals/0/adam/Files/86k0RDlj2kGoTiHAItL8Rw/Url/Examinations%20Policy.pdf" class="list-group-item list-group-item-action ps-1" aria-current="true" target="_blank">
                    Examinations Policy
                    (487.02 KB)
                </a></li>
                <li className="list-item"><a href="https://www.cambridgeast.org.uk/Portals/0/adam/Files/UcvPDhS2M0a0QKcqKzThjg/Url/Exclusion%20Policy-1.pdf" class="list-group-item list-group-item-action ps-1" aria-current="true" target="_blank">
                    Exclusion Policy
                    (405.21 KB)
                </a></li>
                <li className="list-item"><a href="https://www.cambridgeast.org.uk/Portals/0/adam/Files/iMTJnSwBx0yQjfbtVGHdVA/Url/Freedom-of-Information%20Policy.pdf" class="list-group-item list-group-item-action ps-1" aria-current="true" target="_blank">
                    Freedom-of-Information Policy
                    (144.95 KB)
                </a></li>
                <li className="list-item"><a href="https://www.cambridgeast.org.uk/Portals/0/adam/Files/vKxjvsclAU-AAuhSGANsWg/Url/Health%20and%20Safety%20Policy.pdf" class="list-group-item list-group-item-action ps-1" aria-current="true" target="_blank">
                    Health and Safety Policy
                    (13.84 MB)
                </a></li>
                <li className="list-item"><a href="https://www.cambridgeast.org.uk/Portals/0/adam/Files/JDHBsD_LsEqYefoQO4CSwA/Url/Statement%20of%20Intent%202025-26.pdf" class="list-group-item list-group-item-action ps-1" aria-current="true" target="_blank">
                    Health and Safety Statement of Intent
                    (627.65 KB)
                </a></li>
                <li className="list-item"><a href="https://www.cambridgeast.org.uk/Portals/0/adam/Files/i77zp8bhy0aOBPTugesrow/Url/Online%20Safety%20Policy.pdf" class="list-group-item list-group-item-action ps-1" aria-current="true" target="_blank">
                    Online Safety Policy
                    (370.96 KB)
                </a></li>
                <li className="list-item"><a href="https://www.cambridgeast.org.uk/Portals/0/adam/Files/rVjjuGeQMkqHiGHItlyBHg/Url/Privacy%20Notice%20Policy.pdf" class="list-group-item list-group-item-action ps-1" aria-current="true" target="_blank">
                    Privacy Notice Policy
                    (388.87 KB)
                </a></li>
                <li className="list-item"><a href="https://www.cambridgeast.org.uk/Portals/0/adam/Files/DNdkiqlc3kuUW6WRpTguiQ/Url/Provider%20Access%20Policy.pdf" class="list-group-item list-group-item-action ps-1" aria-current="true" target="_blank">
                    Provider Access Policy
                    (238.49 KB)
                </a></li>
                <li className="list-item"><a href="https://www.cambridgeast.org.uk/Portals/0/adam/Files/roM8xLFpeUCB00FuP0MDWg/Url/Pupil%20Premium%20Statement.pdf" class="list-group-item list-group-item-action ps-1" aria-current="true" target="_blank">
                    Pupil Premium Statement
                    (162.27 KB)
                </a></li>
                <li className="list-item"><a href="https://www.cambridgeast.org.uk/Portals/0/adam/Files/uzbOxoUSZU6HW55-eaIGRw/Url/Records%20Retention%20Schedule.pdf" class="list-group-item list-group-item-action ps-1" aria-current="true" target="_blank">
                    Records Retention Schedule
                    (615.39 KB)
                </a></li>
                <li className="list-item"><a href="https://www.cambridgeast.org.uk/Portals/0/adam/Files/sQAT1oaqpU6wSwszX9rHdQ/Url/Relationship%20and%20Sex%20Education%20Policy.pdf" class="list-group-item list-group-item-action ps-1" aria-current="true" target="_blank">
                    Relationship and Sex Education Policy
                    (501.12 KB)
                </a></li>
                <li className="list-item"><a href="https://www.cambridgeast.org.uk/Portals/0/adam/Files/4wSrC8q8lEmbEJ0hExbrgg/Url/CAST%20Safeguarding%20Policy%202025-26.pdf" class="list-group-item list-group-item-action ps-1" aria-current="true" target="_blank">
                    Safeguarding Policy
                    (579.3 KB)
                </a></li>
                <li className="list-item"><a href="https://www.cambridgeast.org.uk/Portals/0/adam/Files/THNo-4JrDE2_XPhwoUnHMA/Url/SEND%20REPORT.pdf" class="list-group-item list-group-item-action ps-1" aria-current="true" target="_blank">
                    SEND REPORT
                    (432.17 KB)
                </a></li>
                <li className="list-item"><a href="https://www.cambridgeast.org.uk/Portals/0/adam/Files/Hab5mejbGECvgwmwJkSF0A/Url/Special%20Educational%20Needs%20and%20Disability%20Policy.pdf" class="list-group-item list-group-item-action ps-1" aria-current="true" target="_blank">
                    Special Educational Needs and Disability Policy
                    (271.36 KB)
                </a></li>
                <li className="list-item"><a href="https://www.cambridgeast.org.uk/Portals/0/adam/Files/DCRj8_MvVUezXwKNm8oKDQ/Url/Supporting%20Pupils%20with%20Medical%20needs%20policy.pdf" class="list-group-item list-group-item-action ps-1" aria-current="true" target="_blank">
                    Supporting Pupils with Medical needs policy
                    (481.88 KB)
                </a></li>
                <li className="list-item"><a href="https://www.cambridgeast.org.uk/Portals/0/adam/Files/2J5_r7TXY02DgkvffId04Q/Url/Taking,%20storing%20and%20using%20images%20of%20children%20policy.pdf" class="list-group-item list-group-item-action ps-1" aria-current="true" target="_blank">
                    Taking, storing and using images of children policy
                    (188.33 KB)
                </a></li>
                <li className="list-item"><a href="https://www.cambridgeast.org.uk/Portals/0/adam/Files/A2IY_I0HPkWFrNOMO_rkBA/Url/CAST%20Uniform%20Policy.pdf" class="list-group-item list-group-item-action ps-1" aria-current="true" target="_blank">
                    Uniform Policy
                    (333.28 KB)
                </a></li>
                <li className="list-item"><a href="https://www.cambridgeast.org.uk/Portals/0/adam/Files/PUSEn_pMCkKdQ_js-optHQ/Url/United%20Learning%20Whistleblowing%20(Raising%20Concerns)%20Policy-1.pdf" class="list-group-item list-group-item-action ps-1" aria-current="true" target="_blank">
                    United Learning Whistleblowing (Raising Concerns) Policy
                    (387.77 KB)
                </a></li>  
            </ul>       
        </div>

    );
}

