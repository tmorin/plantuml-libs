# Tradingview


```text
simpleicons-14/T/Tradingview
```

```text
include('simpleicons-14/T/Tradingview')
```



| Illustration | Tradingview |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Tradingview.png) | ![illustration for Tradingview](../../simpleicons-14/T/Tradingview.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Tradingview
include('simpleicons-14/T/Tradingview')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Tradingview
include('simpleicons-14/T/Tradingview')

' renders the element
Tradingview('Tradingview', 'Tradingview', 'an optional tech label', 'an optional description')
@enduml
```

