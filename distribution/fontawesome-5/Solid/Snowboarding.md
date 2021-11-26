# Snowboarding


```text
fontawesome-5/Solid/Snowboarding
```

```text
include('fontawesome-5/Solid/Snowboarding')
```



| Illustration | Snowboarding |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Snowboarding.png) | ![illustration for Snowboarding](../../fontawesome-5/Solid/Snowboarding.Local.png) |




## Snowboarding

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Snowboarding
include('fontawesome-5/Solid/Snowboarding')

' renders the element
Snowboarding('Snowboarding', 'Snowboarding', 'an optional tech label')
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

' loads the Item which embeds the element Snowboarding
include('fontawesome-5/Solid/Snowboarding')

' renders the element
Snowboarding('Snowboarding', 'Snowboarding', 'an optional tech label')
@enduml
```

