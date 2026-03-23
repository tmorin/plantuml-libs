# Openstreetmap


```text
fontawesome/Brands/Openstreetmap
```

```text
include('fontawesome/Brands/Openstreetmap')
```



| Illustration | Openstreetmap |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Openstreetmap.png) | ![illustration for Openstreetmap](../../fontawesome/Brands/Openstreetmap.Local.png) |



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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Openstreetmap
include('fontawesome/Brands/Openstreetmap')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Openstreetmap
include('fontawesome/Brands/Openstreetmap')

' renders the element
Openstreetmap('Openstreetmap', 'Openstreetmap', 'an optional tech label', 'an optional description')
@enduml
```

