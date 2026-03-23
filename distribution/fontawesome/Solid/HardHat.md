# HardHat


```text
fontawesome/Solid/HardHat
```

```text
include('fontawesome/Solid/HardHat')
```



| Illustration | HardHat |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HardHat.png) | ![illustration for HardHat](../../fontawesome/Solid/HardHat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HardHatXs>`
- `<$HardHatSm>`
- `<$HardHatMd>`
- `<$HardHatLg>`





## HardHat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HardHat
include('fontawesome/Solid/HardHat')

' renders the element
HardHat('HardHat', 'Hard Hat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HardHat
include('fontawesome/Solid/HardHat')

' renders the element
HardHat('HardHat', 'Hard Hat', 'an optional tech label', 'an optional description')
@enduml
```

