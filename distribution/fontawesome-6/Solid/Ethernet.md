# Ethernet


```text
fontawesome-6/Solid/Ethernet
```

```text
include('fontawesome-6/Solid/Ethernet')
```



| Illustration | Ethernet |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Ethernet.png) | ![illustration for Ethernet](../../fontawesome-6/Solid/Ethernet.Local.png) |




## Ethernet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Ethernet
include('fontawesome-6/Solid/Ethernet')

' renders the element
Ethernet('Ethernet', 'Ethernet', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ethernet
include('fontawesome-6/Solid/Ethernet')

' renders the element
Ethernet('Ethernet', 'Ethernet', 'an optional tech label', 'an optional description')
@enduml
```

