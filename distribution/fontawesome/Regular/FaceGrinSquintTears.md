# FaceGrinSquintTears


```text
fontawesome/Regular/FaceGrinSquintTears
```

```text
include('fontawesome/Regular/FaceGrinSquintTears')
```



| Illustration | FaceGrinSquintTears |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/FaceGrinSquintTears.png) | ![illustration for FaceGrinSquintTears](../../fontawesome/Regular/FaceGrinSquintTears.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaceGrinSquintTearsXs>`
- `<$FaceGrinSquintTearsSm>`
- `<$FaceGrinSquintTearsMd>`
- `<$FaceGrinSquintTearsLg>`





## FaceGrinSquintTears

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FaceGrinSquintTears
include('fontawesome/Regular/FaceGrinSquintTears')

' renders the element
FaceGrinSquintTears('FaceGrinSquintTears', 'Face Grin Squint Tears', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceGrinSquintTears
include('fontawesome/Regular/FaceGrinSquintTears')

' renders the element
FaceGrinSquintTears('FaceGrinSquintTears', 'Face Grin Squint Tears', 'an optional tech label', 'an optional description')
@enduml
```

