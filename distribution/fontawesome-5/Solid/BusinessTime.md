# BusinessTime


```text
fontawesome-5/Solid/BusinessTime
```

```text
include('fontawesome-5/Solid/BusinessTime')
```



| Illustration | BusinessTime |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/BusinessTime.png) | ![illustration for BusinessTime](../../fontawesome-5/Solid/BusinessTime.Local.png) |




## BusinessTime

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element BusinessTime
include('fontawesome-5/Solid/BusinessTime')

' renders the element
BusinessTime('BusinessTime', 'Business Time', 'an optional tech label')
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

' loads the Item which embeds the element BusinessTime
include('fontawesome-5/Solid/BusinessTime')

' renders the element
BusinessTime('BusinessTime', 'Business Time', 'an optional tech label')
@enduml
```

