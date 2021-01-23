# Dataprep

```text
gcp/Item/BigData/Dataprep
```

```text
include('gcp/Item/BigData/Dataprep')
```

|icon|card|element|group|
|---|---|---|---|
|![](Dataprep.png)|![](Dataprep.card.png)|![](Dataprep.element.png)|![](Dataprep.group.png)|



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
' loads the Dataprep element
include('gcp/Item/BigData/Dataprep')
DataprepCard('dataprep', 'Dataprep', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Dataprep element
include('gcp/Item/BigData/Dataprep')
DataprepCard('dataprep', 'Dataprep', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Dataprep element
include('gcp/Item/BigData/Dataprep')
Dataprep('dataprep', 'Dataprep', 'an optional tech field')
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
' loads the Dataprep element
include('gcp/Item/BigData/Dataprep')
Dataprep('dataprep', 'Dataprep', 'an optional tech field')
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
' loads the Dataprep element
include('gcp/Item/BigData/Dataprep')
DataprepGroup('dataprep', 'Dataprep', 'an optional tech field'){
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
' loads the Dataprep element
include('gcp/Item/BigData/Dataprep')
DataprepGroup('dataprep', 'Dataprep', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

