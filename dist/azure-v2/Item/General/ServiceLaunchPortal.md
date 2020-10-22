# Service Launch Portal

```text
azure-v2/Item/General/ServiceLaunchPortal
```

```text
include('azure-v2/Item/General/ServiceLaunchPortal')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceLaunchPortal.png)|![](ServiceLaunchPortal.card.png)|![](ServiceLaunchPortal.element.png)|![](ServiceLaunchPortal.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceLaunchPortal element
include('azure-v2/Item/General/ServiceLaunchPortal')
ServiceLaunchPortalCard('service_launch_portal', 'Service Launch Portal', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceLaunchPortal element
include('azure-v2/Item/General/ServiceLaunchPortal')
ServiceLaunchPortalCard('service_launch_portal', 'Service Launch Portal', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceLaunchPortal element
include('azure-v2/Item/General/ServiceLaunchPortal')
ServiceLaunchPortal('service_launch_portal', 'Service Launch Portal', 'an optional tech field')
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
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceLaunchPortal element
include('azure-v2/Item/General/ServiceLaunchPortal')
ServiceLaunchPortal('service_launch_portal', 'Service Launch Portal', 'an optional tech field')
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
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceLaunchPortal element
include('azure-v2/Item/General/ServiceLaunchPortal')
ServiceLaunchPortalGroup('service_launch_portal', 'Service Launch Portal', 'an optional tech field'){
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
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceLaunchPortal element
include('azure-v2/Item/General/ServiceLaunchPortal')
ServiceLaunchPortalGroup('service_launch_portal', 'Service Launch Portal', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

