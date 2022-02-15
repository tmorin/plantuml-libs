# HouseUser


```text
fontawesome-6/Solid/HouseUser
```

```text
include('fontawesome-6/Solid/HouseUser')
```



| Illustration | HouseUser |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HouseUser.png) | ![illustration for HouseUser](../../fontawesome-6/Solid/HouseUser.Local.png) |




## HouseUser

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HouseUser
include('fontawesome-6/Solid/HouseUser')

' renders the element
HouseUser('HouseUser', 'House User', 'an optional tech label')
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

' loads the Item which embeds the element HouseUser
include('fontawesome-6/Solid/HouseUser')

' renders the element
HouseUser('HouseUser', 'House User', 'an optional tech label')
@enduml
```

