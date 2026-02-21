# Organicmaps


```text
simpleicons-14/O/Organicmaps
```

```text
include('simpleicons-14/O/Organicmaps')
```



| Illustration | Organicmaps |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Organicmaps.png) | ![illustration for Organicmaps](../../simpleicons-14/O/Organicmaps.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OrganicmapsXs>`
- `<$OrganicmapsSm>`
- `<$OrganicmapsMd>`
- `<$OrganicmapsLg>`





## Organicmaps

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Organicmaps
include('simpleicons-14/O/Organicmaps')

' renders the element
Organicmaps('Organicmaps', 'Organicmaps', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Organicmaps
include('simpleicons-14/O/Organicmaps')

' renders the element
Organicmaps('Organicmaps', 'Organicmaps', 'an optional tech label', 'an optional description')
@enduml
```

