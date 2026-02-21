# FilterTiltShift


```text
material/Image/FilterTiltShift
```

```text
include('material/Image/FilterTiltShift')
```



| Illustration | FilterTiltShift |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/FilterTiltShift.png) | ![illustration for FilterTiltShift](../../material/Image/FilterTiltShift.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FilterTiltShiftXs>`
- `<$FilterTiltShiftSm>`
- `<$FilterTiltShiftMd>`
- `<$FilterTiltShiftLg>`





## FilterTiltShift

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FilterTiltShift
include('material/Image/FilterTiltShift')

' renders the element
FilterTiltShift('FilterTiltShift', 'Filter Tilt Shift', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FilterTiltShift
include('material/Image/FilterTiltShift')

' renders the element
FilterTiltShift('FilterTiltShift', 'Filter Tilt Shift', 'an optional tech label', 'an optional description')
@enduml
```

