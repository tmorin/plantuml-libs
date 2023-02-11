# Popos


```text
simpleicons-8/P/Popos
```

```text
include('simpleicons-8/P/Popos')
```



| Illustration | Popos |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Popos.png) | ![illustration for Popos](../../simpleicons-8/P/Popos.Local.png) |




## Popos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Popos
include('simpleicons-8/P/Popos')

' renders the element
Popos('Popos', 'Popos', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Popos
include('simpleicons-8/P/Popos')

' renders the element
Popos('Popos', 'Popos', 'an optional tech label', 'an optional description')
@enduml
```

