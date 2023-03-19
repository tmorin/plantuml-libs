# WbIridescent


```text
material-4/Image/WbIridescent
```

```text
include('material-4/Image/WbIridescent')
```



| Illustration | WbIridescent |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/WbIridescent.png) | ![illustration for WbIridescent](../../material-4/Image/WbIridescent.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WbIridescentXs>`
- `<$WbIridescentSm>`
- `<$WbIridescentMd>`
- `<$WbIridescentLg>`





## WbIridescent

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element WbIridescent
include('material-4/Image/WbIridescent')

' renders the element
WbIridescent('WbIridescent', 'Wb Iridescent', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WbIridescent
include('material-4/Image/WbIridescent')

' renders the element
WbIridescent('WbIridescent', 'Wb Iridescent', 'an optional tech label', 'an optional description')
@enduml
```

