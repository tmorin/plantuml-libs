# RingVolume


```text
material/Communication/RingVolume
```

```text
include('material/Communication/RingVolume')
```



| Illustration | RingVolume |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/RingVolume.png) | ![illustration for RingVolume](../../material/Communication/RingVolume.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RingVolumeXs>`
- `<$RingVolumeSm>`
- `<$RingVolumeMd>`
- `<$RingVolumeLg>`





## RingVolume

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element RingVolume
include('material/Communication/RingVolume')

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
include('material/bootstrap')

' loads the Item which embeds the element RingVolume
include('material/Communication/RingVolume')

' renders the element
RingVolume('RingVolume', 'Ring Volume', 'an optional tech label', 'an optional description')
@enduml
```

