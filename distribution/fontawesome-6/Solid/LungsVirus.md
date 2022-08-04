# LungsVirus


```text
fontawesome-6/Solid/LungsVirus
```

```text
include('fontawesome-6/Solid/LungsVirus')
```



| Illustration | LungsVirus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/LungsVirus.png) | ![illustration for LungsVirus](../../fontawesome-6/Solid/LungsVirus.Local.png) |




## LungsVirus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element LungsVirus
include('fontawesome-6/Solid/LungsVirus')

' renders the element
LungsVirus('LungsVirus', 'Lungs Virus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LungsVirus
include('fontawesome-6/Solid/LungsVirus')

' renders the element
LungsVirus('LungsVirus', 'Lungs Virus', 'an optional tech label', 'an optional description')
@enduml
```

