# Onstar


```text
simpleicons-5/O/Onstar
```

```text
include('simpleicons-5/O/Onstar')
```



| Illustration | Onstar |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/O/Onstar.png) | ![illustration for Onstar](../../simpleicons-5/O/Onstar.Local.png) |




## Onstar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Onstar
include('simpleicons-5/O/Onstar')

' renders the element
Onstar('Onstar', 'Onstar', 'an optional tech label')
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

' loads the Item which embeds the element Onstar
include('simpleicons-5/O/Onstar')

' renders the element
Onstar('Onstar', 'Onstar', 'an optional tech label')
@enduml
```

