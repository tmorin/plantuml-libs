# Plug


```text
fontawesome-6/Solid/Plug
```

```text
include('fontawesome-6/Solid/Plug')
```



| Illustration | Plug |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Plug.png) | ![illustration for Plug](../../fontawesome-6/Solid/Plug.Local.png) |




## Plug

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Plug
include('fontawesome-6/Solid/Plug')

' renders the element
Plug('Plug', 'Plug', 'an optional tech label')
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

' loads the Item which embeds the element Plug
include('fontawesome-6/Solid/Plug')

' renders the element
Plug('Plug', 'Plug', 'an optional tech label')
@enduml
```

