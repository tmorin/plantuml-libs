# GetApp


```text
material/Action/GetApp
```

```text
include('material/Action/GetApp')
```



| Illustration | GetApp |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/GetApp.png) | ![illustration for GetApp](../../material/Action/GetApp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GetAppXs>`
- `<$GetAppSm>`
- `<$GetAppMd>`
- `<$GetAppLg>`





## GetApp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element GetApp
include('material/Action/GetApp')

' renders the element
GetApp('GetApp', 'Get App', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GetApp
include('material/Action/GetApp')

' renders the element
GetApp('GetApp', 'Get App', 'an optional tech label', 'an optional description')
@enduml
```

