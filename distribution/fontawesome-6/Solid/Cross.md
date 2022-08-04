# Cross


```text
fontawesome-6/Solid/Cross
```

```text
include('fontawesome-6/Solid/Cross')
```



| Illustration | Cross |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Cross.png) | ![illustration for Cross](../../fontawesome-6/Solid/Cross.Local.png) |




## Cross

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Cross
include('fontawesome-6/Solid/Cross')

' renders the element
Cross('Cross', 'Cross', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cross
include('fontawesome-6/Solid/Cross')

' renders the element
Cross('Cross', 'Cross', 'an optional tech label', 'an optional description')
@enduml
```

