# Networking And Content Delivery

```text
aws-20200430/Item/NetworkingContentDelivery/NetworkingAndContentDelivery
```

```text
include('aws-20200430/Item/NetworkingContentDelivery/NetworkingAndContentDelivery')
```

|icon|card|element|group|
|---|---|---|---|
|![](NetworkingAndContentDelivery.png)|![](NetworkingAndContentDelivery.card.png)|![](NetworkingAndContentDelivery.element.png)|![](NetworkingAndContentDelivery.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the NetworkingAndContentDelivery element
include('aws-20200430/Item/NetworkingContentDelivery/NetworkingAndContentDelivery')
NetworkingAndContentDeliveryCard('networking_and_content_delivery', 'Networking And Content Delivery', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the NetworkingAndContentDelivery element
include('aws-20200430/Item/NetworkingContentDelivery/NetworkingAndContentDelivery')
NetworkingAndContentDeliveryCard('networking_and_content_delivery', 'Networking And Content Delivery', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the NetworkingAndContentDelivery element
include('aws-20200430/Item/NetworkingContentDelivery/NetworkingAndContentDelivery')
NetworkingAndContentDelivery('networking_and_content_delivery', 'Networking And Content Delivery', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the NetworkingAndContentDelivery element
include('aws-20200430/Item/NetworkingContentDelivery/NetworkingAndContentDelivery')
NetworkingAndContentDelivery('networking_and_content_delivery', 'Networking And Content Delivery', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the NetworkingAndContentDelivery element
include('aws-20200430/Item/NetworkingContentDelivery/NetworkingAndContentDelivery')
NetworkingAndContentDeliveryGroup('networking_and_content_delivery', 'Networking And Content Delivery', 'an optional tech field'){
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the NetworkingAndContentDelivery element
include('aws-20200430/Item/NetworkingContentDelivery/NetworkingAndContentDelivery')
NetworkingAndContentDeliveryGroup('networking_and_content_delivery', 'Networking And Content Delivery', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

