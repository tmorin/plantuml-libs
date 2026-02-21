# DrumstickBite


```text
fontawesome/Solid/DrumstickBite
```

```text
include('fontawesome/Solid/DrumstickBite')
```



| Illustration | DrumstickBite |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/DrumstickBite.png) | ![illustration for DrumstickBite](../../fontawesome/Solid/DrumstickBite.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DrumstickBiteXs>`
- `<$DrumstickBiteSm>`
- `<$DrumstickBiteMd>`
- `<$DrumstickBiteLg>`





## DrumstickBite

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element DrumstickBite
include('fontawesome/Solid/DrumstickBite')

' renders the element
DrumstickBite('DrumstickBite', 'Drumstick Bite', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DrumstickBite
include('fontawesome/Solid/DrumstickBite')

' renders the element
DrumstickBite('DrumstickBite', 'Drumstick Bite', 'an optional tech label', 'an optional description')
@enduml
```

