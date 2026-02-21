# FaceGrinTears


```text
fontawesome/Regular/FaceGrinTears
```

```text
include('fontawesome/Regular/FaceGrinTears')
```



| Illustration | FaceGrinTears |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/FaceGrinTears.png) | ![illustration for FaceGrinTears](../../fontawesome/Regular/FaceGrinTears.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaceGrinTearsXs>`
- `<$FaceGrinTearsSm>`
- `<$FaceGrinTearsMd>`
- `<$FaceGrinTearsLg>`





## FaceGrinTears

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FaceGrinTears
include('fontawesome/Regular/FaceGrinTears')

' renders the element
FaceGrinTears('FaceGrinTears', 'Face Grin Tears', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceGrinTears
include('fontawesome/Regular/FaceGrinTears')

' renders the element
FaceGrinTears('FaceGrinTears', 'Face Grin Tears', 'an optional tech label', 'an optional description')
@enduml
```

