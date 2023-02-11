# Stapler


```text
fontawesome-6/Solid/Stapler
```

```text
include('fontawesome-6/Solid/Stapler')
```



| Illustration | Stapler |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Stapler.png) | ![illustration for Stapler](../../fontawesome-6/Solid/Stapler.Local.png) |




## Stapler

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Stapler
include('fontawesome-6/Solid/Stapler')

' renders the element
Stapler('Stapler', 'Stapler', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Stapler
include('fontawesome-6/Solid/Stapler')

' renders the element
Stapler('Stapler', 'Stapler', 'an optional tech label', 'an optional description')
@enduml
```

