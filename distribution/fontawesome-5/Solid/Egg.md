# Egg


```text
fontawesome-5/Solid/Egg
```

```text
include('fontawesome-5/Solid/Egg')
```



| Illustration | Egg |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Egg.png) | ![illustration for Egg](../../fontawesome-5/Solid/Egg.Local.png) |




## Egg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Egg
include('fontawesome-5/Solid/Egg')

' renders the element
Egg('Egg', 'Egg', 'an optional tech label')
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

' loads the Item which embeds the element Egg
include('fontawesome-5/Solid/Egg')

' renders the element
Egg('Egg', 'Egg', 'an optional tech label')
@enduml
```

