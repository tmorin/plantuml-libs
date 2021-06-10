# SprayCan


```text
fontawesome-5/Solid/SprayCan
```

```text
include('fontawesome-5/Solid/SprayCan')
```



| Illustration | SprayCan |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/SprayCan.png) | ![illustration for SprayCan](../../fontawesome-5/Solid/SprayCan.Local.png) |




## SprayCan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SprayCan
include('fontawesome-5/Solid/SprayCan')

' renders the element
SprayCan('SprayCan', 'Spray Can', 'an optional tech label')
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

' loads the Item which embeds the element SprayCan
include('fontawesome-5/Solid/SprayCan')

' renders the element
SprayCan('SprayCan', 'Spray Can', 'an optional tech label')
@enduml
```

