# Solidity


```text
simpleicons-8/S/Solidity
```

```text
include('simpleicons-8/S/Solidity')
```



| Illustration | Solidity |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Solidity.png) | ![illustration for Solidity](../../simpleicons-8/S/Solidity.Local.png) |




## Solidity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Solidity
include('simpleicons-8/S/Solidity')

' renders the element
Solidity('Solidity', 'Solidity', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Solidity
include('simpleicons-8/S/Solidity')

' renders the element
Solidity('Solidity', 'Solidity', 'an optional tech label', 'an optional description')
@enduml
```

