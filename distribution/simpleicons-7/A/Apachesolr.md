# Apachesolr


```text
simpleicons-7/A/Apachesolr
```

```text
include('simpleicons-7/A/Apachesolr')
```



| Illustration | Apachesolr |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Apachesolr.png) | ![illustration for Apachesolr](../../simpleicons-7/A/Apachesolr.Local.png) |




## Apachesolr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Apachesolr
include('simpleicons-7/A/Apachesolr')

' renders the element
Apachesolr('Apachesolr', 'Apachesolr', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Apachesolr
include('simpleicons-7/A/Apachesolr')

' renders the element
Apachesolr('Apachesolr', 'Apachesolr', 'an optional tech label', 'an optional description')
@enduml
```

