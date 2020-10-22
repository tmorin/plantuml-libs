# Service Learn

```text
azure-v2/Item/General/ServiceLearn
```

```text
include('azure-v2/Item/General/ServiceLearn')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceLearn.png)|![](ServiceLearn.card.png)|![](ServiceLearn.element.png)|![](ServiceLearn.group.png)|



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
' loads the ServiceLearn element
include('azure-v2/Item/General/ServiceLearn')
ServiceLearnCard('service_learn', 'Service Learn', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceLearn element
include('azure-v2/Item/General/ServiceLearn')
ServiceLearnCard('service_learn', 'Service Learn', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceLearn element
include('azure-v2/Item/General/ServiceLearn')
ServiceLearn('service_learn', 'Service Learn', 'an optional tech field')
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
' loads the ServiceLearn element
include('azure-v2/Item/General/ServiceLearn')
ServiceLearn('service_learn', 'Service Learn', 'an optional tech field')
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
' loads the ServiceLearn element
include('azure-v2/Item/General/ServiceLearn')
ServiceLearnGroup('service_learn', 'Service Learn', 'an optional tech field'){
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
' loads the ServiceLearn element
include('azure-v2/Item/General/ServiceLearn')
ServiceLearnGroup('service_learn', 'Service Learn', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

