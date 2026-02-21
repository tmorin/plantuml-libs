# HiveBlockchain


```text
simpleicons/H/HiveBlockchain
```

```text
include('simpleicons/H/HiveBlockchain')
```



| Illustration | HiveBlockchain |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/HiveBlockchain.png) | ![illustration for HiveBlockchain](../../simpleicons/H/HiveBlockchain.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HiveBlockchainXs>`
- `<$HiveBlockchainSm>`
- `<$HiveBlockchainMd>`
- `<$HiveBlockchainLg>`





## HiveBlockchain

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element HiveBlockchain
include('simpleicons/H/HiveBlockchain')

' renders the element
HiveBlockchain('HiveBlockchain', 'Hive Blockchain', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HiveBlockchain
include('simpleicons/H/HiveBlockchain')

' renders the element
HiveBlockchain('HiveBlockchain', 'Hive Blockchain', 'an optional tech label', 'an optional description')
@enduml
```

