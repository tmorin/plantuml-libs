# Opensearch


```text
simpleicons-7/O/Opensearch
```

```text
include('simpleicons-7/O/Opensearch')
```



| Illustration | Opensearch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/O/Opensearch.png) | ![illustration for Opensearch](../../simpleicons-7/O/Opensearch.Local.png) |




## Opensearch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Opensearch
include('simpleicons-7/O/Opensearch')

' renders the element
Opensearch('Opensearch', 'Opensearch', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Opensearch
include('simpleicons-7/O/Opensearch')

' renders the element
Opensearch('Opensearch', 'Opensearch', 'an optional tech label', 'an optional description')
@enduml
```

