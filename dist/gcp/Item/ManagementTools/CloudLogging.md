# Cloud Logging

```text
gcp/Item/ManagementTools/CloudLogging
```

```text
include('gcp/Item/ManagementTools/CloudLogging')
```

|icon|card|element|group|
|---|---|---|---|
|![](CloudLogging.png)|![](CloudLogging.card.png)|![](CloudLogging.element.png)|![](CloudLogging.group.png)|



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
' loads the CloudLogging element
include('gcp/Item/ManagementTools/CloudLogging')
CloudLoggingCard('cloud_logging', 'Cloud Logging', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudLogging element
include('gcp/Item/ManagementTools/CloudLogging')
CloudLoggingCard('cloud_logging', 'Cloud Logging', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudLogging element
include('gcp/Item/ManagementTools/CloudLogging')
CloudLogging('cloud_logging', 'Cloud Logging', 'an optional tech field')
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
' loads the CloudLogging element
include('gcp/Item/ManagementTools/CloudLogging')
CloudLogging('cloud_logging', 'Cloud Logging', 'an optional tech field')
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
' loads the CloudLogging element
include('gcp/Item/ManagementTools/CloudLogging')
CloudLoggingGroup('cloud_logging', 'Cloud Logging', 'an optional tech field'){
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
' loads the CloudLogging element
include('gcp/Item/ManagementTools/CloudLogging')
CloudLoggingGroup('cloud_logging', 'Cloud Logging', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

