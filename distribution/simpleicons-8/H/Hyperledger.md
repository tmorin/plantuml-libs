# Hyperledger


```text
simpleicons-8/H/Hyperledger
```

```text
include('simpleicons-8/H/Hyperledger')
```



| Illustration | Hyperledger |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/H/Hyperledger.png) | ![illustration for Hyperledger](../../simpleicons-8/H/Hyperledger.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HyperledgerXs>`
- `<$HyperledgerSm>`
- `<$HyperledgerMd>`
- `<$HyperledgerLg>`





## Hyperledger

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Hyperledger
include('simpleicons-8/H/Hyperledger')

' renders the element
Hyperledger('Hyperledger', 'Hyperledger', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hyperledger
include('simpleicons-8/H/Hyperledger')

' renders the element
Hyperledger('Hyperledger', 'Hyperledger', 'an optional tech label', 'an optional description')
@enduml
```

