# Container Engine

```text
gcp/Item/ExpandedProductCardIcons/ContainerEngine
```

```text
include('gcp/Item/ExpandedProductCardIcons/ContainerEngine')
```

|icon|card|element|group|
|---|---|---|---|
|![](ContainerEngine.png)|![](ContainerEngine.card.png)|![](ContainerEngine.element.png)|![](ContainerEngine.group.png)|



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
' loads the ContainerEngine element
include('gcp/Item/ExpandedProductCardIcons/ContainerEngine')
ContainerEngineCard('container_engine', 'Container Engine', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ContainerEngine element
include('gcp/Item/ExpandedProductCardIcons/ContainerEngine')
ContainerEngineCard('container_engine', 'Container Engine', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ContainerEngine element
include('gcp/Item/ExpandedProductCardIcons/ContainerEngine')
ContainerEngine('container_engine', 'Container Engine', 'an optional tech field')
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
' loads the ContainerEngine element
include('gcp/Item/ExpandedProductCardIcons/ContainerEngine')
ContainerEngine('container_engine', 'Container Engine', 'an optional tech field')
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
' loads the ContainerEngine element
include('gcp/Item/ExpandedProductCardIcons/ContainerEngine')
ContainerEngineGroup('container_engine', 'Container Engine', 'an optional tech field'){
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
' loads the ContainerEngine element
include('gcp/Item/ExpandedProductCardIcons/ContainerEngine')
ContainerEngineGroup('container_engine', 'Container Engine', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

