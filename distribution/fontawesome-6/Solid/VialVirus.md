# VialVirus


```text
fontawesome-6/Solid/VialVirus
```

```text
include('fontawesome-6/Solid/VialVirus')
```



| Illustration | VialVirus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/VialVirus.png) | ![illustration for VialVirus](../../fontawesome-6/Solid/VialVirus.Local.png) |




## VialVirus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element VialVirus
include('fontawesome-6/Solid/VialVirus')

' renders the element
VialVirus('VialVirus', 'Vial Virus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element VialVirus
include('fontawesome-6/Solid/VialVirus')

' renders the element
VialVirus('VialVirus', 'Vial Virus', 'an optional tech label', 'an optional description')
@enduml
```

