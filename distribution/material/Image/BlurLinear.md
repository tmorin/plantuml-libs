# BlurLinear


```text
material/Image/BlurLinear
```

```text
include('material/Image/BlurLinear')
```



| Illustration | BlurLinear |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/BlurLinear.png) | ![illustration for BlurLinear](../../material/Image/BlurLinear.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BlurLinearXs>`
- `<$BlurLinearSm>`
- `<$BlurLinearMd>`
- `<$BlurLinearLg>`





## BlurLinear

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element BlurLinear
include('material/Image/BlurLinear')

' renders the element
BlurLinear('BlurLinear', 'Blur Linear', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BlurLinear
include('material/Image/BlurLinear')

' renders the element
BlurLinear('BlurLinear', 'Blur Linear', 'an optional tech label', 'an optional description')
@enduml
```

