# Exposure


```text
material-4/Image/Exposure
```

```text
include('material-4/Image/Exposure')
```



| Illustration | Exposure |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Exposure.png) | ![illustration for Exposure](../../material-4/Image/Exposure.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ExposureXs>`
- `<$ExposureSm>`
- `<$ExposureMd>`
- `<$ExposureLg>`





## Exposure

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Exposure
include('material-4/Image/Exposure')

' renders the element
Exposure('Exposure', 'Exposure', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Exposure
include('material-4/Image/Exposure')

' renders the element
Exposure('Exposure', 'Exposure', 'an optional tech label', 'an optional description')
@enduml
```

