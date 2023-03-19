# ExposureNeg2


```text
material-4/Image/ExposureNeg2
```

```text
include('material-4/Image/ExposureNeg2')
```



| Illustration | ExposureNeg2 |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/ExposureNeg2.png) | ![illustration for ExposureNeg2](../../material-4/Image/ExposureNeg2.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ExposureNeg2Xs>`
- `<$ExposureNeg2Sm>`
- `<$ExposureNeg2Md>`
- `<$ExposureNeg2Lg>`





## ExposureNeg2

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ExposureNeg2
include('material-4/Image/ExposureNeg2')

' renders the element
ExposureNeg2('ExposureNeg2', 'Exposure Neg2', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ExposureNeg2
include('material-4/Image/ExposureNeg2')

' renders the element
ExposureNeg2('ExposureNeg2', 'Exposure Neg2', 'an optional tech label', 'an optional description')
@enduml
```

