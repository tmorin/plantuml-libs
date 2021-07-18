# Binance


```text
simpleicons-5/B/Binance
```

```text
include('simpleicons-5/B/Binance')
```



| Illustration | Binance |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Binance.png) | ![illustration for Binance](../../simpleicons-5/B/Binance.Local.png) |




## Binance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Binance
include('simpleicons-5/B/Binance')

' renders the element
Binance('Binance', 'Binance', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Binance
include('simpleicons-5/B/Binance')

' renders the element
Binance('Binance', 'Binance', 'an optional tech label')
@enduml
```

