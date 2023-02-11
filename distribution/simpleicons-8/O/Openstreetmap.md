# Openstreetmap


```text
simpleicons-8/O/Openstreetmap
```

```text
include('simpleicons-8/O/Openstreetmap')
```



| Illustration | Openstreetmap |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/O/Openstreetmap.png) | ![illustration for Openstreetmap](../../simpleicons-8/O/Openstreetmap.Local.png) |




## Openstreetmap

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Openstreetmap
include('simpleicons-8/O/Openstreetmap')

' renders the element
Openstreetmap('Openstreetmap', 'Openstreetmap', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Openstreetmap
include('simpleicons-8/O/Openstreetmap')

' renders the element
Openstreetmap('Openstreetmap', 'Openstreetmap', 'an optional tech label', 'an optional description')
@enduml
```

