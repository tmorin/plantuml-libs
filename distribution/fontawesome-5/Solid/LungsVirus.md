# LungsVirus


```text
fontawesome-5/Solid/LungsVirus
```

```text
include('fontawesome-5/Solid/LungsVirus')
```



| Illustration | LungsVirus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/LungsVirus.png) | ![illustration for LungsVirus](../../fontawesome-5/Solid/LungsVirus.Local.png) |




## LungsVirus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element LungsVirus
include('fontawesome-5/Solid/LungsVirus')

' renders the element
LungsVirus('LungsVirus', 'Lungs Virus', 'an optional tech label')
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

' loads the Item which embeds the element LungsVirus
include('fontawesome-5/Solid/LungsVirus')

' renders the element
LungsVirus('LungsVirus', 'Lungs Virus', 'an optional tech label')
@enduml
```

