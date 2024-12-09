document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Останавливаем отправку формы

    const countryCode = document.getElementById("country").value;
    const phoneNumber = document.getElementById("phone").value.trim();

    if (phoneNumber === "") {
        alert("Введите номер телефона");
        return;
    }

    const fullPhoneNumber = `${countryCode} ${phoneNumber}`;
    console.log("Полный номер телефона:", fullPhoneNumber);
    alert(`Регистрация с номером: ${fullPhoneNumber}`);
});