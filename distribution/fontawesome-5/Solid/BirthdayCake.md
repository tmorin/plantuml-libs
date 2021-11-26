# BirthdayCake


```text
fontawesome-5/Solid/BirthdayCake
```

```text
include('fontawesome-5/Solid/BirthdayCake')
```



| Illustration | BirthdayCake |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/BirthdayCake.png) | ![illustration for BirthdayCake](../../fontawesome-5/Solid/BirthdayCake.Local.png) |




## BirthdayCake

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element BirthdayCake
include('fontawesome-5/Solid/BirthdayCake')

' renders the element
BirthdayCake('BirthdayCake', 'Birthday Cake', 'an optional tech label')
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

' loads the Item which embeds the element BirthdayCake
include('fontawesome-5/Solid/BirthdayCake')

' renders the element
BirthdayCake('BirthdayCake', 'Birthday Cake', 'an optional tech label')
@enduml
```

