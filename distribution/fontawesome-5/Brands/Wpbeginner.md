# Wpbeginner


```text
fontawesome-5/Brands/Wpbeginner
```

```text
include('fontawesome-5/Brands/Wpbeginner')
```



| Illustration | Wpbeginner |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Wpbeginner.png) | ![illustration for Wpbeginner](../../fontawesome-5/Brands/Wpbeginner.Local.png) |




## Wpbeginner

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Wpbeginner
include('fontawesome-5/Brands/Wpbeginner')

' renders the element
Wpbeginner('Wpbeginner', 'Wpbeginner', 'an optional tech label')
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

' loads the Item which embeds the element Wpbeginner
include('fontawesome-5/Brands/Wpbeginner')

' renders the element
Wpbeginner('Wpbeginner', 'Wpbeginner', 'an optional tech label')
@enduml
```

