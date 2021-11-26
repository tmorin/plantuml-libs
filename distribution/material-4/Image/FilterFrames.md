# FilterFrames


```text
material-4/Image/FilterFrames
```

```text
include('material-4/Image/FilterFrames')
```



| Illustration | FilterFrames |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/FilterFrames.png) | ![illustration for FilterFrames](../../material-4/Image/FilterFrames.Local.png) |




## FilterFrames

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FilterFrames
include('material-4/Image/FilterFrames')

' renders the element
FilterFrames('FilterFrames', 'Filter Frames', 'an optional tech label')
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

' loads the Item which embeds the element FilterFrames
include('material-4/Image/FilterFrames')

' renders the element
FilterFrames('FilterFrames', 'Filter Frames', 'an optional tech label')
@enduml
```

