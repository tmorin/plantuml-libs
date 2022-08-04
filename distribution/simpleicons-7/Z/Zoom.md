# Zoom


```text
simpleicons-7/Z/Zoom
```

```text
include('simpleicons-7/Z/Zoom')
```



| Illustration | Zoom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/Z/Zoom.png) | ![illustration for Zoom](../../simpleicons-7/Z/Zoom.Local.png) |




## Zoom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Zoom
include('simpleicons-7/Z/Zoom')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Zoom
include('simpleicons-7/Z/Zoom')

' renders the element
Zoom('Zoom', 'Zoom', 'an optional tech label', 'an optional description')
@enduml
```

