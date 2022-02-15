# Stackbit


```text
simpleicons-6/S/Stackbit
```

```text
include('simpleicons-6/S/Stackbit')
```



| Illustration | Stackbit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Stackbit.png) | ![illustration for Stackbit](../../simpleicons-6/S/Stackbit.Local.png) |




## Stackbit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Stackbit
include('simpleicons-6/S/Stackbit')

' renders the element
Stackbit('Stackbit', 'Stackbit', 'an optional tech label')
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

' loads the Item which embeds the element Stackbit
include('simpleicons-6/S/Stackbit')

' renders the element
Stackbit('Stackbit', 'Stackbit', 'an optional tech label')
@enduml
```

