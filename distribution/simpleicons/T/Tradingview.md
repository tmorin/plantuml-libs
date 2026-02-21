# Tradingview


```text
simpleicons/T/Tradingview
```

```text
include('simpleicons/T/Tradingview')
```



| Illustration | Tradingview |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Tradingview.png) | ![illustration for Tradingview](../../simpleicons/T/Tradingview.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TradingviewXs>`
- `<$TradingviewSm>`
- `<$TradingviewMd>`
- `<$TradingviewLg>`





## Tradingview

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Tradingview
include('simpleicons/T/Tradingview')

' renders the element
Tradingview('Tradingview', 'Tradingview', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tradingview
include('simpleicons/T/Tradingview')

' renders the element
Tradingview('Tradingview', 'Tradingview', 'an optional tech label', 'an optional description')
@enduml
```

