# SwimmingPool


```text
fontawesome-5/Solid/SwimmingPool
```

```text
include('fontawesome-5/Solid/SwimmingPool')
```



| Illustration | SwimmingPool |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/SwimmingPool.png) | ![illustration for SwimmingPool](../../fontawesome-5/Solid/SwimmingPool.Local.png) |




## SwimmingPool

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SwimmingPool
include('fontawesome-5/Solid/SwimmingPool')

' renders the element
SwimmingPool('SwimmingPool', 'Swimming Pool', 'an optional tech label')
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

' loads the Item which embeds the element SwimmingPool
include('fontawesome-5/Solid/SwimmingPool')

' renders the element
SwimmingPool('SwimmingPool', 'Swimming Pool', 'an optional tech label')
@enduml
```

