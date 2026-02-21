# Binance


```text
simpleicons/B/Binance
```

```text
include('simpleicons/B/Binance')
```



| Illustration | Binance |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Binance.png) | ![illustration for Binance](../../simpleicons/B/Binance.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BinanceXs>`
- `<$BinanceSm>`
- `<$BinanceMd>`
- `<$BinanceLg>`





## Binance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Binance
include('simpleicons/B/Binance')

' renders the element
Binance('Binance', 'Binance', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Binance
include('simpleicons/B/Binance')

' renders the element
Binance('Binance', 'Binance', 'an optional tech label', 'an optional description')
@enduml
```

