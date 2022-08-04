# Bahai


```text
fontawesome-6/Solid/Bahai
```

```text
include('fontawesome-6/Solid/Bahai')
```



| Illustration | Bahai |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Bahai.png) | ![illustration for Bahai](../../fontawesome-6/Solid/Bahai.Local.png) |




## Bahai

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Bahai
include('fontawesome-6/Solid/Bahai')

' renders the element
Bahai('Bahai', 'Bahai', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bahai
include('fontawesome-6/Solid/Bahai')

' renders the element
Bahai('Bahai', 'Bahai', 'an optional tech label', 'an optional description')
@enduml
```

