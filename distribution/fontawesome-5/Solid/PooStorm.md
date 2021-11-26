# PooStorm


```text
fontawesome-5/Solid/PooStorm
```

```text
include('fontawesome-5/Solid/PooStorm')
```



| Illustration | PooStorm |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/PooStorm.png) | ![illustration for PooStorm](../../fontawesome-5/Solid/PooStorm.Local.png) |




## PooStorm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PooStorm
include('fontawesome-5/Solid/PooStorm')

' renders the element
PooStorm('PooStorm', 'Poo Storm', 'an optional tech label')
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

' loads the Item which embeds the element PooStorm
include('fontawesome-5/Solid/PooStorm')

' renders the element
PooStorm('PooStorm', 'Poo Storm', 'an optional tech label')
@enduml
```

