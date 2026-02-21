# Exposure


```text
material/Image/Exposure
```

```text
include('material/Image/Exposure')
```



| Illustration | Exposure |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/Exposure.png) | ![illustration for Exposure](../../material/Image/Exposure.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element Exposure
include('material/Image/Exposure')

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
include('material/bootstrap')

' loads the Item which embeds the element Exposure
include('material/Image/Exposure')

' renders the element
Exposure('Exposure', 'Exposure', 'an optional tech label', 'an optional description')
@enduml
```

