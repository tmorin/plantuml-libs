# Rolldown


```text
simpleicons-14/R/Rolldown
```

```text
include('simpleicons-14/R/Rolldown')
```



| Illustration | Rolldown |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Rolldown.png) | ![illustration for Rolldown](../../simpleicons-14/R/Rolldown.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RolldownXs>`
- `<$RolldownSm>`
- `<$RolldownMd>`
- `<$RolldownLg>`





## Rolldown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Rolldown
include('simpleicons-14/R/Rolldown')

' renders the element
Rolldown('Rolldown', 'Rolldown', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Rolldown
include('simpleicons-14/R/Rolldown')

' renders the element
Rolldown('Rolldown', 'Rolldown', 'an optional tech label', 'an optional description')
@enduml
```

