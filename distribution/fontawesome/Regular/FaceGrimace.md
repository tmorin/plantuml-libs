# FaceGrimace


```text
fontawesome/Regular/FaceGrimace
```

```text
include('fontawesome/Regular/FaceGrimace')
```



| Illustration | FaceGrimace |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/FaceGrimace.png) | ![illustration for FaceGrimace](../../fontawesome/Regular/FaceGrimace.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaceGrimaceXs>`
- `<$FaceGrimaceSm>`
- `<$FaceGrimaceMd>`
- `<$FaceGrimaceLg>`





## FaceGrimace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FaceGrimace
include('fontawesome/Regular/FaceGrimace')

' renders the element
FaceGrimace('FaceGrimace', 'Face Grimace', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceGrimace
include('fontawesome/Regular/FaceGrimace')

' renders the element
FaceGrimace('FaceGrimace', 'Face Grimace', 'an optional tech label', 'an optional description')
@enduml
```

