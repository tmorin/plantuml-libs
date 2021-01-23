# Cloud Router

```text
gcp/Item/Networking/CloudRouter
```

```text
include('gcp/Item/Networking/CloudRouter')
```

|icon|card|element|group|
|---|---|---|---|
|![](CloudRouter.png)|![](CloudRouter.card.png)|![](CloudRouter.element.png)|![](CloudRouter.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the CloudRouter element
include('gcp/Item/Networking/CloudRouter')
CloudRouterCard('cloud_router', 'Cloud Router', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the CloudRouter element
include('gcp/Item/Networking/CloudRouter')
CloudRouterCard('cloud_router', 'Cloud Router', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the CloudRouter element
include('gcp/Item/Networking/CloudRouter')
CloudRouter('cloud_router', 'Cloud Router', 'an optional tech field')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the CloudRouter element
include('gcp/Item/Networking/CloudRouter')
CloudRouter('cloud_router', 'Cloud Router', 'an optional tech field')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the CloudRouter element
include('gcp/Item/Networking/CloudRouter')
CloudRouterGroup('cloud_router', 'Cloud Router', 'an optional tech field'){
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the CloudRouter element
include('gcp/Item/Networking/CloudRouter')
CloudRouterGroup('cloud_router', 'Cloud Router', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

