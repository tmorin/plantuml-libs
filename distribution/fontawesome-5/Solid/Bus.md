# Bus


```text
fontawesome-5/Solid/Bus
```

```text
include('fontawesome-5/Solid/Bus')
```



| Illustration | Bus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Bus.png) | ![illustration for Bus](../../fontawesome-5/Solid/Bus.Local.png) |




## Bus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Bus
include('fontawesome-5/Solid/Bus')

' renders the element
Bus('Bus', 'Bus', 'an optional tech label')
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

' loads the Item which embeds the element Bus
include('fontawesome-5/Solid/Bus')

' renders the element
Bus('Bus', 'Bus', 'an optional tech label')
@enduml
```

