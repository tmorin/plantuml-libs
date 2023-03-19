# FaceGrinSquintTears


```text
fontawesome-6/Regular/FaceGrinSquintTears
```

```text
include('fontawesome-6/Regular/FaceGrinSquintTears')
```



| Illustration | FaceGrinSquintTears |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/FaceGrinSquintTears.png) | ![illustration for FaceGrinSquintTears](../../fontawesome-6/Regular/FaceGrinSquintTears.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceGrinSquintTears
include('fontawesome-6/Regular/FaceGrinSquintTears')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceGrinSquintTears
include('fontawesome-6/Regular/FaceGrinSquintTears')

' renders the element
FaceGrinSquintTears('FaceGrinSquintTears', 'Face Grin Squint Tears', 'an optional tech label', 'an optional description')
@enduml
```

