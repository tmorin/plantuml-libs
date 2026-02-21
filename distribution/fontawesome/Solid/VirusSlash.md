# VirusSlash


```text
fontawesome/Solid/VirusSlash
```

```text
include('fontawesome/Solid/VirusSlash')
```



| Illustration | VirusSlash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/VirusSlash.png) | ![illustration for VirusSlash](../../fontawesome/Solid/VirusSlash.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VirusSlashXs>`
- `<$VirusSlashSm>`
- `<$VirusSlashMd>`
- `<$VirusSlashLg>`





## VirusSlash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element VirusSlash
include('fontawesome/Solid/VirusSlash')

' renders the element
VirusSlash('VirusSlash', 'Virus Slash', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element VirusSlash
include('fontawesome/Solid/VirusSlash')

' renders the element
VirusSlash('VirusSlash', 'Virus Slash', 'an optional tech label', 'an optional description')
@enduml
```

