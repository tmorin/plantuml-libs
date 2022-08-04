# Spreadshirt


```text
simpleicons-7/S/Spreadshirt
```

```text
include('simpleicons-7/S/Spreadshirt')
```



| Illustration | Spreadshirt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Spreadshirt.png) | ![illustration for Spreadshirt](../../simpleicons-7/S/Spreadshirt.Local.png) |




## Spreadshirt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Spreadshirt
include('simpleicons-7/S/Spreadshirt')

' renders the element
Spreadshirt('Spreadshirt', 'Spreadshirt', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Spreadshirt
include('simpleicons-7/S/Spreadshirt')

' renders the element
Spreadshirt('Spreadshirt', 'Spreadshirt', 'an optional tech label', 'an optional description')
@enduml
```

