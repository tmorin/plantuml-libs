# LocalPrintshop


```text
material-4/Maps/LocalPrintshop
```

```text
include('material-4/Maps/LocalPrintshop')
```



| Illustration | LocalPrintshop |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/LocalPrintshop.png) | ![illustration for LocalPrintshop](../../material-4/Maps/LocalPrintshop.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LocalPrintshopXs>`
- `<$LocalPrintshopSm>`
- `<$LocalPrintshopMd>`
- `<$LocalPrintshopLg>`





## LocalPrintshop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LocalPrintshop
include('material-4/Maps/LocalPrintshop')

' renders the element
LocalPrintshop('LocalPrintshop', 'Local Printshop', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element LocalPrintshop
include('material-4/Maps/LocalPrintshop')

' renders the element
LocalPrintshop('LocalPrintshop', 'Local Printshop', 'an optional tech label', 'an optional description')
@enduml
```

