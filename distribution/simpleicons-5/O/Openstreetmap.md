# Openstreetmap


```text
simpleicons-5/O/Openstreetmap
```

```text
include('simpleicons-5/O/Openstreetmap')
```



| Illustration | Openstreetmap |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/O/Openstreetmap.png) | ![illustration for Openstreetmap](../../simpleicons-5/O/Openstreetmap.Local.png) |




## Openstreetmap

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Openstreetmap
include('simpleicons-5/O/Openstreetmap')

' renders the element
Openstreetmap('Openstreetmap', 'Openstreetmap', 'an optional tech label')
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

' loads the Item which embeds the element Openstreetmap
include('simpleicons-5/O/Openstreetmap')

' renders the element
Openstreetmap('Openstreetmap', 'Openstreetmap', 'an optional tech label')
@enduml
```

