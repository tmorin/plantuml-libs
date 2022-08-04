# Darkreader


```text
simpleicons-7/D/Darkreader
```

```text
include('simpleicons-7/D/Darkreader')
```



| Illustration | Darkreader |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/D/Darkreader.png) | ![illustration for Darkreader](../../simpleicons-7/D/Darkreader.Local.png) |




## Darkreader

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Darkreader
include('simpleicons-7/D/Darkreader')

' renders the element
Darkreader('Darkreader', 'Darkreader', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Darkreader
include('simpleicons-7/D/Darkreader')

' renders the element
Darkreader('Darkreader', 'Darkreader', 'an optional tech label', 'an optional description')
@enduml
```

