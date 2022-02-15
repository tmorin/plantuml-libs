# Gun


```text
fontawesome-6/Solid/Gun
```

```text
include('fontawesome-6/Solid/Gun')
```



| Illustration | Gun |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Gun.png) | ![illustration for Gun](../../fontawesome-6/Solid/Gun.Local.png) |




## Gun

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Gun
include('fontawesome-6/Solid/Gun')

' renders the element
Gun('Gun', 'Gun', 'an optional tech label')
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

' loads the Item which embeds the element Gun
include('fontawesome-6/Solid/Gun')

' renders the element
Gun('Gun', 'Gun', 'an optional tech label')
@enduml
```

