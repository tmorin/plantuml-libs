# Zoom


```text
simpleicons-8/Z/Zoom
```

```text
include('simpleicons-8/Z/Zoom')
```



| Illustration | Zoom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/Z/Zoom.png) | ![illustration for Zoom](../../simpleicons-8/Z/Zoom.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZoomXs>`
- `<$ZoomSm>`
- `<$ZoomMd>`
- `<$ZoomLg>`





## Zoom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Zoom
include('simpleicons-8/Z/Zoom')

' renders the element
Zoom('Zoom', 'Zoom', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zoom
include('simpleicons-8/Z/Zoom')

' renders the element
Zoom('Zoom', 'Zoom', 'an optional tech label', 'an optional description')
@enduml
```

