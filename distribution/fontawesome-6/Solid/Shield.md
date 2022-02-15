# Shield


```text
fontawesome-6/Solid/Shield
```

```text
include('fontawesome-6/Solid/Shield')
```



| Illustration | Shield |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Shield.png) | ![illustration for Shield](../../fontawesome-6/Solid/Shield.Local.png) |




## Shield

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Shield
include('fontawesome-6/Solid/Shield')

' renders the element
Shield('Shield', 'Shield', 'an optional tech label')
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

' loads the Item which embeds the element Shield
include('fontawesome-6/Solid/Shield')

' renders the element
Shield('Shield', 'Shield', 'an optional tech label')
@enduml
```

