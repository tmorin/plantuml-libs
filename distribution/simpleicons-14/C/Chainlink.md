# Chainlink


```text
simpleicons-14/C/Chainlink
```

```text
include('simpleicons-14/C/Chainlink')
```



| Illustration | Chainlink |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Chainlink.png) | ![illustration for Chainlink](../../simpleicons-14/C/Chainlink.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChainlinkXs>`
- `<$ChainlinkSm>`
- `<$ChainlinkMd>`
- `<$ChainlinkLg>`





## Chainlink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Chainlink
include('simpleicons-14/C/Chainlink')

' renders the element
Chainlink('Chainlink', 'Chainlink', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Chainlink
include('simpleicons-14/C/Chainlink')

' renders the element
Chainlink('Chainlink', 'Chainlink', 'an optional tech label', 'an optional description')
@enduml
```

