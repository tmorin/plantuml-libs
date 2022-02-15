# Sap


```text
simpleicons-6/S/Sap
```

```text
include('simpleicons-6/S/Sap')
```



| Illustration | Sap |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Sap.png) | ![illustration for Sap](../../simpleicons-6/S/Sap.Local.png) |




## Sap

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Sap
include('simpleicons-6/S/Sap')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Sap
include('simpleicons-6/S/Sap')

' renders the element
Sap('Sap', 'Sap', 'an optional tech label')
@enduml
```

