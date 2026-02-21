# SprayCanSparkles


```text
fontawesome/Solid/SprayCanSparkles
```

```text
include('fontawesome/Solid/SprayCanSparkles')
```



| Illustration | SprayCanSparkles |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SprayCanSparkles.png) | ![illustration for SprayCanSparkles](../../fontawesome/Solid/SprayCanSparkles.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SprayCanSparklesXs>`
- `<$SprayCanSparklesSm>`
- `<$SprayCanSparklesMd>`
- `<$SprayCanSparklesLg>`





## SprayCanSparkles

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SprayCanSparkles
include('fontawesome/Solid/SprayCanSparkles')

' renders the element
SprayCanSparkles('SprayCanSparkles', 'Spray Can Sparkles', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SprayCanSparkles
include('fontawesome/Solid/SprayCanSparkles')

' renders the element
SprayCanSparkles('SprayCanSparkles', 'Spray Can Sparkles', 'an optional tech label', 'an optional description')
@enduml
```

