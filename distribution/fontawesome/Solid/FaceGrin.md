# FaceGrin


```text
fontawesome/Solid/FaceGrin
```

```text
include('fontawesome/Solid/FaceGrin')
```



| Illustration | FaceGrin |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FaceGrin.png) | ![illustration for FaceGrin](../../fontawesome/Solid/FaceGrin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaceGrinXs>`
- `<$FaceGrinSm>`
- `<$FaceGrinMd>`
- `<$FaceGrinLg>`





## FaceGrin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FaceGrin
include('fontawesome/Solid/FaceGrin')

' renders the element
FaceGrin('FaceGrin', 'Face Grin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceGrin
include('fontawesome/Solid/FaceGrin')

' renders the element
FaceGrin('FaceGrin', 'Face Grin', 'an optional tech label', 'an optional description')
@enduml
```

