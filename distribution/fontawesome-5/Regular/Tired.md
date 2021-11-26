# Tired


```text
fontawesome-5/Regular/Tired
```

```text
include('fontawesome-5/Regular/Tired')
```



| Illustration | Tired |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/Tired.png) | ![illustration for Tired](../../fontawesome-5/Regular/Tired.Local.png) |




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
include('fontawesome-5/Regular/Tired')

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
include('fontawesome-5/Regular/Tired')

' renders the element
Tired('Tired', 'Tired', 'an optional tech label')
@enduml
```

