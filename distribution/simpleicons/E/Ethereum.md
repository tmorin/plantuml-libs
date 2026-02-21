# Ethereum


```text
simpleicons/E/Ethereum
```

```text
include('simpleicons/E/Ethereum')
```



| Illustration | Ethereum |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/E/Ethereum.png) | ![illustration for Ethereum](../../simpleicons/E/Ethereum.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EthereumXs>`
- `<$EthereumSm>`
- `<$EthereumMd>`
- `<$EthereumLg>`





## Ethereum

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ethereum
include('simpleicons/E/Ethereum')

' renders the element
Ethereum('Ethereum', 'Ethereum', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ethereum
include('simpleicons/E/Ethereum')

' renders the element
Ethereum('Ethereum', 'Ethereum', 'an optional tech label', 'an optional description')
@enduml
```

