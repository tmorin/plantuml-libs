# Angry


```text
fontawesome-5/Solid/Angry
```

```text
include('fontawesome-5/Solid/Angry')
```



| Illustration | Angry |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Angry.png) | ![illustration for Angry](../../fontawesome-5/Solid/Angry.Local.png) |




## Angry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Angry
include('fontawesome-5/Solid/Angry')

' renders the element
Angry('Angry', 'Angry', 'an optional tech label')
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

' loads the Item which embeds the element Angry
include('fontawesome-5/Solid/Angry')

' renders the element
Angry('Angry', 'Angry', 'an optional tech label')
@enduml
```

