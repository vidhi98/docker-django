from django.shortcuts import render
from .models import Case
# from bson.json_util import dumps, loads
import json

#
# class Object:
#     def toJSON(self):
#         return json.dumps(self, default=lambda o: o.__dict__,
#                           sort_keys=True, indent=4)
#

def index(request):
    all_users = Case.objects.all()
    # all_users = all_users.toJson()
    print(all_users)

    return render(request, "build/index.html")
