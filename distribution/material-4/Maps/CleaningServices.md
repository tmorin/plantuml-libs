# CleaningServices


```text
material-4/Maps/CleaningServices
```

```text
include('material-4/Maps/CleaningServices')
```



| Illustration | CleaningServices |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/CleaningServices.png) | ![illustration for CleaningServices](../../material-4/Maps/CleaningServices.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CleaningServicesXs>`
- `<$CleaningServicesSm>`
- `<$CleaningServicesMd>`
- `<$CleaningServicesLg>`





## CleaningServices

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CleaningServices
include('material-4/Maps/CleaningServices')

' renders the element
CleaningServices('CleaningServices', 'Cleaning Services', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CleaningServices
include('material-4/Maps/CleaningServices')

' renders the element
CleaningServices('CleaningServices', 'Cleaning Services', 'an optional tech label', 'an optional description')
@enduml
```

