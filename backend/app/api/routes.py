from app.api import api, resources

api.add_resource(resources.EksgausterCurrentResource, '/eksgauster/<int:id>')
api.add_resource(resources.EksgausterAllCurrentResource, '/eksgauster_all/<int:id>')
api.add_resource(resources.AglomachineCurrentResource, '/aglomachine')
api.add_resource(resources.GraphicsResource, '/graphics')
