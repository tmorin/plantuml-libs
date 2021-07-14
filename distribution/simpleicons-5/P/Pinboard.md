# Pinboard


```text
simpleicons-5/P/Pinboard
```

```text
include('simpleicons-5/P/Pinboard')
```



| Illustration | Pinboard |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Pinboard.png) | ![illustration for Pinboard](../../simpleicons-5/P/Pinboard.Local.png) |




## Pinboard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Pinboard
include('simpleicons-5/P/Pinboard')

' renders the element
Pinboard('Pinboard', 'Pinboard', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Pinboard
include('simpleicons-5/P/Pinboard')

' renders the element
Pinboard('Pinboard', 'Pinboard', 'an optional tech label')
@enduml
```

