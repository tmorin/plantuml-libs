# Steelseries


```text
simpleicons-7/S/Steelseries
```

```text
include('simpleicons-7/S/Steelseries')
```



| Illustration | Steelseries |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Steelseries.png) | ![illustration for Steelseries](../../simpleicons-7/S/Steelseries.Local.png) |




## Steelseries

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Steelseries
include('simpleicons-7/S/Steelseries')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Steelseries
include('simpleicons-7/S/Steelseries')

' renders the element
Steelseries('Steelseries', 'Steelseries', 'an optional tech label')
@enduml
```

