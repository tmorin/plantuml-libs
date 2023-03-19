# ExposureNeg1


```text
material-4/Image/ExposureNeg1
```

```text
include('material-4/Image/ExposureNeg1')
```



| Illustration | ExposureNeg1 |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/ExposureNeg1.png) | ![illustration for ExposureNeg1](../../material-4/Image/ExposureNeg1.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ExposureNeg1Xs>`
- `<$ExposureNeg1Sm>`
- `<$ExposureNeg1Md>`
- `<$ExposureNeg1Lg>`





## ExposureNeg1

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ExposureNeg1
include('material-4/Image/ExposureNeg1')

' renders the element
ExposureNeg1('ExposureNeg1', 'Exposure Neg1', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ExposureNeg1
include('material-4/Image/ExposureNeg1')

' renders the element
ExposureNeg1('ExposureNeg1', 'Exposure Neg1', 'an optional tech label', 'an optional description')
@enduml
```

