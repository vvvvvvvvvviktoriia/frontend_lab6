document.getElementById('fetchButton').addEventListener('click', () => {
    fetch('https://randomuser.me/api/?results=5')  // Отримуємо 5 користувачів
        .then(response => response.json())
        .then(data => {
            const users = data.results;
            const userInfoContainer = document.getElementById('userInfoContainer');
            userInfoContainer.innerHTML = ''; // Очищаємо контейнер перед новим заповненням

            users.forEach(user => {
                const picture = `<img src="${user.picture.large}" alt="User Picture">`;
                const name = `${user.name.title} ${user.name.first} ${user.name.last}`;
                const city = user.location.city;
                const postcode = user.location.postcode;
                const phone = user.phone;

                // Додаємо новий блок для кожного користувача
                const card = `
                    <div class="user-card">
                        ${picture}
                        <p><strong>Gender:</strong> ${user.gender}</p>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>City:</strong> ${city}</p>
                        <p><strong>Postcode:</strong> ${postcode}</p>
                        <p><strong>Phone:</strong> ${phone}</p>
                    </div>
                `;
                userInfoContainer.innerHTML += card;
            });

            // Показуємо повідомлення про успіх
            document.getElementById('successMessage').style.display = 'block';
        })
        .catch(error => console.error('Error fetching data:', error));
});
