# Error Reporting

```text
gcp/Item/ManagementTools/ErrorReporting
```

```text
include('gcp/Item/ManagementTools/ErrorReporting')
```

|icon|card|element|group|
|---|---|---|---|
|![](ErrorReporting.png)|![](ErrorReporting.card.png)|![](ErrorReporting.element.png)|![](ErrorReporting.group.png)|



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
' loads the ErrorReporting element
include('gcp/Item/ManagementTools/ErrorReporting')
ErrorReportingCard('error_reporting', 'Error Reporting', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ErrorReporting element
include('gcp/Item/ManagementTools/ErrorReporting')
ErrorReportingCard('error_reporting', 'Error Reporting', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ErrorReporting element
include('gcp/Item/ManagementTools/ErrorReporting')
ErrorReporting('error_reporting', 'Error Reporting', 'an optional tech field')
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
' loads the ErrorReporting element
include('gcp/Item/ManagementTools/ErrorReporting')
ErrorReporting('error_reporting', 'Error Reporting', 'an optional tech field')
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
' loads the ErrorReporting element
include('gcp/Item/ManagementTools/ErrorReporting')
ErrorReportingGroup('error_reporting', 'Error Reporting', 'an optional tech field'){
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
' loads the ErrorReporting element
include('gcp/Item/ManagementTools/ErrorReporting')
ErrorReportingGroup('error_reporting', 'Error Reporting', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

