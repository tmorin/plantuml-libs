# Rundeck


```text
simpleicons/R/Rundeck
```

```text
include('simpleicons/R/Rundeck')
```



| Illustration | Rundeck |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Rundeck.png) | ![illustration for Rundeck](../../simpleicons/R/Rundeck.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RundeckXs>`
- `<$RundeckSm>`
- `<$RundeckMd>`
- `<$RundeckLg>`





## Rundeck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Rundeck
include('simpleicons/R/Rundeck')

' renders the element
Rundeck('Rundeck', 'Rundeck', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rundeck
include('simpleicons/R/Rundeck')

' renders the element
Rundeck('Rundeck', 'Rundeck', 'an optional tech label', 'an optional description')
@enduml
```

