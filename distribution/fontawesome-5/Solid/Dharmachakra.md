# Dharmachakra


```text
fontawesome-5/Solid/Dharmachakra
```

```text
include('fontawesome-5/Solid/Dharmachakra')
```



| Illustration | Dharmachakra |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Dharmachakra.png) | ![illustration for Dharmachakra](../../fontawesome-5/Solid/Dharmachakra.Local.png) |




## Dharmachakra

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Dharmachakra
include('fontawesome-5/Solid/Dharmachakra')

' renders the element
Dharmachakra('Dharmachakra', 'Dharmachakra', 'an optional tech label')
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

' loads the Item which embeds the element Dharmachakra
include('fontawesome-5/Solid/Dharmachakra')

' renders the element
Dharmachakra('Dharmachakra', 'Dharmachakra', 'an optional tech label')
@enduml
```

