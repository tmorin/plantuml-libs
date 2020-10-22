# Service Folder Blank

```text
azure-v2/Item/General/ServiceFolderBlank
```

```text
include('azure-v2/Item/General/ServiceFolderBlank')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceFolderBlank.png)|![](ServiceFolderBlank.card.png)|![](ServiceFolderBlank.element.png)|![](ServiceFolderBlank.group.png)|



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
' loads the ServiceFolderBlank element
include('azure-v2/Item/General/ServiceFolderBlank')
ServiceFolderBlankCard('service_folder_blank', 'Service Folder Blank', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceFolderBlank element
include('azure-v2/Item/General/ServiceFolderBlank')
ServiceFolderBlankCard('service_folder_blank', 'Service Folder Blank', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceFolderBlank element
include('azure-v2/Item/General/ServiceFolderBlank')
ServiceFolderBlank('service_folder_blank', 'Service Folder Blank', 'an optional tech field')
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
' loads the ServiceFolderBlank element
include('azure-v2/Item/General/ServiceFolderBlank')
ServiceFolderBlank('service_folder_blank', 'Service Folder Blank', 'an optional tech field')
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
' loads the ServiceFolderBlank element
include('azure-v2/Item/General/ServiceFolderBlank')
ServiceFolderBlankGroup('service_folder_blank', 'Service Folder Blank', 'an optional tech field'){
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
' loads the ServiceFolderBlank element
include('azure-v2/Item/General/ServiceFolderBlank')
ServiceFolderBlankGroup('service_folder_blank', 'Service Folder Blank', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

