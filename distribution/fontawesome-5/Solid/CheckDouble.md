# CheckDouble


```text
fontawesome-5/Solid/CheckDouble
```

```text
include('fontawesome-5/Solid/CheckDouble')
```



| Illustration | CheckDouble |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/CheckDouble.png) | ![illustration for CheckDouble](../../fontawesome-5/Solid/CheckDouble.Local.png) |




## CheckDouble

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CheckDouble
include('fontawesome-5/Solid/CheckDouble')

' renders the element
CheckDouble('CheckDouble', 'Check Double', 'an optional tech label')
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

' loads the Item which embeds the element CheckDouble
include('fontawesome-5/Solid/CheckDouble')

' renders the element
CheckDouble('CheckDouble', 'Check Double', 'an optional tech label')
@enduml
```

