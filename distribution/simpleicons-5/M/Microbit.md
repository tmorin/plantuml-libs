# Microbit


```text
simpleicons-5/M/Microbit
```

```text
include('simpleicons-5/M/Microbit')
```



| Illustration | Microbit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Microbit.png) | ![illustration for Microbit](../../simpleicons-5/M/Microbit.Local.png) |




## Microbit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Microbit
include('simpleicons-5/M/Microbit')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Microbit
include('simpleicons-5/M/Microbit')

' renders the element
Microbit('Microbit', 'Microbit', 'an optional tech label')
@enduml
```

