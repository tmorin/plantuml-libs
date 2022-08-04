# SimCard


```text
fontawesome-6/Solid/SimCard
```

```text
include('fontawesome-6/Solid/SimCard')
```



| Illustration | SimCard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/SimCard.png) | ![illustration for SimCard](../../fontawesome-6/Solid/SimCard.Local.png) |




## SimCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SimCard
include('fontawesome-6/Solid/SimCard')

' renders the element
SimCard('SimCard', 'Sim Card', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SimCard
include('fontawesome-6/Solid/SimCard')

' renders the element
SimCard('SimCard', 'Sim Card', 'an optional tech label', 'an optional description')
@enduml
```

