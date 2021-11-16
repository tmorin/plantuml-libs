# Steelseries


```text
simpleicons-5/S/Steelseries
```

```text
include('simpleicons-5/S/Steelseries')
```



| Illustration | Steelseries |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Steelseries.png) | ![illustration for Steelseries](../../simpleicons-5/S/Steelseries.Local.png) |




## Steelseries

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Steelseries
include('simpleicons-5/S/Steelseries')

' renders the element
Steelseries('Steelseries', 'Steelseries', 'an optional tech label')
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

' loads the Item which embeds the element Steelseries
include('simpleicons-5/S/Steelseries')

' renders the element
Steelseries('Steelseries', 'Steelseries', 'an optional tech label')
@enduml
```

