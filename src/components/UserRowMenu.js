import React, { useEffect, useRef } from "react";
import "../scss/UserRowMenu.css";
import { useNavigate } from "react-router-dom";

const UserRowMenu = ({
  index,
  user,
  toggleRowMenu,
  totalPosts,
  onHandleClose,
}) => {
  const navigate = useNavigate();

  const containerRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target) &&
        !event.target.classList.contains("icon-menu-svg")
      ) {
        onHandleClose(index);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [containerRef, onHandleClose]);

  const activateUser = (e) => {
    if (user) {
      user.status = "active";
      e.target.parentElement.parentElement.parentElement.children[0].textContent =
        user.status;
      Array.from(
        e.target.parentElement.parentElement.parentElement.children
      ).forEach((userTag) => {
        if (userTag.textContent.toLowerCase() === "inactive") {
          userTag.classList.add("inactive");
          userTag.classList.remove("pending");
          userTag.classList.remove("blacklisted");
        } else if (userTag.textContent.toLowerCase() === "pending") {
          userTag.classList.add("pending");
          userTag.classList.remove("blacklisted");
          userTag.classList.remove("inactive");
        } else if (userTag.textContent.toLowerCase() === "blacklisted") {
          userTag.classList.add("blacklisted");
          userTag.classList.remove("inactive");
          userTag.classList.remove("pending");
        } else {
          userTag.classList.remove("inactive");
          userTag.classList.remove("pending");
          userTag.classList.remove("blacklisted");
        }
      });
    }
    toggleRowMenu(index);
    localStorage.setItem("lendsqr_data", JSON.stringify(totalPosts));
  };

  const blacklistUser = (e) => {
    if (user) {
      user.status = "blacklisted";
      e.target.parentElement.parentElement.parentElement.children[0].textContent =
        user.status;
      Array.from(
        e.target.parentElement.parentElement.parentElement.children
      ).forEach((userTag) => {
        if (userTag.textContent.toLowerCase() === "inactive") {
          userTag.classList.add("inactive");
          userTag.classList.remove("pending");
          userTag.classList.remove("blacklisted");
        } else if (userTag.textContent.toLowerCase() === "pending") {
          userTag.classList.add("pending");
          userTag.classList.remove("blacklisted");
          userTag.classList.remove("inactive");
        } else if (userTag.textContent.toLowerCase() === "blacklisted") {
          userTag.classList.add("blacklisted");
          userTag.classList.remove("inactive");
          userTag.classList.remove("pending");
        } else {
          userTag.classList.remove("inactive");
          userTag.classList.remove("pending");
          userTag.classList.remove("blacklisted");
        }
      });
    }
    toggleRowMenu(index);
    localStorage.setItem("lendsqr_data", JSON.stringify(totalPosts));
  };

  return (
    <div className="row-menu" id={`menu_${index}`} ref={containerRef}>
      <div className="item" onClick={() => navigate(`/user/${user?.userId}`)}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.4533 7.44011L15.4519 7.43845C15.0398 6.92184 14.0948 5.82505 12.7977 4.85586C11.4993 3.88564 9.83832 3.03611 7.99968 3.03611C6.16104 3.03611 4.50011 3.88561 3.20166 4.85582C1.9029 5.82627 0.957157 6.92466 0.545819 7.44047C0.274826 7.76662 0.277249 8.2343 0.544833 8.57367L0.544827 8.57368L0.545641 8.57468C0.956296 9.08187 1.90229 10.1769 3.20172 11.1459C4.50012 12.1141 6.16105 12.9636 7.99968 12.9636C9.83832 12.9636 11.4993 12.1141 12.7977 11.1438C14.0966 10.1732 15.0424 9.07445 15.4537 8.55838C15.7074 8.2495 15.7071 7.74924 15.4533 7.44011ZM7.99968 11.7561C6.48691 11.7561 5.06807 11.0225 3.92942 10.172C2.84501 9.36201 2.02502 8.4537 1.63351 7.9981C2.01625 7.53083 2.83628 6.6224 3.92306 5.81583C5.06351 4.96943 6.48657 4.24347 7.99968 4.24347C9.51274 4.24347 10.9317 4.96936 12.0701 5.81576C13.1557 6.62284 13.9761 7.53202 14.3662 7.99979C13.9762 8.46752 13.1557 9.3767 12.0701 10.1838C10.9317 11.0302 9.51274 11.7561 7.99968 11.7561Z"
            fill="#545F7D"
            stroke="#545F7D"
            stroke-width="0.2"
          />
          <path
            d="M8.00014 4.90818C6.29675 4.90818 4.9083 6.2967 4.9083 8.00002C4.9083 9.70334 6.29682 11.0919 8.00014 11.0919C9.70346 11.0919 11.092 9.70334 11.092 8.00002C11.092 6.29669 9.70346 4.90818 8.00014 4.90818ZM8.00014 9.88386C6.96726 9.88386 6.11646 9.0324 6.11646 8.00018C6.11646 6.96728 6.96732 6.1165 8.00014 6.1165C9.03296 6.1165 9.88382 6.96736 9.88382 8.00018C9.88382 9.033 9.03296 9.88386 8.00014 9.88386Z"
            fill="#545F7D"
            stroke="#545F7D"
            stroke-width="0.2"
          />
        </svg>
        <p>View Details</p>
      </div>
      <div className="item" onClick={blacklistUser}>
        <svg
          width="12"
          height="14"
          viewBox="0 0 12 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.6974 5.68751L11.2446 6.23463C11.3484 6.33478 11.4072 6.47227 11.4085 6.61626C11.4099 6.76017 11.3528 6.8992 11.2507 7.00076M10.6974 5.68751L11.18 6.93001M10.6974 5.68751L11.2452 5.1397L11.2452 5.13971L11.2464 5.13854C11.4507 4.92746 11.4472 4.59222 11.2404 4.3848L11.2402 4.38457C11.0328 4.1778 10.6975 4.17427 10.4865 4.37863L10.4853 4.37976L9.9375 4.92757M10.6974 5.68751L9.9375 4.92757M11.2507 7.00076C11.2506 7.00082 11.2506 7.00089 11.2505 7.00095L11.18 6.93001M11.2507 7.00076C11.2508 7.00067 11.2509 7.00058 11.251 7.00049L11.18 6.93001M11.2507 7.00076C11.1491 7.10283 11.0101 7.15986 10.8663 7.15852C10.7223 7.15718 10.5848 7.09836 10.4846 6.99459M11.18 6.93001C11.0974 7.01313 10.9842 7.05962 10.8672 7.05853C10.7496 7.05743 10.6375 7.00931 10.556 6.92454M10.4846 6.99459L10.4853 6.99525L10.556 6.92454M10.4846 6.99459C10.4844 6.99434 10.4842 6.99409 10.4839 6.99385L10.556 6.92454M10.4846 6.99459L10.556 6.92454M9.9375 4.92757L9.38969 4.37976L9.38969 4.37975L9.38853 4.37863C9.17744 4.17426 8.84221 4.17782 8.63479 4.38457L8.63456 4.3848C8.42779 4.59222 8.42426 4.92746 8.62861 5.13854L8.6286 5.13855L8.62975 5.1397L9.17756 5.68751L9.9375 4.92757ZM5.08321 5.78713L5.08358 5.7875H5.125C5.84771 5.7875 6.54087 5.50023 7.05183 4.9893L6.98112 4.91859L7.05183 4.9893C7.56276 4.47837 7.85003 3.78519 7.85003 3.06247C7.85003 2.33974 7.56276 1.64659 7.05183 1.13564L6.98112 1.20635L7.05183 1.13564C6.5409 0.624706 5.84772 0.337439 5.125 0.337439C4.40227 0.337439 3.70913 0.624707 3.19817 1.13563L3.19817 1.13564C2.68724 1.64657 2.39997 2.33974 2.39997 3.06247L2.39997 3.06255C2.40054 3.78527 2.68838 4.47782 3.19867 4.9887L3.19875 4.98878C3.69979 5.48925 4.37558 5.77575 5.08321 5.78713ZM3.47503 3.06258C3.47606 2.15407 4.20964 1.41784 5.11715 1.4125H5.125C5.79221 1.4125 6.39395 1.81469 6.64919 2.43084L6.64921 2.43087C6.90495 3.04756 6.76367 3.7576 6.29189 4.22935L6.3626 4.30007L6.29189 4.22936C5.8201 4.70114 5.11009 4.84242 4.49341 4.58668L4.49337 4.58666C3.87725 4.33145 3.47507 3.72976 3.47503 3.06258ZM5.12495 6.52303L5.12487 6.4625C3.82254 6.46417 2.57375 6.98219 1.65273 7.90268L1.65269 7.90273C0.732181 8.82379 0.214215 10.0726 0.2125 11.3749V11.375V13.125C0.2125 13.2673 0.268864 13.4043 0.369758 13.5052L5.12495 6.52303ZM8.96249 12.5875H1.2875V11.375C1.2875 10.0041 2.01876 8.73726 3.20617 8.0519L3.2062 8.05189C4.39368 7.36594 5.85619 7.36594 7.04366 8.05189L7.04369 8.0519C8.23117 8.73731 8.96236 10.0043 8.96236 11.375L8.96249 12.5875ZM10.0082 6.37673L9.93749 6.30602L9.86678 6.37673L9.9375 6.44744L10.0082 6.37673Z"
            fill="#545F7D"
            stroke="#545F7D"
            stroke-width="0.2"
          />
        </svg>
        <p>Blacklist User</p>
      </div>
      <div className="item" onClick={activateUser}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_5530_2525)">
            <path
              d="M4.98844 6.61042L4.9883 6.61032C4.16917 5.99661 3.6376 5.01997 3.6376 3.91777C3.6376 2.10402 5.07433 0.625678 6.87097 0.557898L6.87143 0.554956H6.99998C8.85641 0.554956 10.3613 2.06095 10.3613 3.91726C10.3613 5.01894 9.82975 5.99541 9.01128 6.60916C9.01126 6.60917 9.01124 6.60919 9.01122 6.60921L8.8311 6.74442L9.04517 6.81481C9.04518 6.81481 9.04519 6.81482 9.0452 6.81482C9.86977 7.08578 10.6377 7.52127 11.3015 8.10107L11.3015 8.10111C11.4683 8.24689 11.4846 8.49091 11.3393 8.65726L11.339 8.65759C11.1928 8.82395 10.9489 8.83881 10.7831 8.69395L10.8818 8.58099L10.7831 8.69395C9.77092 7.80959 8.48183 7.30916 7.13928 7.27625H7.12745L7.12248 7.27643C7.08099 7.27795 7.03809 7.27953 6.99838 7.27953C6.95946 7.27953 6.91838 7.27801 6.87793 7.27652L6.8704 7.27625H6.85909C4.2063 7.34106 1.91033 9.24287 1.36801 11.8468L1.36796 11.8471C1.32757 12.0393 1.37682 12.2406 1.50067 12.3934L1.5188 12.4157C1.60005 12.5064 1.7639 12.6326 2.00101 12.6326H6.51279C6.73367 12.6326 6.9067 12.8061 6.9067 13.027C6.9067 13.2492 6.733 13.4209 6.51279 13.4209H2.00101C1.56642 13.4209 1.16332 13.2288 0.889327 12.892L0.889302 12.892C0.613527 12.5528 0.507874 12.1163 0.597436 11.6872L4.98844 6.61042ZM4.98844 6.61042L5.16885 6.74525M4.98844 6.61042L5.16885 6.74525M7.86128 11.061L7.96602 10.9537L7.96608 10.9537C7.9661 10.9538 7.96613 10.9538 7.96615 10.9538L9.59842 12.5462L9.60673 12.5543L9.60695 12.5546C9.71302 12.6487 9.83815 12.6606 9.90482 12.6559L9.90539 12.6559C9.97132 12.6515 10.0909 12.6244 10.1837 12.5199L12.7175 8.98412L12.7176 8.98398C12.781 8.89585 12.8717 8.84017 12.9732 8.82387L13.0491 8.81167L13.0571 8.81973L9.94875 13.4437L9.95862 13.443C10.2896 13.4212 10.6004 13.2595 10.8092 13.0015L10.8046 13.0062L10.8029 13.0078L10.8019 13.0068M7.86128 11.061C7.76284 10.9648 7.613 10.967 7.51621 11.066C7.41996 11.1644 7.4216 11.3137 7.52003 11.4105L9.15523 13.0062C9.34992 13.1916 9.61133 13.295 9.8793 13.295C9.9061 13.295 9.92852 13.295 9.94711 13.2933M7.86128 11.061L9.49368 12.6535M7.86128 11.061L9.49368 12.6535M9.94711 13.2933V13.4433H9.94875V13.4436C9.95207 13.4434 9.95536 13.4432 9.95861 13.4429C9.95918 13.4428 9.95974 13.4428 9.9603 13.4427L9.95359 13.3667L9.94875 13.3119L9.94711 13.2933ZM9.94711 13.2933H9.94875C10.1958 13.277 10.4305 13.1713 10.6075 13.0001C10.6241 13.0151 10.6423 13.0284 10.6566 13.035C10.6809 13.041 10.7225 13.0417 10.7389 13.0388C10.7494 13.0359 10.7664 13.0294 10.773 13.0262C10.7855 13.0198 10.7941 13.0131 10.7972 13.0107C10.7989 13.0093 10.8005 13.008 10.8019 13.0068M10.8019 13.0068C10.8025 13.0063 10.8031 13.0057 10.8037 13.0053C10.8046 13.0044 10.8054 13.0037 10.806 13.0031C10.8084 13.0009 10.8104 12.9989 10.8118 12.9975C10.8124 12.9969 10.8128 12.9964 10.8132 12.9961L10.8146 12.9945L10.8152 12.9939L10.8159 12.9931L10.8169 12.9918L10.7443 12.9373L10.71 12.9116L10.6969 12.9018L10.7105 12.9154L10.7147 12.9196L10.8019 13.0068ZM9.49368 12.6535L9.49532 12.6557C9.64407 12.7957 9.8218 12.8121 9.91532 12.8056C10.0061 12.7996 10.1729 12.7624 10.3014 12.6131L9.49368 12.6535ZM5.16885 6.74525L4.95422 6.81591C4.95422 6.81591 4.95422 6.81591 4.95422 6.81591C4.19092 7.06717 3.47392 7.45838 2.84687 7.97401C1.69729 8.91932 0.899155 10.2389 0.59745 11.6872L5.16885 6.74525ZM4.42376 4.03523V3.91725C4.42376 2.50179 5.5796 1.34523 6.99471 1.34327L6.99471 1.34329H6.99881C8.41557 1.34329 9.57335 2.5001 9.57335 3.91727C9.57335 5.2906 8.48741 6.4205 7.12966 6.48821L7.12964 6.48794L7.12056 6.48895L7.11906 6.48911C7.07768 6.48803 7.03776 6.48748 6.99932 6.48748C6.97359 6.48748 6.94583 6.48798 6.91902 6.48847C6.90572 6.48871 6.89265 6.48895 6.88018 6.48912H6.87965L6.87807 6.48895L6.8781 6.48867L6.86894 6.48821C5.60286 6.42537 4.60496 5.42448 4.47602 4.16989L4.46218 4.03523H4.42376Z"
              fill="#545F7D"
              stroke="#545F7D"
              stroke-width="0.3"
            />
          </g>
          <defs>
            <clipPath id="clip0_5530_2525">
              <rect width="14" height="14" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p>Activate User</p>
      </div>
    </div>
  );
};

export default UserRowMenu;
