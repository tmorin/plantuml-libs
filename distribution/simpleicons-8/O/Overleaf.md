# Overleaf


```text
simpleicons-8/O/Overleaf
```

```text
include('simpleicons-8/O/Overleaf')
```



| Illustration | Overleaf |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/O/Overleaf.png) | ![illustration for Overleaf](../../simpleicons-8/O/Overleaf.Local.png) |




## Overleaf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Overleaf
include('simpleicons-8/O/Overleaf')

' renders the element
Overleaf('Overleaf', 'Overleaf', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Overleaf
include('simpleicons-8/O/Overleaf')

' renders the element
Overleaf('Overleaf', 'Overleaf', 'an optional tech label', 'an optional description')
@enduml
```

