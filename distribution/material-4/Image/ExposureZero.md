# ExposureZero


```text
material-4/Image/ExposureZero
```

```text
include('material-4/Image/ExposureZero')
```



| Illustration | ExposureZero |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/ExposureZero.png) | ![illustration for ExposureZero](../../material-4/Image/ExposureZero.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ExposureZeroXs>`
- `<$ExposureZeroSm>`
- `<$ExposureZeroMd>`
- `<$ExposureZeroLg>`





## ExposureZero

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ExposureZero
include('material-4/Image/ExposureZero')

' renders the element
ExposureZero('ExposureZero', 'Exposure Zero', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ExposureZero
include('material-4/Image/ExposureZero')

' renders the element
ExposureZero('ExposureZero', 'Exposure Zero', 'an optional tech label', 'an optional description')
@enduml
```

