# Elm


```text
simpleicons-6/E/Elm
```

```text
include('simpleicons-6/E/Elm')
```



| Illustration | Elm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/E/Elm.png) | ![illustration for Elm](../../simpleicons-6/E/Elm.Local.png) |




## Elm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Elm
include('simpleicons-6/E/Elm')

' renders the element
Elm('Elm', 'Elm', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Elm
include('simpleicons-6/E/Elm')

' renders the element
Elm('Elm', 'Elm', 'an optional tech label')
@enduml
```

