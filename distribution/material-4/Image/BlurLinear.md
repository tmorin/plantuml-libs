# BlurLinear


```text
material-4/Image/BlurLinear
```

```text
include('material-4/Image/BlurLinear')
```



| Illustration | BlurLinear |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/BlurLinear.png) | ![illustration for BlurLinear](../../material-4/Image/BlurLinear.Local.png) |




## BlurLinear

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BlurLinear
include('material-4/Image/BlurLinear')

' renders the element
BlurLinear('BlurLinear', 'Blur Linear', 'an optional tech label')
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

' loads the Item which embeds the element BlurLinear
include('material-4/Image/BlurLinear')

' renders the element
BlurLinear('BlurLinear', 'Blur Linear', 'an optional tech label')
@enduml
```

