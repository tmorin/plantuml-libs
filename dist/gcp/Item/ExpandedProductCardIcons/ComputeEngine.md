# Compute Engine

```text
gcp/Item/ExpandedProductCardIcons/ComputeEngine
```

```text
include('gcp/Item/ExpandedProductCardIcons/ComputeEngine')
```

|icon|card|element|group|
|---|---|---|---|
|![](ComputeEngine.png)|![](ComputeEngine.card.png)|![](ComputeEngine.element.png)|![](ComputeEngine.group.png)|



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
' loads the ComputeEngine element
include('gcp/Item/ExpandedProductCardIcons/ComputeEngine')
ComputeEngineCard('compute_engine', 'Compute Engine', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ComputeEngine element
include('gcp/Item/ExpandedProductCardIcons/ComputeEngine')
ComputeEngineCard('compute_engine', 'Compute Engine', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ComputeEngine element
include('gcp/Item/ExpandedProductCardIcons/ComputeEngine')
ComputeEngine('compute_engine', 'Compute Engine', 'an optional tech field')
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
' loads the ComputeEngine element
include('gcp/Item/ExpandedProductCardIcons/ComputeEngine')
ComputeEngine('compute_engine', 'Compute Engine', 'an optional tech field')
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
' loads the ComputeEngine element
include('gcp/Item/ExpandedProductCardIcons/ComputeEngine')
ComputeEngineGroup('compute_engine', 'Compute Engine', 'an optional tech field'){
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
' loads the ComputeEngine element
include('gcp/Item/ExpandedProductCardIcons/ComputeEngine')
ComputeEngineGroup('compute_engine', 'Compute Engine', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

