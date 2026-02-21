# CakeCandles


```text
fontawesome/Solid/CakeCandles
```

```text
include('fontawesome/Solid/CakeCandles')
```



| Illustration | CakeCandles |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CakeCandles.png) | ![illustration for CakeCandles](../../fontawesome/Solid/CakeCandles.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CakeCandlesXs>`
- `<$CakeCandlesSm>`
- `<$CakeCandlesMd>`
- `<$CakeCandlesLg>`





## CakeCandles

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CakeCandles
include('fontawesome/Solid/CakeCandles')

' renders the element
CakeCandles('CakeCandles', 'Cake Candles', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element CakeCandles
include('fontawesome/Solid/CakeCandles')

' renders the element
CakeCandles('CakeCandles', 'Cake Candles', 'an optional tech label', 'an optional description')
@enduml
```

