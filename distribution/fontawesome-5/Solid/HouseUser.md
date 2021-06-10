# HouseUser


```text
fontawesome-5/Solid/HouseUser
```

```text
include('fontawesome-5/Solid/HouseUser')
```



| Illustration | HouseUser |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/HouseUser.png) | ![illustration for HouseUser](../../fontawesome-5/Solid/HouseUser.Local.png) |




## HouseUser

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HouseUser
include('fontawesome-5/Solid/HouseUser')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HouseUser
include('fontawesome-5/Solid/HouseUser')

' renders the element
HouseUser('HouseUser', 'House User', 'an optional tech label')
@enduml
```

