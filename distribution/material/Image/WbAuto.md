# WbAuto


```text
material/Image/WbAuto
```

```text
include('material/Image/WbAuto')
```



| Illustration | WbAuto |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/WbAuto.png) | ![illustration for WbAuto](../../material/Image/WbAuto.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WbAutoXs>`
- `<$WbAutoSm>`
- `<$WbAutoMd>`
- `<$WbAutoLg>`





## WbAuto

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element WbAuto
include('material/Image/WbAuto')

' renders the element
WbAuto('WbAuto', 'Wb Auto', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WbAuto
include('material/Image/WbAuto')

' renders the element
WbAuto('WbAuto', 'Wb Auto', 'an optional tech label', 'an optional description')
@enduml
```

