# Amazonlumberyard


```text
simpleicons-6/A/Amazonlumberyard
```

```text
include('simpleicons-6/A/Amazonlumberyard')
```



| Illustration | Amazonlumberyard |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Amazonlumberyard.png) | ![illustration for Amazonlumberyard](../../simpleicons-6/A/Amazonlumberyard.Local.png) |




## Amazonlumberyard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Amazonlumberyard
include('simpleicons-6/A/Amazonlumberyard')

' renders the element
Amazonlumberyard('Amazonlumberyard', 'Amazonlumberyard', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Amazonlumberyard
include('simpleicons-6/A/Amazonlumberyard')

' renders the element
Amazonlumberyard('Amazonlumberyard', 'Amazonlumberyard', 'an optional tech label')
@enduml
```

