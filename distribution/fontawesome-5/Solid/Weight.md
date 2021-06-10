# Weight


```text
fontawesome-5/Solid/Weight
```

```text
include('fontawesome-5/Solid/Weight')
```



| Illustration | Weight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Weight.png) | ![illustration for Weight](../../fontawesome-5/Solid/Weight.Local.png) |




## Weight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Weight
include('fontawesome-5/Solid/Weight')

' renders the element
Weight('Weight', 'Weight', 'an optional tech label')
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

' loads the Item which embeds the element Weight
include('fontawesome-5/Solid/Weight')

' renders the element
Weight('Weight', 'Weight', 'an optional tech label')
@enduml
```

