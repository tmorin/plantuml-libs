# VirusCovid


```text
fontawesome-6/Solid/VirusCovid
```

```text
include('fontawesome-6/Solid/VirusCovid')
```



| Illustration | VirusCovid |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/VirusCovid.png) | ![illustration for VirusCovid](../../fontawesome-6/Solid/VirusCovid.Local.png) |




## VirusCovid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element VirusCovid
include('fontawesome-6/Solid/VirusCovid')

' renders the element
VirusCovid('VirusCovid', 'Virus Covid', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element VirusCovid
include('fontawesome-6/Solid/VirusCovid')

' renders the element
VirusCovid('VirusCovid', 'Virus Covid', 'an optional tech label')
@enduml
```

