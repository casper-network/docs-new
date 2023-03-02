import React from "react";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import clsx from "clsx";
import { translate } from "@docusaurus/Translate";
import IconMenu from "@theme/Icon/Menu";
import icons from "../../../../icons";
import NavbarMobileSidebar from "@theme/Navbar/MobileSidebar";
import Translate from "@docusaurus/Translate";
import styles from "./MobileSidebarToggle.module.scss";

export default function MobileSidebarToggle() {
    const { toggle, shown, shouldRender } = useNavbarMobileSidebar();
    const mobileSidebar = useNavbarMobileSidebar();

    function NavbarBackdrop(props) {
        return <div role="presentation" {...props} className={clsx("navbar-sidebar__backdrop", props.className)} />;
    }

    return (
        <>
            <button
                onClick={toggle}
                aria-label={translate({
                    id: "theme.docs.sidebar.toggleSidebarButtonAriaLabel",
                    message: "Toggle documentation navigation bar",
                    description: "The ARIA label for documentation menu button of mobile navigation",
                })}
                aria-expanded={shown}
                className={`navbar__toggle clean-btn navBarSite ${styles.navbarMobileTitle}`}
            >
                <div className={styles.navbarMobileTitle_container}>
                    <Translate
                        id="theme.navbar.mobileSidebarSecondaryMenu.toggleSideBarTitle"
                        description="The title of SideBarMobile dropdown toggler (notably used to display the docs sidebar)"
                    >
                        Documentation
                    </Translate>
                    {icons.chevronDown}
                </div>
            </button>
            <NavbarBackdrop onClick={mobileSidebar.toggle} />
            <NavbarMobileSidebar />
        </>
    );
}