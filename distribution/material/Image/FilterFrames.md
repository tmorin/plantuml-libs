# FilterFrames


```text
material/Image/FilterFrames
```

```text
include('material/Image/FilterFrames')
```



| Illustration | FilterFrames |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/FilterFrames.png) | ![illustration for FilterFrames](../../material/Image/FilterFrames.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FilterFramesXs>`
- `<$FilterFramesSm>`
- `<$FilterFramesMd>`
- `<$FilterFramesLg>`





## FilterFrames

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FilterFrames
include('material/Image/FilterFrames')

' renders the element
FilterFrames('FilterFrames', 'Filter Frames', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element FilterFrames
include('material/Image/FilterFrames')

' renders the element
FilterFrames('FilterFrames', 'Filter Frames', 'an optional tech label', 'an optional description')
@enduml
```

