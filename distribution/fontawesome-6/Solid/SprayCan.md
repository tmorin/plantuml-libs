# SprayCan


```text
fontawesome-6/Solid/SprayCan
```

```text
include('fontawesome-6/Solid/SprayCan')
```



| Illustration | SprayCan |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/SprayCan.png) | ![illustration for SprayCan](../../fontawesome-6/Solid/SprayCan.Local.png) |




## SprayCan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SprayCan
include('fontawesome-6/Solid/SprayCan')

' renders the element
SprayCan('SprayCan', 'Spray Can', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SprayCan
include('fontawesome-6/Solid/SprayCan')

' renders the element
SprayCan('SprayCan', 'Spray Can', 'an optional tech label', 'an optional description')
@enduml
```

