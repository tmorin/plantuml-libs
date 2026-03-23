# Burn


```text
fontawesome/Solid/Burn
```

```text
include('fontawesome/Solid/Burn')
```



| Illustration | Burn |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Burn.png) | ![illustration for Burn](../../fontawesome/Solid/Burn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BurnXs>`
- `<$BurnSm>`
- `<$BurnMd>`
- `<$BurnLg>`





## Burn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Burn
include('fontawesome/Solid/Burn')

' renders the element
Burn('Burn', 'Burn', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Burn
include('fontawesome/Solid/Burn')

' renders the element
Burn('Burn', 'Burn', 'an optional tech label', 'an optional description')
@enduml
```

