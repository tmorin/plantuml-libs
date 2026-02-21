# VolumeOff


```text
fontawesome/Solid/VolumeOff
```

```text
include('fontawesome/Solid/VolumeOff')
```



| Illustration | VolumeOff |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/VolumeOff.png) | ![illustration for VolumeOff](../../fontawesome/Solid/VolumeOff.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VolumeOffXs>`
- `<$VolumeOffSm>`
- `<$VolumeOffMd>`
- `<$VolumeOffLg>`





## VolumeOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element VolumeOff
include('fontawesome/Solid/VolumeOff')

' renders the element
VolumeOff('VolumeOff', 'Volume Off', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element VolumeOff
include('fontawesome/Solid/VolumeOff')

' renders the element
VolumeOff('VolumeOff', 'Volume Off', 'an optional tech label', 'an optional description')
@enduml
```

