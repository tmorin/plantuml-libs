# Solidity


```text
simpleicons-5/S/Solidity
```

```text
include('simpleicons-5/S/Solidity')
```



| Illustration | Solidity |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Solidity.png) | ![illustration for Solidity](../../simpleicons-5/S/Solidity.Local.png) |




## Solidity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Solidity
include('simpleicons-5/S/Solidity')

' renders the element
Solidity('Solidity', 'Solidity', 'an optional tech label')
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

' loads the Item which embeds the element Solidity
include('simpleicons-5/S/Solidity')

' renders the element
Solidity('Solidity', 'Solidity', 'an optional tech label')
@enduml
```

