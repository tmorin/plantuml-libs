# Pray


```text
fontawesome-5/Solid/Pray
```

```text
include('fontawesome-5/Solid/Pray')
```



| Illustration | Pray |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Pray.png) | ![illustration for Pray](../../fontawesome-5/Solid/Pray.Local.png) |




## Pray

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Pray
include('fontawesome-5/Solid/Pray')

' renders the element
Pray('Pray', 'Pray', 'an optional tech label')
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

' loads the Item which embeds the element Pray
include('fontawesome-5/Solid/Pray')

' renders the element
Pray('Pray', 'Pray', 'an optional tech label')
@enduml
```

