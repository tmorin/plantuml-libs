# CompassCalibration


```text
material/Maps/CompassCalibration
```

```text
include('material/Maps/CompassCalibration')
```



| Illustration | CompassCalibration |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/CompassCalibration.png) | ![illustration for CompassCalibration](../../material/Maps/CompassCalibration.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CompassCalibrationXs>`
- `<$CompassCalibrationSm>`
- `<$CompassCalibrationMd>`
- `<$CompassCalibrationLg>`





## CompassCalibration

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element CompassCalibration
include('material/Maps/CompassCalibration')

' renders the element
CompassCalibration('CompassCalibration', 'Compass Calibration', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CompassCalibration
include('material/Maps/CompassCalibration')

' renders the element
CompassCalibration('CompassCalibration', 'Compass Calibration', 'an optional tech label', 'an optional description')
@enduml
```

