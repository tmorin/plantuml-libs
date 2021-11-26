# Fitbit


```text
simpleicons-5/F/Fitbit
```

```text
include('simpleicons-5/F/Fitbit')
```



| Illustration | Fitbit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Fitbit.png) | ![illustration for Fitbit](../../simpleicons-5/F/Fitbit.Local.png) |




## Fitbit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Fitbit
include('simpleicons-5/F/Fitbit')

' renders the element
Fitbit('Fitbit', 'Fitbit', 'an optional tech label')
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

' loads the Item which embeds the element Fitbit
include('simpleicons-5/F/Fitbit')

' renders the element
Fitbit('Fitbit', 'Fitbit', 'an optional tech label')
@enduml
```

