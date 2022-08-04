# HelmetSafety


```text
fontawesome-6/Solid/HelmetSafety
```

```text
include('fontawesome-6/Solid/HelmetSafety')
```



| Illustration | HelmetSafety |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HelmetSafety.png) | ![illustration for HelmetSafety](../../fontawesome-6/Solid/HelmetSafety.Local.png) |




## HelmetSafety

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HelmetSafety
include('fontawesome-6/Solid/HelmetSafety')

' renders the element
HelmetSafety('HelmetSafety', 'Helmet Safety', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HelmetSafety
include('fontawesome-6/Solid/HelmetSafety')

' renders the element
HelmetSafety('HelmetSafety', 'Helmet Safety', 'an optional tech label', 'an optional description')
@enduml
```

