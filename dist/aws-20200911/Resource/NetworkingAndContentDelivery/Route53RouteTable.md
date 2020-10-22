# Route53 Route Table

```text
aws-20200911/Resource/NetworkingAndContentDelivery/Route53RouteTable
```

```text
include('aws-20200911/Resource/NetworkingAndContentDelivery/Route53RouteTable')
```

|icon|card|element|group|
|---|---|---|---|
|![](Route53RouteTable.png)|![](Route53RouteTable.card.png)|![](Route53RouteTable.element.png)|![](Route53RouteTable.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the Route53RouteTable element
include('aws-20200911/Resource/NetworkingAndContentDelivery/Route53RouteTable')
Route53RouteTableCard('route_53_route_table', 'Route53 Route Table', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the Route53RouteTable element
include('aws-20200911/Resource/NetworkingAndContentDelivery/Route53RouteTable')
Route53RouteTableCard('route_53_route_table', 'Route53 Route Table', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the Route53RouteTable element
include('aws-20200911/Resource/NetworkingAndContentDelivery/Route53RouteTable')
Route53RouteTable('route_53_route_table', 'Route53 Route Table', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the Route53RouteTable element
include('aws-20200911/Resource/NetworkingAndContentDelivery/Route53RouteTable')
Route53RouteTable('route_53_route_table', 'Route53 Route Table', 'an optional tech field')
@enduml
```


## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the Route53RouteTable element
include('aws-20200911/Resource/NetworkingAndContentDelivery/Route53RouteTable')
Route53RouteTableGroup('route_53_route_table', 'Route53 Route Table', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the Route53RouteTable element
include('aws-20200911/Resource/NetworkingAndContentDelivery/Route53RouteTable')
Route53RouteTableGroup('route_53_route_table', 'Route53 Route Table', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

