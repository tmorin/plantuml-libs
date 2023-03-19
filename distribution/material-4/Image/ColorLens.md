# ColorLens


```text
material-4/Image/ColorLens
```

```text
include('material-4/Image/ColorLens')
```



| Illustration | ColorLens |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/ColorLens.png) | ![illustration for ColorLens](../../material-4/Image/ColorLens.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ColorLensXs>`
- `<$ColorLensSm>`
- `<$ColorLensMd>`
- `<$ColorLensLg>`





## ColorLens

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ColorLens
include('material-4/Image/ColorLens')

' renders the element
ColorLens('ColorLens', 'Color Lens', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ColorLens
include('material-4/Image/ColorLens')

' renders the element
ColorLens('ColorLens', 'Color Lens', 'an optional tech label', 'an optional description')
@enduml
```

