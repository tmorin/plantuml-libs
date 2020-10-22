# Service Guide

```text
azure-v2/Item/General/ServiceGuide
```

```text
include('azure-v2/Item/General/ServiceGuide')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceGuide.png)|![](ServiceGuide.card.png)|![](ServiceGuide.element.png)|![](ServiceGuide.group.png)|



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
' loads the ServiceGuide element
include('azure-v2/Item/General/ServiceGuide')
ServiceGuideCard('service_guide', 'Service Guide', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceGuide element
include('azure-v2/Item/General/ServiceGuide')
ServiceGuideCard('service_guide', 'Service Guide', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceGuide element
include('azure-v2/Item/General/ServiceGuide')
ServiceGuide('service_guide', 'Service Guide', 'an optional tech field')
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
' loads the ServiceGuide element
include('azure-v2/Item/General/ServiceGuide')
ServiceGuide('service_guide', 'Service Guide', 'an optional tech field')
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
' loads the ServiceGuide element
include('azure-v2/Item/General/ServiceGuide')
ServiceGuideGroup('service_guide', 'Service Guide', 'an optional tech field'){
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
' loads the ServiceGuide element
include('azure-v2/Item/General/ServiceGuide')
ServiceGuideGroup('service_guide', 'Service Guide', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

