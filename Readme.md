docker-compose up --build

#To create Admin

"docker-compose run doc python manage.py createsuperuser"

#To run migrations

"docker-compose run doc python manage.py makemigrations"

"docker-compose run doc python manage.py migrate"
