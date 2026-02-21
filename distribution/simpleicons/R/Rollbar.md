# Rollbar


```text
simpleicons/R/Rollbar
```

```text
include('simpleicons/R/Rollbar')
```



| Illustration | Rollbar |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Rollbar.png) | ![illustration for Rollbar](../../simpleicons/R/Rollbar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RollbarXs>`
- `<$RollbarSm>`
- `<$RollbarMd>`
- `<$RollbarLg>`





## Rollbar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Rollbar
include('simpleicons/R/Rollbar')

' renders the element
Rollbar('Rollbar', 'Rollbar', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Rollbar
include('simpleicons/R/Rollbar')

' renders the element
Rollbar('Rollbar', 'Rollbar', 'an optional tech label', 'an optional description')
@enduml
```

