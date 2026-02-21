# FaceSmile


```text
fontawesome/Solid/FaceSmile
```

```text
include('fontawesome/Solid/FaceSmile')
```



| Illustration | FaceSmile |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FaceSmile.png) | ![illustration for FaceSmile](../../fontawesome/Solid/FaceSmile.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaceSmileXs>`
- `<$FaceSmileSm>`
- `<$FaceSmileMd>`
- `<$FaceSmileLg>`





## FaceSmile

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FaceSmile
include('fontawesome/Solid/FaceSmile')

' renders the element
FaceSmile('FaceSmile', 'Face Smile', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceSmile
include('fontawesome/Solid/FaceSmile')

' renders the element
FaceSmile('FaceSmile', 'Face Smile', 'an optional tech label', 'an optional description')
@enduml
```

