# ZoomIn


```text
material/Action/ZoomIn
```

```text
include('material/Action/ZoomIn')
```



| Illustration | ZoomIn |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/ZoomIn.png) | ![illustration for ZoomIn](../../material/Action/ZoomIn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZoomInXs>`
- `<$ZoomInSm>`
- `<$ZoomInMd>`
- `<$ZoomInLg>`





## ZoomIn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ZoomIn
include('material/Action/ZoomIn')

' renders the element
ZoomIn('ZoomIn', 'Zoom In', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ZoomIn
include('material/Action/ZoomIn')

' renders the element
ZoomIn('ZoomIn', 'Zoom In', 'an optional tech label', 'an optional description')
@enduml
```

