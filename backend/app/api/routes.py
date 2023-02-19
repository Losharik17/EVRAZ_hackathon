from app.api import api, resources

api.add_resource(resources.EksgausterCurrentResource, '/eksgauster')
api.add_resource(resources.EksgausterAllCurrentResource, '/eksgauster_all')
api.add_resource(resources.AglomachineCurrentResource, '/aglomachine')
