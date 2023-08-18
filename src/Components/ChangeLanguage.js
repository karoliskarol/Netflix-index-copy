const ChangeLanguage = () => {
    return (
        <div className="language-select d-flex align-items-center">
            <i class="bi bi-globe2"></i>
            <select>
                <option>English</option>
                <option>Russian</option>
            </select>
            <i class="bi bi-caret-down-fill"></i>
        </div>
    );
}

export default ChangeLanguage;