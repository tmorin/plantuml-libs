# DrumSteelpan


```text
fontawesome/Solid/DrumSteelpan
```

```text
include('fontawesome/Solid/DrumSteelpan')
```



| Illustration | DrumSteelpan |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/DrumSteelpan.png) | ![illustration for DrumSteelpan](../../fontawesome/Solid/DrumSteelpan.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DrumSteelpanXs>`
- `<$DrumSteelpanSm>`
- `<$DrumSteelpanMd>`
- `<$DrumSteelpanLg>`





## DrumSteelpan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element DrumSteelpan
include('fontawesome/Solid/DrumSteelpan')

' renders the element
DrumSteelpan('DrumSteelpan', 'Drum Steelpan', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DrumSteelpan
include('fontawesome/Solid/DrumSteelpan')

' renders the element
DrumSteelpan('DrumSteelpan', 'Drum Steelpan', 'an optional tech label', 'an optional description')
@enduml
```

