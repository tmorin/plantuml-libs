# WbIridescent


```text
material/Image/WbIridescent
```

```text
include('material/Image/WbIridescent')
```



| Illustration | WbIridescent |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/WbIridescent.png) | ![illustration for WbIridescent](../../material/Image/WbIridescent.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element WbIridescent
include('material/Image/WbIridescent')

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
include('material/bootstrap')

' loads the Item which embeds the element WbIridescent
include('material/Image/WbIridescent')

' renders the element
WbIridescent('WbIridescent', 'Wb Iridescent', 'an optional tech label', 'an optional description')
@enduml
```

