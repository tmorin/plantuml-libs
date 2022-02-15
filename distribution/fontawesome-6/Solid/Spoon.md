# Spoon


```text
fontawesome-6/Solid/Spoon
```

```text
include('fontawesome-6/Solid/Spoon')
```



| Illustration | Spoon |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Spoon.png) | ![illustration for Spoon](../../fontawesome-6/Solid/Spoon.Local.png) |




## Spoon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Spoon
include('fontawesome-6/Solid/Spoon')

' renders the element
Spoon('Spoon', 'Spoon', 'an optional tech label')
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

' loads the Item which embeds the element Spoon
include('fontawesome-6/Solid/Spoon')

' renders the element
Spoon('Spoon', 'Spoon', 'an optional tech label')
@enduml
```

