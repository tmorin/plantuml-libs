# Chainlink


```text
simpleicons-7/C/Chainlink
```

```text
include('simpleicons-7/C/Chainlink')
```



| Illustration | Chainlink |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Chainlink.png) | ![illustration for Chainlink](../../simpleicons-7/C/Chainlink.Local.png) |




## Chainlink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Chainlink
include('simpleicons-7/C/Chainlink')

' renders the element
Chainlink('Chainlink', 'Chainlink', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Chainlink
include('simpleicons-7/C/Chainlink')

' renders the element
Chainlink('Chainlink', 'Chainlink', 'an optional tech label')
@enduml
```

