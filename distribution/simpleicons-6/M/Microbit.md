# Microbit


```text
simpleicons-6/M/Microbit
```

```text
include('simpleicons-6/M/Microbit')
```



| Illustration | Microbit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Microbit.png) | ![illustration for Microbit](../../simpleicons-6/M/Microbit.Local.png) |




## Microbit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Microbit
include('simpleicons-6/M/Microbit')

' renders the element
Microbit('Microbit', 'Microbit', 'an optional tech label')
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

' loads the Item which embeds the element Microbit
include('simpleicons-6/M/Microbit')

' renders the element
Microbit('Microbit', 'Microbit', 'an optional tech label')
@enduml
```

