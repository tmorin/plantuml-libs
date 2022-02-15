# Disease


```text
fontawesome-6/Solid/Disease
```

```text
include('fontawesome-6/Solid/Disease')
```



| Illustration | Disease |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Disease.png) | ![illustration for Disease](../../fontawesome-6/Solid/Disease.Local.png) |




## Disease

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Disease
include('fontawesome-6/Solid/Disease')

' renders the element
Disease('Disease', 'Disease', 'an optional tech label')
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

' loads the Item which embeds the element Disease
include('fontawesome-6/Solid/Disease')

' renders the element
Disease('Disease', 'Disease', 'an optional tech label')
@enduml
```

