# FaceGrin


```text
fontawesome-6/Regular/FaceGrin
```

```text
include('fontawesome-6/Regular/FaceGrin')
```



| Illustration | FaceGrin |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/FaceGrin.png) | ![illustration for FaceGrin](../../fontawesome-6/Regular/FaceGrin.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceGrin
include('fontawesome-6/Regular/FaceGrin')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceGrin
include('fontawesome-6/Regular/FaceGrin')

' renders the element
FaceGrin('FaceGrin', 'Face Grin', 'an optional tech label', 'an optional description')
@enduml
```

