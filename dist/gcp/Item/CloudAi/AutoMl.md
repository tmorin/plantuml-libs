# Auto Ml

```text
gcp/Item/CloudAi/AutoMl
```

```text
include('gcp/Item/CloudAi/AutoMl')
```

|icon|card|element|group|
|---|---|---|---|
|![](AutoMl.png)|![](AutoMl.card.png)|![](AutoMl.element.png)|![](AutoMl.group.png)|



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
' loads the AutoMl element
include('gcp/Item/CloudAi/AutoMl')
AutoMlCard('auto_ml', 'Auto Ml', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AutoMl element
include('gcp/Item/CloudAi/AutoMl')
AutoMlCard('auto_ml', 'Auto Ml', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AutoMl element
include('gcp/Item/CloudAi/AutoMl')
AutoMl('auto_ml', 'Auto Ml', 'an optional tech field')
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
' loads the AutoMl element
include('gcp/Item/CloudAi/AutoMl')
AutoMl('auto_ml', 'Auto Ml', 'an optional tech field')
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
' loads the AutoMl element
include('gcp/Item/CloudAi/AutoMl')
AutoMlGroup('auto_ml', 'Auto Ml', 'an optional tech field'){
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
' loads the AutoMl element
include('gcp/Item/CloudAi/AutoMl')
AutoMlGroup('auto_ml', 'Auto Ml', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

