# StarRate


```text
material/Action/StarRate
```

```text
include('material/Action/StarRate')
```



| Illustration | StarRate |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/StarRate.png) | ![illustration for StarRate](../../material/Action/StarRate.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StarRateXs>`
- `<$StarRateSm>`
- `<$StarRateMd>`
- `<$StarRateLg>`





## StarRate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element StarRate
include('material/Action/StarRate')

' renders the element
StarRate('StarRate', 'Star Rate', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element StarRate
include('material/Action/StarRate')

' renders the element
StarRate('StarRate', 'Star Rate', 'an optional tech label', 'an optional description')
@enduml
```

