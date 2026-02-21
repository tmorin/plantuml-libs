# Openstreetmap


```text
simpleicons/O/Openstreetmap
```

```text
include('simpleicons/O/Openstreetmap')
```



| Illustration | Openstreetmap |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Openstreetmap.png) | ![illustration for Openstreetmap](../../simpleicons/O/Openstreetmap.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpenstreetmapXs>`
- `<$OpenstreetmapSm>`
- `<$OpenstreetmapMd>`
- `<$OpenstreetmapLg>`





## Openstreetmap

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Openstreetmap
include('simpleicons/O/Openstreetmap')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Openstreetmap
include('simpleicons/O/Openstreetmap')

' renders the element
Openstreetmap('Openstreetmap', 'Openstreetmap', 'an optional tech label', 'an optional description')
@enduml
```

