# Tired


```text
fontawesome-5/Solid/Tired
```

```text
include('fontawesome-5/Solid/Tired')
```



| Illustration | Tired |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Tired.png) | ![illustration for Tired](../../fontawesome-5/Solid/Tired.Local.png) |




## Tired

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Tired
include('fontawesome-5/Solid/Tired')

' renders the element
Tired('Tired', 'Tired', 'an optional tech label')
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

' loads the Item which embeds the element Tired
include('fontawesome-5/Solid/Tired')

' renders the element
Tired('Tired', 'Tired', 'an optional tech label')
@enduml
```

