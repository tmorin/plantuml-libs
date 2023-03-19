# FaceGrinSquint


```text
fontawesome-6/Solid/FaceGrinSquint
```

```text
include('fontawesome-6/Solid/FaceGrinSquint')
```



| Illustration | FaceGrinSquint |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FaceGrinSquint.png) | ![illustration for FaceGrinSquint](../../fontawesome-6/Solid/FaceGrinSquint.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaceGrinSquintXs>`
- `<$FaceGrinSquintSm>`
- `<$FaceGrinSquintMd>`
- `<$FaceGrinSquintLg>`





## FaceGrinSquint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceGrinSquint
include('fontawesome-6/Solid/FaceGrinSquint')

' renders the element
FaceGrinSquint('FaceGrinSquint', 'Face Grin Squint', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceGrinSquint
include('fontawesome-6/Solid/FaceGrinSquint')

' renders the element
FaceGrinSquint('FaceGrinSquint', 'Face Grin Squint', 'an optional tech label', 'an optional description')
@enduml
```

