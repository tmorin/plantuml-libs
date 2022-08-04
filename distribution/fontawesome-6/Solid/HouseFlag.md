# HouseFlag


```text
fontawesome-6/Solid/HouseFlag
```

```text
include('fontawesome-6/Solid/HouseFlag')
```



| Illustration | HouseFlag |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HouseFlag.png) | ![illustration for HouseFlag](../../fontawesome-6/Solid/HouseFlag.Local.png) |




## HouseFlag

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HouseFlag
include('fontawesome-6/Solid/HouseFlag')

' renders the element
HouseFlag('HouseFlag', 'House Flag', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HouseFlag
include('fontawesome-6/Solid/HouseFlag')

' renders the element
HouseFlag('HouseFlag', 'House Flag', 'an optional tech label', 'an optional description')
@enduml
```

