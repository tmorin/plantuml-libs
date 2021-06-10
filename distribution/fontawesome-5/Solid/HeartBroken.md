# HeartBroken


```text
fontawesome-5/Solid/HeartBroken
```

```text
include('fontawesome-5/Solid/HeartBroken')
```



| Illustration | HeartBroken |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/HeartBroken.png) | ![illustration for HeartBroken](../../fontawesome-5/Solid/HeartBroken.Local.png) |




## HeartBroken

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HeartBroken
include('fontawesome-5/Solid/HeartBroken')

' renders the element
HeartBroken('HeartBroken', 'Heart Broken', 'an optional tech label')
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

' loads the Item which embeds the element HeartBroken
include('fontawesome-5/Solid/HeartBroken')

' renders the element
HeartBroken('HeartBroken', 'Heart Broken', 'an optional tech label')
@enduml
```

