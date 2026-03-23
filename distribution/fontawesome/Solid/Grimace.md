# Grimace


```text
fontawesome/Solid/Grimace
```

```text
include('fontawesome/Solid/Grimace')
```



| Illustration | Grimace |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Grimace.png) | ![illustration for Grimace](../../fontawesome/Solid/Grimace.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GrimaceXs>`
- `<$GrimaceSm>`
- `<$GrimaceMd>`
- `<$GrimaceLg>`





## Grimace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Grimace
include('fontawesome/Solid/Grimace')

' renders the element
Grimace('Grimace', 'Grimace', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Grimace
include('fontawesome/Solid/Grimace')

' renders the element
Grimace('Grimace', 'Grimace', 'an optional tech label', 'an optional description')
@enduml
```

