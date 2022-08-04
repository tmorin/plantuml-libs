# Warehouse


```text
fontawesome-6/Solid/Warehouse
```

```text
include('fontawesome-6/Solid/Warehouse')
```



| Illustration | Warehouse |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Warehouse.png) | ![illustration for Warehouse](../../fontawesome-6/Solid/Warehouse.Local.png) |




## Warehouse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Warehouse
include('fontawesome-6/Solid/Warehouse')

' renders the element
Warehouse('Warehouse', 'Warehouse', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Warehouse
include('fontawesome-6/Solid/Warehouse')

' renders the element
Warehouse('Warehouse', 'Warehouse', 'an optional tech label', 'an optional description')
@enduml
```

