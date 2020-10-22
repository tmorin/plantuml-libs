# Application Integration

```text
aws-20200430/Item/ApplicationIntegration/ApplicationIntegration
```

```text
include('aws-20200430/Item/ApplicationIntegration/ApplicationIntegration')
```

|icon|card|element|group|
|---|---|---|---|
|![](ApplicationIntegration.png)|![](ApplicationIntegration.card.png)|![](ApplicationIntegration.element.png)|![](ApplicationIntegration.group.png)|



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
' loads the ApplicationIntegration element
include('aws-20200430/Item/ApplicationIntegration/ApplicationIntegration')
ApplicationIntegrationCard('application_integration', 'Application Integration', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ApplicationIntegration element
include('aws-20200430/Item/ApplicationIntegration/ApplicationIntegration')
ApplicationIntegrationCard('application_integration', 'Application Integration', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ApplicationIntegration element
include('aws-20200430/Item/ApplicationIntegration/ApplicationIntegration')
ApplicationIntegration('application_integration', 'Application Integration', 'an optional tech field')
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
' loads the ApplicationIntegration element
include('aws-20200430/Item/ApplicationIntegration/ApplicationIntegration')
ApplicationIntegration('application_integration', 'Application Integration', 'an optional tech field')
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
' loads the ApplicationIntegration element
include('aws-20200430/Item/ApplicationIntegration/ApplicationIntegration')
ApplicationIntegrationGroup('application_integration', 'Application Integration', 'an optional tech field'){
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
' loads the ApplicationIntegration element
include('aws-20200430/Item/ApplicationIntegration/ApplicationIntegration')
ApplicationIntegrationGroup('application_integration', 'Application Integration', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

