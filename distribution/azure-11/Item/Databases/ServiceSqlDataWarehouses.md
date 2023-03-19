# ServiceSqlDataWarehouses


```text
azure-11/Item/Databases/ServiceSqlDataWarehouses
```

```text
include('azure-11/Item/Databases/ServiceSqlDataWarehouses')
```



| Illustration | ServiceSqlDataWarehouses | ServiceSqlDataWarehousesCard | ServiceSqlDataWarehousesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-11/Item/Databases/ServiceSqlDataWarehouses.png) | ![illustration for ServiceSqlDataWarehouses](../../../azure-11/Item/Databases/ServiceSqlDataWarehouses.Local.png) | ![illustration for ServiceSqlDataWarehousesCard](../../../azure-11/Item/Databases/ServiceSqlDataWarehousesCard.Local.png) | ![illustration for ServiceSqlDataWarehousesGroup](../../../azure-11/Item/Databases/ServiceSqlDataWarehousesGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceSqlDataWarehousesXs>`
- `<$ServiceSqlDataWarehousesSm>`
- `<$ServiceSqlDataWarehousesMd>`
- `<$ServiceSqlDataWarehousesLg>`





## ServiceSqlDataWarehouses

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceSqlDataWarehouses
include('azure-11/Item/Databases/ServiceSqlDataWarehouses')

' renders the element
ServiceSqlDataWarehouses('ServiceSqlDataWarehouses', 'Service Sql Data Warehouses', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceSqlDataWarehouses
include('azure-11/Item/Databases/ServiceSqlDataWarehouses')

' renders the element
ServiceSqlDataWarehouses('ServiceSqlDataWarehouses', 'Service Sql Data Warehouses', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceSqlDataWarehousesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceSqlDataWarehousesCard
include('azure-11/Item/Databases/ServiceSqlDataWarehouses')

' renders the element
ServiceSqlDataWarehousesCard('ServiceSqlDataWarehousesCard', 'Service Sql Data Warehouses Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceSqlDataWarehousesCard
include('azure-11/Item/Databases/ServiceSqlDataWarehouses')

' renders the element
ServiceSqlDataWarehousesCard('ServiceSqlDataWarehousesCard', 'Service Sql Data Warehouses Card', 'an optional description')
@enduml
```

## ServiceSqlDataWarehousesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceSqlDataWarehousesGroup
include('azure-11/Item/Databases/ServiceSqlDataWarehouses')

' renders the element
ServiceSqlDataWarehousesGroup('ServiceSqlDataWarehousesGroup', 'Service Sql Data Warehouses Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceSqlDataWarehousesGroup
include('azure-11/Item/Databases/ServiceSqlDataWarehouses')

' renders the element
ServiceSqlDataWarehousesGroup('ServiceSqlDataWarehousesGroup', 'Service Sql Data Warehouses Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

