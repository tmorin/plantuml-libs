# Divide


```text
fontawesome-5/Solid/Divide
```

```text
include('fontawesome-5/Solid/Divide')
```



| Illustration | Divide |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Divide.png) | ![illustration for Divide](../../fontawesome-5/Solid/Divide.Local.png) |




## Divide

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Divide
include('fontawesome-5/Solid/Divide')

' renders the element
Divide('Divide', 'Divide', 'an optional tech label')
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

' loads the Item which embeds the element Divide
include('fontawesome-5/Solid/Divide')

' renders the element
Divide('Divide', 'Divide', 'an optional tech label')
@enduml
```

