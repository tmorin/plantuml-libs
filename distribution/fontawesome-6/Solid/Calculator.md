# Calculator


```text
fontawesome-6/Solid/Calculator
```

```text
include('fontawesome-6/Solid/Calculator')
```



| Illustration | Calculator |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Calculator.png) | ![illustration for Calculator](../../fontawesome-6/Solid/Calculator.Local.png) |




## Calculator

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Calculator
include('fontawesome-6/Solid/Calculator')

' renders the element
Calculator('Calculator', 'Calculator', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Calculator
include('fontawesome-6/Solid/Calculator')

' renders the element
Calculator('Calculator', 'Calculator', 'an optional tech label', 'an optional description')
@enduml
```

