# Vpc Router

```text
aws-20200911/Resource/NetworkingAndContentDelivery/VpcRouter
```

```text
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcRouter')
```

|icon|card|element|group|
|---|---|---|---|
|![](VpcRouter.png)|![](VpcRouter.card.png)|![](VpcRouter.element.png)|![](VpcRouter.group.png)|



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
' loads the VpcRouter element
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcRouter')
VpcRouterCard('vpc_router', 'Vpc Router', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the VpcRouter element
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcRouter')
VpcRouterCard('vpc_router', 'Vpc Router', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the VpcRouter element
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcRouter')
VpcRouter('vpc_router', 'Vpc Router', 'an optional tech field')
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
' loads the VpcRouter element
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcRouter')
VpcRouter('vpc_router', 'Vpc Router', 'an optional tech field')
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
' loads the VpcRouter element
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcRouter')
VpcRouterGroup('vpc_router', 'Vpc Router', 'an optional tech field'){
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
' loads the VpcRouter element
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcRouter')
VpcRouterGroup('vpc_router', 'Vpc Router', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

