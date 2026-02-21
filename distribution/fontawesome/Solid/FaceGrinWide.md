# FaceGrinWide


```text
fontawesome/Solid/FaceGrinWide
```

```text
include('fontawesome/Solid/FaceGrinWide')
```



| Illustration | FaceGrinWide |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FaceGrinWide.png) | ![illustration for FaceGrinWide](../../fontawesome/Solid/FaceGrinWide.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaceGrinWideXs>`
- `<$FaceGrinWideSm>`
- `<$FaceGrinWideMd>`
- `<$FaceGrinWideLg>`





## FaceGrinWide

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FaceGrinWide
include('fontawesome/Solid/FaceGrinWide')

' renders the element
FaceGrinWide('FaceGrinWide', 'Face Grin Wide', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceGrinWide
include('fontawesome/Solid/FaceGrinWide')

' renders the element
FaceGrinWide('FaceGrinWide', 'Face Grin Wide', 'an optional tech label', 'an optional description')
@enduml
```

