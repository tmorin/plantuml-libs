# Table


```text
fontawesome-6/Solid/Table
```

```text
include('fontawesome-6/Solid/Table')
```



| Illustration | Table |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Table.png) | ![illustration for Table](../../fontawesome-6/Solid/Table.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TableXs>`
- `<$TableSm>`
- `<$TableMd>`
- `<$TableLg>`





## Table

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Table
include('fontawesome-6/Solid/Table')

' renders the element
Table('Table', 'Table', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Table
include('fontawesome-6/Solid/Table')

' renders the element
Table('Table', 'Table', 'an optional tech label', 'an optional description')
@enduml
```

