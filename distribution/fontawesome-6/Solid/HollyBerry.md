# HollyBerry


```text
fontawesome-6/Solid/HollyBerry
```

```text
include('fontawesome-6/Solid/HollyBerry')
```



| Illustration | HollyBerry |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HollyBerry.png) | ![illustration for HollyBerry](../../fontawesome-6/Solid/HollyBerry.Local.png) |




## HollyBerry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HollyBerry
include('fontawesome-6/Solid/HollyBerry')

' renders the element
HollyBerry('HollyBerry', 'Holly Berry', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HollyBerry
include('fontawesome-6/Solid/HollyBerry')

' renders the element
HollyBerry('HollyBerry', 'Holly Berry', 'an optional tech label', 'an optional description')
@enduml
```

