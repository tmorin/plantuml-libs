# Lufthansa


```text
simpleicons-5/L/Lufthansa
```

```text
include('simpleicons-5/L/Lufthansa')
```



| Illustration | Lufthansa |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/L/Lufthansa.png) | ![illustration for Lufthansa](../../simpleicons-5/L/Lufthansa.Local.png) |




## Lufthansa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Lufthansa
include('simpleicons-5/L/Lufthansa')

' renders the element
Lufthansa('Lufthansa', 'Lufthansa', 'an optional tech label')
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

' loads the Item which embeds the element Lufthansa
include('simpleicons-5/L/Lufthansa')

' renders the element
Lufthansa('Lufthansa', 'Lufthansa', 'an optional tech label')
@enduml
```

