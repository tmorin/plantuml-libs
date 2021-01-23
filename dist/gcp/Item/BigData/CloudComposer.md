# Cloud Composer

```text
gcp/Item/BigData/CloudComposer
```

```text
include('gcp/Item/BigData/CloudComposer')
```

|icon|card|element|group|
|---|---|---|---|
|![](CloudComposer.png)|![](CloudComposer.card.png)|![](CloudComposer.element.png)|![](CloudComposer.group.png)|



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
' loads the CloudComposer element
include('gcp/Item/BigData/CloudComposer')
CloudComposerCard('cloud_composer', 'Cloud Composer', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudComposer element
include('gcp/Item/BigData/CloudComposer')
CloudComposerCard('cloud_composer', 'Cloud Composer', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudComposer element
include('gcp/Item/BigData/CloudComposer')
CloudComposer('cloud_composer', 'Cloud Composer', 'an optional tech field')
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
' loads the CloudComposer element
include('gcp/Item/BigData/CloudComposer')
CloudComposer('cloud_composer', 'Cloud Composer', 'an optional tech field')
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
' loads the CloudComposer element
include('gcp/Item/BigData/CloudComposer')
CloudComposerGroup('cloud_composer', 'Cloud Composer', 'an optional tech field'){
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
' loads the CloudComposer element
include('gcp/Item/BigData/CloudComposer')
CloudComposerGroup('cloud_composer', 'Cloud Composer', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

