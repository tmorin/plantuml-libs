# Atlas


```text
fontawesome-5/Solid/Atlas
```

```text
include('fontawesome-5/Solid/Atlas')
```



| Illustration | Atlas |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Atlas.png) | ![illustration for Atlas](../../fontawesome-5/Solid/Atlas.Local.png) |




## Atlas

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Atlas
include('fontawesome-5/Solid/Atlas')

' renders the element
Atlas('Atlas', 'Atlas', 'an optional tech label')
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

' loads the Item which embeds the element Atlas
include('fontawesome-5/Solid/Atlas')

' renders the element
Atlas('Atlas', 'Atlas', 'an optional tech label')
@enduml
```

