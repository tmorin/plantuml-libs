# FunnelDollar


```text
fontawesome-5/Solid/FunnelDollar
```

```text
include('fontawesome-5/Solid/FunnelDollar')
```



| Illustration | FunnelDollar |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/FunnelDollar.png) | ![illustration for FunnelDollar](../../fontawesome-5/Solid/FunnelDollar.Local.png) |




## FunnelDollar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FunnelDollar
include('fontawesome-5/Solid/FunnelDollar')

' renders the element
FunnelDollar('FunnelDollar', 'Funnel Dollar', 'an optional tech label')
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

' loads the Item which embeds the element FunnelDollar
include('fontawesome-5/Solid/FunnelDollar')

' renders the element
FunnelDollar('FunnelDollar', 'Funnel Dollar', 'an optional tech label')
@enduml
```

