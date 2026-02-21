# MiscellaneousServices


```text
material/Maps/MiscellaneousServices
```

```text
include('material/Maps/MiscellaneousServices')
```



| Illustration | MiscellaneousServices |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/MiscellaneousServices.png) | ![illustration for MiscellaneousServices](../../material/Maps/MiscellaneousServices.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MiscellaneousServicesXs>`
- `<$MiscellaneousServicesSm>`
- `<$MiscellaneousServicesMd>`
- `<$MiscellaneousServicesLg>`





## MiscellaneousServices

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element MiscellaneousServices
include('material/Maps/MiscellaneousServices')

' renders the element
MiscellaneousServices('MiscellaneousServices', 'Miscellaneous Services', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element MiscellaneousServices
include('material/Maps/MiscellaneousServices')

' renders the element
MiscellaneousServices('MiscellaneousServices', 'Miscellaneous Services', 'an optional tech label', 'an optional description')
@enduml
```

