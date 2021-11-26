# Virus


```text
fontawesome-5/Solid/Virus
```

```text
include('fontawesome-5/Solid/Virus')
```



| Illustration | Virus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Virus.png) | ![illustration for Virus](../../fontawesome-5/Solid/Virus.Local.png) |




## Virus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Virus
include('fontawesome-5/Solid/Virus')

' renders the element
Virus('Virus', 'Virus', 'an optional tech label')
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

' loads the Item which embeds the element Virus
include('fontawesome-5/Solid/Virus')

' renders the element
Virus('Virus', 'Virus', 'an optional tech label')
@enduml
```

