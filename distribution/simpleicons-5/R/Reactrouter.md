# Reactrouter


```text
simpleicons-5/R/Reactrouter
```

```text
include('simpleicons-5/R/Reactrouter')
```



| Illustration | Reactrouter |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Reactrouter.png) | ![illustration for Reactrouter](../../simpleicons-5/R/Reactrouter.Local.png) |




## Reactrouter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Reactrouter
include('simpleicons-5/R/Reactrouter')

' renders the element
Reactrouter('Reactrouter', 'Reactrouter', 'an optional tech label')
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

' loads the Item which embeds the element Reactrouter
include('simpleicons-5/R/Reactrouter')

' renders the element
Reactrouter('Reactrouter', 'Reactrouter', 'an optional tech label')
@enduml
```

