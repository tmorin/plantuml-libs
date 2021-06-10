# VirusSlash


```text
fontawesome-5/Solid/VirusSlash
```

```text
include('fontawesome-5/Solid/VirusSlash')
```



| Illustration | VirusSlash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/VirusSlash.png) | ![illustration for VirusSlash](../../fontawesome-5/Solid/VirusSlash.Local.png) |




## VirusSlash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element VirusSlash
include('fontawesome-5/Solid/VirusSlash')

' renders the element
VirusSlash('VirusSlash', 'Virus Slash', 'an optional tech label')
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

' loads the Item which embeds the element VirusSlash
include('fontawesome-5/Solid/VirusSlash')

' renders the element
VirusSlash('VirusSlash', 'Virus Slash', 'an optional tech label')
@enduml
```

