# Cross


```text
fontawesome-5/Solid/Cross
```

```text
include('fontawesome-5/Solid/Cross')
```



| Illustration | Cross |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Cross.png) | ![illustration for Cross](../../fontawesome-5/Solid/Cross.Local.png) |




## Cross

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Cross
include('fontawesome-5/Solid/Cross')

' renders the element
Cross('Cross', 'Cross', 'an optional tech label')
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

' loads the Item which embeds the element Cross
include('fontawesome-5/Solid/Cross')

' renders the element
Cross('Cross', 'Cross', 'an optional tech label')
@enduml
```

