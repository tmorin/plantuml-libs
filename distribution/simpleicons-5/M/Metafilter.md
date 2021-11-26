# Metafilter


```text
simpleicons-5/M/Metafilter
```

```text
include('simpleicons-5/M/Metafilter')
```



| Illustration | Metafilter |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Metafilter.png) | ![illustration for Metafilter](../../simpleicons-5/M/Metafilter.Local.png) |




## Metafilter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Metafilter
include('simpleicons-5/M/Metafilter')

' renders the element
Metafilter('Metafilter', 'Metafilter', 'an optional tech label')
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

' loads the Item which embeds the element Metafilter
include('simpleicons-5/M/Metafilter')

' renders the element
Metafilter('Metafilter', 'Metafilter', 'an optional tech label')
@enduml
```

