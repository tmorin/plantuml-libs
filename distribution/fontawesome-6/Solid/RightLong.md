# RightLong


```text
fontawesome-6/Solid/RightLong
```

```text
include('fontawesome-6/Solid/RightLong')
```



| Illustration | RightLong |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/RightLong.png) | ![illustration for RightLong](../../fontawesome-6/Solid/RightLong.Local.png) |




## RightLong

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element RightLong
include('fontawesome-6/Solid/RightLong')

' renders the element
RightLong('RightLong', 'Right Long', 'an optional tech label')
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

' loads the Item which embeds the element RightLong
include('fontawesome-6/Solid/RightLong')

' renders the element
RightLong('RightLong', 'Right Long', 'an optional tech label')
@enduml
```

