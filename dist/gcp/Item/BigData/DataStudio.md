# Data Studio

```text
gcp/Item/BigData/DataStudio
```

```text
include('gcp/Item/BigData/DataStudio')
```

|icon|card|element|group|
|---|---|---|---|
|![](DataStudio.png)|![](DataStudio.card.png)|![](DataStudio.element.png)|![](DataStudio.group.png)|



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
' loads the DataStudio element
include('gcp/Item/BigData/DataStudio')
DataStudioCard('data_studio', 'Data Studio', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the DataStudio element
include('gcp/Item/BigData/DataStudio')
DataStudioCard('data_studio', 'Data Studio', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the DataStudio element
include('gcp/Item/BigData/DataStudio')
DataStudio('data_studio', 'Data Studio', 'an optional tech field')
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
' loads the DataStudio element
include('gcp/Item/BigData/DataStudio')
DataStudio('data_studio', 'Data Studio', 'an optional tech field')
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
' loads the DataStudio element
include('gcp/Item/BigData/DataStudio')
DataStudioGroup('data_studio', 'Data Studio', 'an optional tech field'){
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
' loads the DataStudio element
include('gcp/Item/BigData/DataStudio')
DataStudioGroup('data_studio', 'Data Studio', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

