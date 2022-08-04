# ThumbsUpDown


```text
material-4/Action/ThumbsUpDown
```

```text
include('material-4/Action/ThumbsUpDown')
```



| Illustration | ThumbsUpDown |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/ThumbsUpDown.png) | ![illustration for ThumbsUpDown](../../material-4/Action/ThumbsUpDown.Local.png) |




## ThumbsUpDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ThumbsUpDown
include('material-4/Action/ThumbsUpDown')

' renders the element
ThumbsUpDown('ThumbsUpDown', 'Thumbs Up Down', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ThumbsUpDown
include('material-4/Action/ThumbsUpDown')

' renders the element
ThumbsUpDown('ThumbsUpDown', 'Thumbs Up Down', 'an optional tech label', 'an optional description')
@enduml
```

