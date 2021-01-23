# Cloud Routes

```text
gcp/Item/Networking/CloudRoutes
```

```text
include('gcp/Item/Networking/CloudRoutes')
```

|icon|card|element|group|
|---|---|---|---|
|![](CloudRoutes.png)|![](CloudRoutes.card.png)|![](CloudRoutes.element.png)|![](CloudRoutes.group.png)|



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
' loads the CloudRoutes element
include('gcp/Item/Networking/CloudRoutes')
CloudRoutesCard('cloud_routes', 'Cloud Routes', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudRoutes element
include('gcp/Item/Networking/CloudRoutes')
CloudRoutesCard('cloud_routes', 'Cloud Routes', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudRoutes element
include('gcp/Item/Networking/CloudRoutes')
CloudRoutes('cloud_routes', 'Cloud Routes', 'an optional tech field')
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
' loads the CloudRoutes element
include('gcp/Item/Networking/CloudRoutes')
CloudRoutes('cloud_routes', 'Cloud Routes', 'an optional tech field')
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
' loads the CloudRoutes element
include('gcp/Item/Networking/CloudRoutes')
CloudRoutesGroup('cloud_routes', 'Cloud Routes', 'an optional tech field'){
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
' loads the CloudRoutes element
include('gcp/Item/Networking/CloudRoutes')
CloudRoutesGroup('cloud_routes', 'Cloud Routes', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

