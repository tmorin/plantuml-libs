# VenusMars


```text
fontawesome-6/Solid/VenusMars
```

```text
include('fontawesome-6/Solid/VenusMars')
```



| Illustration | VenusMars |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/VenusMars.png) | ![illustration for VenusMars](../../fontawesome-6/Solid/VenusMars.Local.png) |




## VenusMars

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element VenusMars
include('fontawesome-6/Solid/VenusMars')

' renders the element
VenusMars('VenusMars', 'Venus Mars', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element VenusMars
include('fontawesome-6/Solid/VenusMars')

' renders the element
VenusMars('VenusMars', 'Venus Mars', 'an optional tech label', 'an optional description')
@enduml
```

