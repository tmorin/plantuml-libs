# Walletconnect


```text
simpleicons/W/Walletconnect
```

```text
include('simpleicons/W/Walletconnect')
```



| Illustration | Walletconnect |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Walletconnect.png) | ![illustration for Walletconnect](../../simpleicons/W/Walletconnect.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WalletconnectXs>`
- `<$WalletconnectSm>`
- `<$WalletconnectMd>`
- `<$WalletconnectLg>`





## Walletconnect

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Walletconnect
include('simpleicons/W/Walletconnect')

' renders the element
Walletconnect('Walletconnect', 'Walletconnect', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Walletconnect
include('simpleicons/W/Walletconnect')

' renders the element
Walletconnect('Walletconnect', 'Walletconnect', 'an optional tech label', 'an optional description')
@enduml
```

