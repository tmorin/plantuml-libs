# SimCard


```text
fontawesome-5/Solid/SimCard
```

```text
include('fontawesome-5/Solid/SimCard')
```



| Illustration | SimCard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/SimCard.png) | ![illustration for SimCard](../../fontawesome-5/Solid/SimCard.Local.png) |




## SimCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SimCard
include('fontawesome-5/Solid/SimCard')

' renders the element
SimCard('SimCard', 'Sim Card', 'an optional tech label')
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

' loads the Item which embeds the element SimCard
include('fontawesome-5/Solid/SimCard')

' renders the element
SimCard('SimCard', 'Sim Card', 'an optional tech label')
@enduml
```

