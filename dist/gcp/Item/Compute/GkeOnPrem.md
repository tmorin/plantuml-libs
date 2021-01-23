# Gke On Prem

```text
gcp/Item/Compute/GkeOnPrem
```

```text
include('gcp/Item/Compute/GkeOnPrem')
```

|icon|card|element|group|
|---|---|---|---|
|![](GkeOnPrem.png)|![](GkeOnPrem.card.png)|![](GkeOnPrem.element.png)|![](GkeOnPrem.group.png)|



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
' loads the GkeOnPrem element
include('gcp/Item/Compute/GkeOnPrem')
GkeOnPremCard('gke_on_prem', 'Gke On Prem', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the GkeOnPrem element
include('gcp/Item/Compute/GkeOnPrem')
GkeOnPremCard('gke_on_prem', 'Gke On Prem', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the GkeOnPrem element
include('gcp/Item/Compute/GkeOnPrem')
GkeOnPrem('gke_on_prem', 'Gke On Prem', 'an optional tech field')
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
' loads the GkeOnPrem element
include('gcp/Item/Compute/GkeOnPrem')
GkeOnPrem('gke_on_prem', 'Gke On Prem', 'an optional tech field')
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
' loads the GkeOnPrem element
include('gcp/Item/Compute/GkeOnPrem')
GkeOnPremGroup('gke_on_prem', 'Gke On Prem', 'an optional tech field'){
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
' loads the GkeOnPrem element
include('gcp/Item/Compute/GkeOnPrem')
GkeOnPremGroup('gke_on_prem', 'Gke On Prem', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

