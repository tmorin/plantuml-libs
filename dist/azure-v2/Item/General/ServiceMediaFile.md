# Service Media File

```text
azure-v2/Item/General/ServiceMediaFile
```

```text
include('azure-v2/Item/General/ServiceMediaFile')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceMediaFile.png)|![](ServiceMediaFile.card.png)|![](ServiceMediaFile.element.png)|![](ServiceMediaFile.group.png)|



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
' loads the ServiceMediaFile element
include('azure-v2/Item/General/ServiceMediaFile')
ServiceMediaFileCard('service_media_file', 'Service Media File', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceMediaFile element
include('azure-v2/Item/General/ServiceMediaFile')
ServiceMediaFileCard('service_media_file', 'Service Media File', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceMediaFile element
include('azure-v2/Item/General/ServiceMediaFile')
ServiceMediaFile('service_media_file', 'Service Media File', 'an optional tech field')
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
' loads the ServiceMediaFile element
include('azure-v2/Item/General/ServiceMediaFile')
ServiceMediaFile('service_media_file', 'Service Media File', 'an optional tech field')
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
' loads the ServiceMediaFile element
include('azure-v2/Item/General/ServiceMediaFile')
ServiceMediaFileGroup('service_media_file', 'Service Media File', 'an optional tech field'){
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
' loads the ServiceMediaFile element
include('azure-v2/Item/General/ServiceMediaFile')
ServiceMediaFileGroup('service_media_file', 'Service Media File', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

