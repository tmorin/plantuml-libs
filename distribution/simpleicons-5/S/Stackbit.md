# Stackbit


```text
simpleicons-5/S/Stackbit
```

```text
include('simpleicons-5/S/Stackbit')
```



| Illustration | Stackbit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Stackbit.png) | ![illustration for Stackbit](../../simpleicons-5/S/Stackbit.Local.png) |




## Stackbit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Stackbit
include('simpleicons-5/S/Stackbit')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Stackbit
include('simpleicons-5/S/Stackbit')

' renders the element
Stackbit('Stackbit', 'Stackbit', 'an optional tech label')
@enduml
```

