# CloudDownloadAlt


```text
fontawesome-5/Solid/CloudDownloadAlt
```

```text
include('fontawesome-5/Solid/CloudDownloadAlt')
```



| Illustration | CloudDownloadAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/CloudDownloadAlt.png) | ![illustration for CloudDownloadAlt](../../fontawesome-5/Solid/CloudDownloadAlt.Local.png) |




## CloudDownloadAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CloudDownloadAlt
include('fontawesome-5/Solid/CloudDownloadAlt')

' renders the element
CloudDownloadAlt('CloudDownloadAlt', 'Cloud Download Alt', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CloudDownloadAlt
include('fontawesome-5/Solid/CloudDownloadAlt')

' renders the element
CloudDownloadAlt('CloudDownloadAlt', 'Cloud Download Alt', 'an optional tech label')
@enduml
```

