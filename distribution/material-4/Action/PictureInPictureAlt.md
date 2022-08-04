# PictureInPictureAlt


```text
material-4/Action/PictureInPictureAlt
```

```text
include('material-4/Action/PictureInPictureAlt')
```



| Illustration | PictureInPictureAlt |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/PictureInPictureAlt.png) | ![illustration for PictureInPictureAlt](../../material-4/Action/PictureInPictureAlt.Local.png) |




## PictureInPictureAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PictureInPictureAlt
include('material-4/Action/PictureInPictureAlt')

' renders the element
PictureInPictureAlt('PictureInPictureAlt', 'Picture In Picture Alt', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element PictureInPictureAlt
include('material-4/Action/PictureInPictureAlt')

' renders the element
PictureInPictureAlt('PictureInPictureAlt', 'Picture In Picture Alt', 'an optional tech label', 'an optional description')
@enduml
```

