# CloudDownloadAlt


```text
fontawesome/Solid/CloudDownloadAlt
```

```text
include('fontawesome/Solid/CloudDownloadAlt')
```



| Illustration | CloudDownloadAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CloudDownloadAlt.png) | ![illustration for CloudDownloadAlt](../../fontawesome/Solid/CloudDownloadAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloudDownloadAltXs>`
- `<$CloudDownloadAltSm>`
- `<$CloudDownloadAltMd>`
- `<$CloudDownloadAltLg>`





## CloudDownloadAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CloudDownloadAlt
include('fontawesome/Solid/CloudDownloadAlt')

' renders the element
CloudDownloadAlt('CloudDownloadAlt', 'Cloud Download Alt', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element CloudDownloadAlt
include('fontawesome/Solid/CloudDownloadAlt')

' renders the element
CloudDownloadAlt('CloudDownloadAlt', 'Cloud Download Alt', 'an optional tech label', 'an optional description')
@enduml
```

