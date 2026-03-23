# BirthdayCake


```text
fontawesome/Solid/BirthdayCake
```

```text
include('fontawesome/Solid/BirthdayCake')
```



| Illustration | BirthdayCake |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BirthdayCake.png) | ![illustration for BirthdayCake](../../fontawesome/Solid/BirthdayCake.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BirthdayCakeXs>`
- `<$BirthdayCakeSm>`
- `<$BirthdayCakeMd>`
- `<$BirthdayCakeLg>`





## BirthdayCake

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BirthdayCake
include('fontawesome/Solid/BirthdayCake')

' renders the element
BirthdayCake('BirthdayCake', 'Birthday Cake', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element BirthdayCake
include('fontawesome/Solid/BirthdayCake')

' renders the element
BirthdayCake('BirthdayCake', 'Birthday Cake', 'an optional tech label', 'an optional description')
@enduml
```

