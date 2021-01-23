# Istio Logo

```text
gcp/Item/OpenSourceIcons/IstioLogo
```

```text
include('gcp/Item/OpenSourceIcons/IstioLogo')
```

|icon|card|element|group|
|---|---|---|---|
|![](IstioLogo.png)|![](IstioLogo.card.png)|![](IstioLogo.element.png)|![](IstioLogo.group.png)|



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
' loads the IstioLogo element
include('gcp/Item/OpenSourceIcons/IstioLogo')
IstioLogoCard('istio_logo', 'Istio Logo', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IstioLogo element
include('gcp/Item/OpenSourceIcons/IstioLogo')
IstioLogoCard('istio_logo', 'Istio Logo', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IstioLogo element
include('gcp/Item/OpenSourceIcons/IstioLogo')
IstioLogo('istio_logo', 'Istio Logo', 'an optional tech field')
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
' loads the IstioLogo element
include('gcp/Item/OpenSourceIcons/IstioLogo')
IstioLogo('istio_logo', 'Istio Logo', 'an optional tech field')
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
' loads the IstioLogo element
include('gcp/Item/OpenSourceIcons/IstioLogo')
IstioLogoGroup('istio_logo', 'Istio Logo', 'an optional tech field'){
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
' loads the IstioLogo element
include('gcp/Item/OpenSourceIcons/IstioLogo')
IstioLogoGroup('istio_logo', 'Istio Logo', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

