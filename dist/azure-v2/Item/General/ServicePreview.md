# Service Preview

```text
azure-v2/Item/General/ServicePreview
```

```text
include('azure-v2/Item/General/ServicePreview')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServicePreview.png)|![](ServicePreview.card.png)|![](ServicePreview.element.png)|![](ServicePreview.group.png)|



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
' loads the ServicePreview element
include('azure-v2/Item/General/ServicePreview')
ServicePreviewCard('service_preview', 'Service Preview', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServicePreview element
include('azure-v2/Item/General/ServicePreview')
ServicePreviewCard('service_preview', 'Service Preview', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServicePreview element
include('azure-v2/Item/General/ServicePreview')
ServicePreview('service_preview', 'Service Preview', 'an optional tech field')
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
' loads the ServicePreview element
include('azure-v2/Item/General/ServicePreview')
ServicePreview('service_preview', 'Service Preview', 'an optional tech field')
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
' loads the ServicePreview element
include('azure-v2/Item/General/ServicePreview')
ServicePreviewGroup('service_preview', 'Service Preview', 'an optional tech field'){
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
' loads the ServicePreview element
include('azure-v2/Item/General/ServicePreview')
ServicePreviewGroup('service_preview', 'Service Preview', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

