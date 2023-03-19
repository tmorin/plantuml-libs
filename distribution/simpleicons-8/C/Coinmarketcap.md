# Coinmarketcap


```text
simpleicons-8/C/Coinmarketcap
```

```text
include('simpleicons-8/C/Coinmarketcap')
```



| Illustration | Coinmarketcap |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Coinmarketcap.png) | ![illustration for Coinmarketcap](../../simpleicons-8/C/Coinmarketcap.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CoinmarketcapXs>`
- `<$CoinmarketcapSm>`
- `<$CoinmarketcapMd>`
- `<$CoinmarketcapLg>`





## Coinmarketcap

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Coinmarketcap
include('simpleicons-8/C/Coinmarketcap')

' renders the element
Coinmarketcap('Coinmarketcap', 'Coinmarketcap', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Coinmarketcap
include('simpleicons-8/C/Coinmarketcap')

' renders the element
Coinmarketcap('Coinmarketcap', 'Coinmarketcap', 'an optional tech label', 'an optional description')
@enduml
```

