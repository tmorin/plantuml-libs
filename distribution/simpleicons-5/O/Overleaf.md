# Overleaf


```text
simpleicons-5/O/Overleaf
```

```text
include('simpleicons-5/O/Overleaf')
```



| Illustration | Overleaf |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/O/Overleaf.png) | ![illustration for Overleaf](../../simpleicons-5/O/Overleaf.Local.png) |




## Overleaf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Overleaf
include('simpleicons-5/O/Overleaf')

' renders the element
Overleaf('Overleaf', 'Overleaf', 'an optional tech label')
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

' loads the Item which embeds the element Overleaf
include('simpleicons-5/O/Overleaf')

' renders the element
Overleaf('Overleaf', 'Overleaf', 'an optional tech label')
@enduml
```

