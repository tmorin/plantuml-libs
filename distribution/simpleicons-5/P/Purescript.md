# Purescript


```text
simpleicons-5/P/Purescript
```

```text
include('simpleicons-5/P/Purescript')
```



| Illustration | Purescript |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Purescript.png) | ![illustration for Purescript](../../simpleicons-5/P/Purescript.Local.png) |




## Purescript

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Purescript
include('simpleicons-5/P/Purescript')

' renders the element
Purescript('Purescript', 'Purescript', 'an optional tech label')
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

' loads the Item which embeds the element Purescript
include('simpleicons-5/P/Purescript')

' renders the element
Purescript('Purescript', 'Purescript', 'an optional tech label')
@enduml
```

