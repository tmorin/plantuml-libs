# VolumeUp


```text
fontawesome/Solid/VolumeUp
```

```text
include('fontawesome/Solid/VolumeUp')
```



| Illustration | VolumeUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/VolumeUp.png) | ![illustration for VolumeUp](../../fontawesome/Solid/VolumeUp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VolumeUpXs>`
- `<$VolumeUpSm>`
- `<$VolumeUpMd>`
- `<$VolumeUpLg>`





## VolumeUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element VolumeUp
include('fontawesome/Solid/VolumeUp')

' renders the element
VolumeUp('VolumeUp', 'Volume Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element VolumeUp
include('fontawesome/Solid/VolumeUp')

' renders the element
VolumeUp('VolumeUp', 'Volume Up', 'an optional tech label', 'an optional description')
@enduml
```

