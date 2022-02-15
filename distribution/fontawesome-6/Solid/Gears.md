# Gears


```text
fontawesome-6/Solid/Gears
```

```text
include('fontawesome-6/Solid/Gears')
```



| Illustration | Gears |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Gears.png) | ![illustration for Gears](../../fontawesome-6/Solid/Gears.Local.png) |




## Gears

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Gears
include('fontawesome-6/Solid/Gears')

' renders the element
Gears('Gears', 'Gears', 'an optional tech label')
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

' loads the Item which embeds the element Gears
include('fontawesome-6/Solid/Gears')

' renders the element
Gears('Gears', 'Gears', 'an optional tech label')
@enduml
```

