# Opensearch


```text
simpleicons/O/Opensearch
```

```text
include('simpleicons/O/Opensearch')
```



| Illustration | Opensearch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Opensearch.png) | ![illustration for Opensearch](../../simpleicons/O/Opensearch.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpensearchXs>`
- `<$OpensearchSm>`
- `<$OpensearchMd>`
- `<$OpensearchLg>`





## Opensearch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Opensearch
include('simpleicons/O/Opensearch')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Opensearch
include('simpleicons/O/Opensearch')

' renders the element
Opensearch('Opensearch', 'Opensearch', 'an optional tech label', 'an optional description')
@enduml
```

