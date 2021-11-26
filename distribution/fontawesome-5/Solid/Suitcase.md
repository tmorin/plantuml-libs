# Suitcase


```text
fontawesome-5/Solid/Suitcase
```

```text
include('fontawesome-5/Solid/Suitcase')
```



| Illustration | Suitcase |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Suitcase.png) | ![illustration for Suitcase](../../fontawesome-5/Solid/Suitcase.Local.png) |




## Suitcase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Suitcase
include('fontawesome-5/Solid/Suitcase')

' renders the element
Suitcase('Suitcase', 'Suitcase', 'an optional tech label')
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

' loads the Item which embeds the element Suitcase
include('fontawesome-5/Solid/Suitcase')

' renders the element
Suitcase('Suitcase', 'Suitcase', 'an optional tech label')
@enduml
```

