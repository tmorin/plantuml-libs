# Sap


```text
simpleicons-5/S/Sap
```

```text
include('simpleicons-5/S/Sap')
```



| Illustration | Sap |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Sap.png) | ![illustration for Sap](../../simpleicons-5/S/Sap.Local.png) |




## Sap

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Sap
include('simpleicons-5/S/Sap')

' renders the element
Sap('Sap', 'Sap', 'an optional tech label')
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

' loads the Item which embeds the element Sap
include('simpleicons-5/S/Sap')

' renders the element
Sap('Sap', 'Sap', 'an optional tech label')
@enduml
```

