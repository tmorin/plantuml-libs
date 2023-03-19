# Coinbase


```text
simpleicons-8/C/Coinbase
```

```text
include('simpleicons-8/C/Coinbase')
```



| Illustration | Coinbase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Coinbase.png) | ![illustration for Coinbase](../../simpleicons-8/C/Coinbase.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CoinbaseXs>`
- `<$CoinbaseSm>`
- `<$CoinbaseMd>`
- `<$CoinbaseLg>`





## Coinbase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Coinbase
include('simpleicons-8/C/Coinbase')

' renders the element
Coinbase('Coinbase', 'Coinbase', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Coinbase
include('simpleicons-8/C/Coinbase')

' renders the element
Coinbase('Coinbase', 'Coinbase', 'an optional tech label', 'an optional description')
@enduml
```

