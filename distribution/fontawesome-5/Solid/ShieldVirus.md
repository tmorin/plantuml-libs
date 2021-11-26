# ShieldVirus


```text
fontawesome-5/Solid/ShieldVirus
```

```text
include('fontawesome-5/Solid/ShieldVirus')
```



| Illustration | ShieldVirus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ShieldVirus.png) | ![illustration for ShieldVirus](../../fontawesome-5/Solid/ShieldVirus.Local.png) |




## ShieldVirus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ShieldVirus
include('fontawesome-5/Solid/ShieldVirus')

' renders the element
ShieldVirus('ShieldVirus', 'Shield Virus', 'an optional tech label')
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

' loads the Item which embeds the element ShieldVirus
include('fontawesome-5/Solid/ShieldVirus')

' renders the element
ShieldVirus('ShieldVirus', 'Shield Virus', 'an optional tech label')
@enduml
```

