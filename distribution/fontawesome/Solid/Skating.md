# Skating


```text
fontawesome/Solid/Skating
```

```text
include('fontawesome/Solid/Skating')
```



| Illustration | Skating |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Skating.png) | ![illustration for Skating](../../fontawesome/Solid/Skating.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SkatingXs>`
- `<$SkatingSm>`
- `<$SkatingMd>`
- `<$SkatingLg>`





## Skating

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Skating
include('fontawesome/Solid/Skating')

' renders the element
Skating('Skating', 'Skating', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Skating
include('fontawesome/Solid/Skating')

' renders the element
Skating('Skating', 'Skating', 'an optional tech label', 'an optional description')
@enduml
```

