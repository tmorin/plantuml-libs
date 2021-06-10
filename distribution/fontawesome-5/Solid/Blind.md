# Blind


```text
fontawesome-5/Solid/Blind
```

```text
include('fontawesome-5/Solid/Blind')
```



| Illustration | Blind |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Blind.png) | ![illustration for Blind](../../fontawesome-5/Solid/Blind.Local.png) |




## Blind

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Blind
include('fontawesome-5/Solid/Blind')

' renders the element
Blind('Blind', 'Blind', 'an optional tech label')
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

' loads the Item which embeds the element Blind
include('fontawesome-5/Solid/Blind')

' renders the element
Blind('Blind', 'Blind', 'an optional tech label')
@enduml
```

