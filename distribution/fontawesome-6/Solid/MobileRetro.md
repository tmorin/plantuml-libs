# MobileRetro


```text
fontawesome-6/Solid/MobileRetro
```

```text
include('fontawesome-6/Solid/MobileRetro')
```



| Illustration | MobileRetro |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/MobileRetro.png) | ![illustration for MobileRetro](../../fontawesome-6/Solid/MobileRetro.Local.png) |




## MobileRetro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MobileRetro
include('fontawesome-6/Solid/MobileRetro')

' renders the element
MobileRetro('MobileRetro', 'Mobile Retro', 'an optional tech label')
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

' loads the Item which embeds the element MobileRetro
include('fontawesome-6/Solid/MobileRetro')

' renders the element
MobileRetro('MobileRetro', 'Mobile Retro', 'an optional tech label')
@enduml
```

