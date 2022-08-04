# RingVolume


```text
material-4/Communication/RingVolume
```

```text
include('material-4/Communication/RingVolume')
```



| Illustration | RingVolume |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/RingVolume.png) | ![illustration for RingVolume](../../material-4/Communication/RingVolume.Local.png) |




## RingVolume

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element RingVolume
include('material-4/Communication/RingVolume')

' renders the element
RingVolume('RingVolume', 'Ring Volume', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element RingVolume
include('material-4/Communication/RingVolume')

' renders the element
RingVolume('RingVolume', 'Ring Volume', 'an optional tech label', 'an optional description')
@enduml
```

