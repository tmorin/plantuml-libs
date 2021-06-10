# UtensilSpoon


```text
fontawesome-5/Solid/UtensilSpoon
```

```text
include('fontawesome-5/Solid/UtensilSpoon')
```



| Illustration | UtensilSpoon |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/UtensilSpoon.png) | ![illustration for UtensilSpoon](../../fontawesome-5/Solid/UtensilSpoon.Local.png) |




## UtensilSpoon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element UtensilSpoon
include('fontawesome-5/Solid/UtensilSpoon')

' renders the element
UtensilSpoon('UtensilSpoon', 'Utensil Spoon', 'an optional tech label')
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

' loads the Item which embeds the element UtensilSpoon
include('fontawesome-5/Solid/UtensilSpoon')

' renders the element
UtensilSpoon('UtensilSpoon', 'Utensil Spoon', 'an optional tech label')
@enduml
```

