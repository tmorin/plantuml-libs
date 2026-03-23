# DataTable


```text
aws/Resource/GeneralIcons/DataTable
```

```text
include('aws/Resource/GeneralIcons/DataTable')
```



| Illustration | DataTable | DataTableCard | DataTableGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Resource/GeneralIcons/DataTable.png) | ![illustration for DataTable](../../../aws/Resource/GeneralIcons/DataTable.Local.png) | ![illustration for DataTableCard](../../../aws/Resource/GeneralIcons/DataTableCard.Local.png) | ![illustration for DataTableGroup](../../../aws/Resource/GeneralIcons/DataTableGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DataTableXs>`
- `<$DataTableSm>`
- `<$DataTableMd>`
- `<$DataTableLg>`





## DataTable

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element DataTable
include('aws/Resource/GeneralIcons/DataTable')

' renders the element
DataTable('DataTable', 'Data Table', 'an optional tech label', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element DataTable
include('aws/Resource/GeneralIcons/DataTable')

' renders the element
DataTable('DataTable', 'Data Table', 'an optional tech label', 'an optional description')
@enduml
```

## DataTableCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element DataTableCard
include('aws/Resource/GeneralIcons/DataTable')

' renders the element
DataTableCard('DataTableCard', 'Data Table Card', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element DataTableCard
include('aws/Resource/GeneralIcons/DataTable')

' renders the element
DataTableCard('DataTableCard', 'Data Table Card', 'an optional description')
@enduml
```

## DataTableGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element DataTableGroup
include('aws/Resource/GeneralIcons/DataTable')

' renders the element
DataTableGroup('DataTableGroup', 'Data Table Group', 'an optional tech label') {
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
include('aws/bootstrap')

' loads the Item which embeds the element DataTableGroup
include('aws/Resource/GeneralIcons/DataTable')

' renders the element
DataTableGroup('DataTableGroup', 'Data Table Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

