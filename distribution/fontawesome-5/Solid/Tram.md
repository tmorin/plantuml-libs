# Tram


```text
fontawesome-5/Solid/Tram
```

```text
include('fontawesome-5/Solid/Tram')
```



| Illustration | Tram |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Tram.png) | ![illustration for Tram](../../fontawesome-5/Solid/Tram.Local.png) |




## Tram

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Tram
include('fontawesome-5/Solid/Tram')

' renders the element
Tram('Tram', 'Tram', 'an optional tech label')
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

' loads the Item which embeds the element Tram
include('fontawesome-5/Solid/Tram')

' renders the element
Tram('Tram', 'Tram', 'an optional tech label')
@enduml
```

