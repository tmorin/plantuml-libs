# CakeCandles


```text
fontawesome-6/Solid/CakeCandles
```

```text
include('fontawesome-6/Solid/CakeCandles')
```



| Illustration | CakeCandles |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CakeCandles.png) | ![illustration for CakeCandles](../../fontawesome-6/Solid/CakeCandles.Local.png) |




## CakeCandles

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CakeCandles
include('fontawesome-6/Solid/CakeCandles')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CakeCandles
include('fontawesome-6/Solid/CakeCandles')

' renders the element
CakeCandles('CakeCandles', 'Cake Candles', 'an optional tech label', 'an optional description')
@enduml
```

