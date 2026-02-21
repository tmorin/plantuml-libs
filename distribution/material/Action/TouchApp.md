# TouchApp


```text
material/Action/TouchApp
```

```text
include('material/Action/TouchApp')
```



| Illustration | TouchApp |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/TouchApp.png) | ![illustration for TouchApp](../../material/Action/TouchApp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TouchAppXs>`
- `<$TouchAppSm>`
- `<$TouchAppMd>`
- `<$TouchAppLg>`





## TouchApp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element TouchApp
include('material/Action/TouchApp')

' renders the element
TouchApp('TouchApp', 'Touch App', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TouchApp
include('material/Action/TouchApp')

' renders the element
TouchApp('TouchApp', 'Touch App', 'an optional tech label', 'an optional description')
@enduml
```

