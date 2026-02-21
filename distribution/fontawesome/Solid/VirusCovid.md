# VirusCovid


```text
fontawesome/Solid/VirusCovid
```

```text
include('fontawesome/Solid/VirusCovid')
```



| Illustration | VirusCovid |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/VirusCovid.png) | ![illustration for VirusCovid](../../fontawesome/Solid/VirusCovid.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VirusCovidXs>`
- `<$VirusCovidSm>`
- `<$VirusCovidMd>`
- `<$VirusCovidLg>`





## VirusCovid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element VirusCovid
include('fontawesome/Solid/VirusCovid')

' renders the element
VirusCovid('VirusCovid', 'Virus Covid', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element VirusCovid
include('fontawesome/Solid/VirusCovid')

' renders the element
VirusCovid('VirusCovid', 'Virus Covid', 'an optional tech label', 'an optional description')
@enduml
```

