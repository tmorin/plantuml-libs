# Warehouse


```text
fontawesome-5/Solid/Warehouse
```

```text
include('fontawesome-5/Solid/Warehouse')
```



| Illustration | Warehouse |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Warehouse.png) | ![illustration for Warehouse](../../fontawesome-5/Solid/Warehouse.Local.png) |




## Warehouse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Warehouse
include('fontawesome-5/Solid/Warehouse')

' renders the element
Warehouse('Warehouse', 'Warehouse', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Warehouse
include('fontawesome-5/Solid/Warehouse')

' renders the element
Warehouse('Warehouse', 'Warehouse', 'an optional tech label')
@enduml
```

