# Mercury


```text
fontawesome-6/Solid/Mercury
```

```text
include('fontawesome-6/Solid/Mercury')
```



| Illustration | Mercury |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Mercury.png) | ![illustration for Mercury](../../fontawesome-6/Solid/Mercury.Local.png) |




## Mercury

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Mercury
include('fontawesome-6/Solid/Mercury')

' renders the element
Mercury('Mercury', 'Mercury', 'an optional tech label')
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

' loads the Item which embeds the element Mercury
include('fontawesome-6/Solid/Mercury')

' renders the element
Mercury('Mercury', 'Mercury', 'an optional tech label')
@enduml
```

