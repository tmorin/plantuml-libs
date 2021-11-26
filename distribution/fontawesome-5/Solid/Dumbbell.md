# Dumbbell


```text
fontawesome-5/Solid/Dumbbell
```

```text
include('fontawesome-5/Solid/Dumbbell')
```



| Illustration | Dumbbell |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Dumbbell.png) | ![illustration for Dumbbell](../../fontawesome-5/Solid/Dumbbell.Local.png) |




## Dumbbell

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Dumbbell
include('fontawesome-5/Solid/Dumbbell')

' renders the element
Dumbbell('Dumbbell', 'Dumbbell', 'an optional tech label')
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

' loads the Item which embeds the element Dumbbell
include('fontawesome-5/Solid/Dumbbell')

' renders the element
Dumbbell('Dumbbell', 'Dumbbell', 'an optional tech label')
@enduml
```

