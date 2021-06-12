export const goToHomePage = (history) => {
    history.push("/");
};

export const goToAppFormPage = (history) => {
    history.push("/subscribe");
};

export const goToLoginPage = (history) => {
    history.replace("/login");
};

export const goToTripListPage = (history) => {
    history.push("/trip-list");
};

export const goToTripDetailsPage = (history, id) => {
    history.push(`/trip-details/${id}`);
};

export const goToCreateTripPage = (history) => {
    history.push("/trip-create");
};
