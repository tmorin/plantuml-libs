# ThumbDownOffAlt


```text
material-4/Action/ThumbDownOffAlt
```

```text
include('material-4/Action/ThumbDownOffAlt')
```



| Illustration | ThumbDownOffAlt |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/ThumbDownOffAlt.png) | ![illustration for ThumbDownOffAlt](../../material-4/Action/ThumbDownOffAlt.Local.png) |




## ThumbDownOffAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ThumbDownOffAlt
include('material-4/Action/ThumbDownOffAlt')

' renders the element
ThumbDownOffAlt('ThumbDownOffAlt', 'Thumb Down Off Alt', 'an optional tech label')
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

' loads the Item which embeds the element ThumbDownOffAlt
include('material-4/Action/ThumbDownOffAlt')

' renders the element
ThumbDownOffAlt('ThumbDownOffAlt', 'Thumb Down Off Alt', 'an optional tech label')
@enduml
```

