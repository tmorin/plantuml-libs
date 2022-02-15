# Darkreader


```text
simpleicons-6/D/Darkreader
```

```text
include('simpleicons-6/D/Darkreader')
```



| Illustration | Darkreader |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/D/Darkreader.png) | ![illustration for Darkreader](../../simpleicons-6/D/Darkreader.Local.png) |




## Darkreader

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Darkreader
include('simpleicons-6/D/Darkreader')

' renders the element
Darkreader('Darkreader', 'Darkreader', 'an optional tech label')
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

' loads the Item which embeds the element Darkreader
include('simpleicons-6/D/Darkreader')

' renders the element
Darkreader('Darkreader', 'Darkreader', 'an optional tech label')
@enduml
```

