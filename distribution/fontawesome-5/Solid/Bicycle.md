# Bicycle


```text
fontawesome-5/Solid/Bicycle
```

```text
include('fontawesome-5/Solid/Bicycle')
```



| Illustration | Bicycle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Bicycle.png) | ![illustration for Bicycle](../../fontawesome-5/Solid/Bicycle.Local.png) |




## Bicycle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Bicycle
include('fontawesome-5/Solid/Bicycle')

' renders the element
Bicycle('Bicycle', 'Bicycle', 'an optional tech label')
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

' loads the Item which embeds the element Bicycle
include('fontawesome-5/Solid/Bicycle')

' renders the element
Bicycle('Bicycle', 'Bicycle', 'an optional tech label')
@enduml
```

