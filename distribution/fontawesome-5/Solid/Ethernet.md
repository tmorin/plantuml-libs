# Ethernet


```text
fontawesome-5/Solid/Ethernet
```

```text
include('fontawesome-5/Solid/Ethernet')
```



| Illustration | Ethernet |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Ethernet.png) | ![illustration for Ethernet](../../fontawesome-5/Solid/Ethernet.Local.png) |




## Ethernet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Ethernet
include('fontawesome-5/Solid/Ethernet')

' renders the element
Ethernet('Ethernet', 'Ethernet', 'an optional tech label')
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

' loads the Item which embeds the element Ethernet
include('fontawesome-5/Solid/Ethernet')

' renders the element
Ethernet('Ethernet', 'Ethernet', 'an optional tech label')
@enduml
```

