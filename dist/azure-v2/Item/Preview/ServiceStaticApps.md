# Service Static Apps

```text
azure-v2/Item/Preview/ServiceStaticApps
```

```text
include('azure-v2/Item/Preview/ServiceStaticApps')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceStaticApps.png)|![](ServiceStaticApps.card.png)|![](ServiceStaticApps.element.png)|![](ServiceStaticApps.group.png)|



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
' loads the ServiceStaticApps element
include('azure-v2/Item/Preview/ServiceStaticApps')
ServiceStaticAppsCard('service_static_apps', 'Service Static Apps', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceStaticApps element
include('azure-v2/Item/Preview/ServiceStaticApps')
ServiceStaticAppsCard('service_static_apps', 'Service Static Apps', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceStaticApps element
include('azure-v2/Item/Preview/ServiceStaticApps')
ServiceStaticApps('service_static_apps', 'Service Static Apps', 'an optional tech field')
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
' loads the ServiceStaticApps element
include('azure-v2/Item/Preview/ServiceStaticApps')
ServiceStaticApps('service_static_apps', 'Service Static Apps', 'an optional tech field')
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
' loads the ServiceStaticApps element
include('azure-v2/Item/Preview/ServiceStaticApps')
ServiceStaticAppsGroup('service_static_apps', 'Service Static Apps', 'an optional tech field'){
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
' loads the ServiceStaticApps element
include('azure-v2/Item/Preview/ServiceStaticApps')
ServiceStaticAppsGroup('service_static_apps', 'Service Static Apps', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

