# PersonSkating


```text
fontawesome/Solid/PersonSkating
```

```text
include('fontawesome/Solid/PersonSkating')
```



| Illustration | PersonSkating |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PersonSkating.png) | ![illustration for PersonSkating](../../fontawesome/Solid/PersonSkating.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonSkatingXs>`
- `<$PersonSkatingSm>`
- `<$PersonSkatingMd>`
- `<$PersonSkatingLg>`





## PersonSkating

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PersonSkating
include('fontawesome/Solid/PersonSkating')

' renders the element
PersonSkating('PersonSkating', 'Person Skating', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonSkating
include('fontawesome/Solid/PersonSkating')

' renders the element
PersonSkating('PersonSkating', 'Person Skating', 'an optional tech label', 'an optional description')
@enduml
```

