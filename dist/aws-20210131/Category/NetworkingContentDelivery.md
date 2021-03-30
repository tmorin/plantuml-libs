# Networking Content Delivery

```text
aws-20210131/Category/NetworkingContentDelivery
```

```text
include('aws-20210131/Category/NetworkingContentDelivery')
```

|icon|card|element|group|
|---|---|---|---|
|![](NetworkingContentDelivery.png)|![](NetworkingContentDelivery.card.png)|![](NetworkingContentDelivery.element.png)|![](NetworkingContentDelivery.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the NetworkingContentDelivery element
include('aws-20210131/Category/NetworkingContentDelivery')
NetworkingContentDeliveryCard('networking_content_delivery', 'Networking Content Delivery', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the NetworkingContentDelivery element
include('aws-20210131/Category/NetworkingContentDelivery')
NetworkingContentDeliveryCard('networking_content_delivery', 'Networking Content Delivery', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the NetworkingContentDelivery element
include('aws-20210131/Category/NetworkingContentDelivery')
NetworkingContentDelivery('networking_content_delivery', 'Networking Content Delivery', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the NetworkingContentDelivery element
include('aws-20210131/Category/NetworkingContentDelivery')
NetworkingContentDelivery('networking_content_delivery', 'Networking Content Delivery', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the NetworkingContentDelivery element
include('aws-20210131/Category/NetworkingContentDelivery')
NetworkingContentDeliveryGroup('networking_content_delivery', 'Networking Content Delivery', 'an optional tech field'){
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
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the NetworkingContentDelivery element
include('aws-20210131/Category/NetworkingContentDelivery')
NetworkingContentDeliveryGroup('networking_content_delivery', 'Networking Content Delivery', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

