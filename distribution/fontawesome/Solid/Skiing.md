# Skiing


```text
fontawesome/Solid/Skiing
```

```text
include('fontawesome/Solid/Skiing')
```



| Illustration | Skiing |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Skiing.png) | ![illustration for Skiing](../../fontawesome/Solid/Skiing.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SkiingXs>`
- `<$SkiingSm>`
- `<$SkiingMd>`
- `<$SkiingLg>`





## Skiing

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Skiing
include('fontawesome/Solid/Skiing')

' renders the element
Skiing('Skiing', 'Skiing', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Skiing
include('fontawesome/Solid/Skiing')

' renders the element
Skiing('Skiing', 'Skiing', 'an optional tech label', 'an optional description')
@enduml
```

