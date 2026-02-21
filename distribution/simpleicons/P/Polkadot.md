# Polkadot


```text
simpleicons/P/Polkadot
```

```text
include('simpleicons/P/Polkadot')
```



| Illustration | Polkadot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Polkadot.png) | ![illustration for Polkadot](../../simpleicons/P/Polkadot.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PolkadotXs>`
- `<$PolkadotSm>`
- `<$PolkadotMd>`
- `<$PolkadotLg>`





## Polkadot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Polkadot
include('simpleicons/P/Polkadot')

' renders the element
Polkadot('Polkadot', 'Polkadot', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Polkadot
include('simpleicons/P/Polkadot')

' renders the element
Polkadot('Polkadot', 'Polkadot', 'an optional tech label', 'an optional description')
@enduml
```

