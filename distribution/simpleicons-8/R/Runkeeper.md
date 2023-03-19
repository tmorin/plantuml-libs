# Runkeeper


```text
simpleicons-8/R/Runkeeper
```

```text
include('simpleicons-8/R/Runkeeper')
```



| Illustration | Runkeeper |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/R/Runkeeper.png) | ![illustration for Runkeeper](../../simpleicons-8/R/Runkeeper.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RunkeeperXs>`
- `<$RunkeeperSm>`
- `<$RunkeeperMd>`
- `<$RunkeeperLg>`





## Runkeeper

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Runkeeper
include('simpleicons-8/R/Runkeeper')

' renders the element
Runkeeper('Runkeeper', 'Runkeeper', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Runkeeper
include('simpleicons-8/R/Runkeeper')

' renders the element
Runkeeper('Runkeeper', 'Runkeeper', 'an optional tech label', 'an optional description')
@enduml
```

