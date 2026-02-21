# Clapperboard


```text
fontawesome/Solid/Clapperboard
```

```text
include('fontawesome/Solid/Clapperboard')
```



| Illustration | Clapperboard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Clapperboard.png) | ![illustration for Clapperboard](../../fontawesome/Solid/Clapperboard.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ClapperboardXs>`
- `<$ClapperboardSm>`
- `<$ClapperboardMd>`
- `<$ClapperboardLg>`





## Clapperboard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Clapperboard
include('fontawesome/Solid/Clapperboard')

' renders the element
Clapperboard('Clapperboard', 'Clapperboard', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Clapperboard
include('fontawesome/Solid/Clapperboard')

' renders the element
Clapperboard('Clapperboard', 'Clapperboard', 'an optional tech label', 'an optional description')
@enduml
```

