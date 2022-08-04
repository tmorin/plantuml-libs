# Egg


```text
fontawesome-6/Solid/Egg
```

```text
include('fontawesome-6/Solid/Egg')
```



| Illustration | Egg |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Egg.png) | ![illustration for Egg](../../fontawesome-6/Solid/Egg.Local.png) |




## Egg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Egg
include('fontawesome-6/Solid/Egg')

' renders the element
Egg('Egg', 'Egg', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Egg
include('fontawesome-6/Solid/Egg')

' renders the element
Egg('Egg', 'Egg', 'an optional tech label', 'an optional description')
@enduml
```

