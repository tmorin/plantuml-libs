# VirusSlash


```text
fontawesome-6/Solid/VirusSlash
```

```text
include('fontawesome-6/Solid/VirusSlash')
```



| Illustration | VirusSlash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/VirusSlash.png) | ![illustration for VirusSlash](../../fontawesome-6/Solid/VirusSlash.Local.png) |




## VirusSlash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element VirusSlash
include('fontawesome-6/Solid/VirusSlash')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element VirusSlash
include('fontawesome-6/Solid/VirusSlash')

' renders the element
VirusSlash('VirusSlash', 'Virus Slash', 'an optional tech label')
@enduml
```

