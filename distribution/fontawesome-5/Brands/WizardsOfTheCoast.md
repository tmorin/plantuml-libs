# WizardsOfTheCoast


```text
fontawesome-5/Brands/WizardsOfTheCoast
```

```text
include('fontawesome-5/Brands/WizardsOfTheCoast')
```



| Illustration | WizardsOfTheCoast |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/WizardsOfTheCoast.png) | ![illustration for WizardsOfTheCoast](../../fontawesome-5/Brands/WizardsOfTheCoast.Local.png) |




## WizardsOfTheCoast

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element WizardsOfTheCoast
include('fontawesome-5/Brands/WizardsOfTheCoast')

' renders the element
WizardsOfTheCoast('WizardsOfTheCoast', 'Wizards Of The Coast', 'an optional tech label')
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

' loads the Item which embeds the element WizardsOfTheCoast
include('fontawesome-5/Brands/WizardsOfTheCoast')

' renders the element
WizardsOfTheCoast('WizardsOfTheCoast', 'Wizards Of The Coast', 'an optional tech label')
@enduml
```

