# HollyBerry


```text
fontawesome-5/Solid/HollyBerry
```

```text
include('fontawesome-5/Solid/HollyBerry')
```



| Illustration | HollyBerry |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/HollyBerry.png) | ![illustration for HollyBerry](../../fontawesome-5/Solid/HollyBerry.Local.png) |




## HollyBerry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HollyBerry
include('fontawesome-5/Solid/HollyBerry')

' renders the element
HollyBerry('HollyBerry', 'Holly Berry', 'an optional tech label')
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

' loads the Item which embeds the element HollyBerry
include('fontawesome-5/Solid/HollyBerry')

' renders the element
HollyBerry('HollyBerry', 'Holly Berry', 'an optional tech label')
@enduml
```

