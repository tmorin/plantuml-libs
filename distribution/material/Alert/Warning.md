# Warning


```text
material/Alert/Warning
```

```text
include('material/Alert/Warning')
```



| Illustration | Warning |
| :---: | :---: |
| ![illustration for Illustration](../../material/Alert/Warning.png) | ![illustration for Warning](../../material/Alert/Warning.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WarningXs>`
- `<$WarningSm>`
- `<$WarningMd>`
- `<$WarningLg>`





## Warning

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Warning
include('material/Alert/Warning')

' renders the element
Warning('Warning', 'Warning', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Warning
include('material/Alert/Warning')

' renders the element
Warning('Warning', 'Warning', 'an optional tech label', 'an optional description')
@enduml
```

