# Philipshue


```text
simpleicons-6/P/Philipshue
```

```text
include('simpleicons-6/P/Philipshue')
```



| Illustration | Philipshue |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Philipshue.png) | ![illustration for Philipshue](../../simpleicons-6/P/Philipshue.Local.png) |




## Philipshue

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Philipshue
include('simpleicons-6/P/Philipshue')

' renders the element
Philipshue('Philipshue', 'Philipshue', 'an optional tech label')
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

' loads the Item which embeds the element Philipshue
include('simpleicons-6/P/Philipshue')

' renders the element
Philipshue('Philipshue', 'Philipshue', 'an optional tech label')
@enduml
```

