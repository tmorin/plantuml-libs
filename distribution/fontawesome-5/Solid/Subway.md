# Subway


```text
fontawesome-5/Solid/Subway
```

```text
include('fontawesome-5/Solid/Subway')
```



| Illustration | Subway |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Subway.png) | ![illustration for Subway](../../fontawesome-5/Solid/Subway.Local.png) |




## Subway

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Subway
include('fontawesome-5/Solid/Subway')

' renders the element
Subway('Subway', 'Subway', 'an optional tech label')
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

' loads the Item which embeds the element Subway
include('fontawesome-5/Solid/Subway')

' renders the element
Subway('Subway', 'Subway', 'an optional tech label')
@enduml
```

