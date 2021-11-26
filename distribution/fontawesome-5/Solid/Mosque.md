# Mosque


```text
fontawesome-5/Solid/Mosque
```

```text
include('fontawesome-5/Solid/Mosque')
```



| Illustration | Mosque |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Mosque.png) | ![illustration for Mosque](../../fontawesome-5/Solid/Mosque.Local.png) |




## Mosque

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Mosque
include('fontawesome-5/Solid/Mosque')

' renders the element
Mosque('Mosque', 'Mosque', 'an optional tech label')
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

' loads the Item which embeds the element Mosque
include('fontawesome-5/Solid/Mosque')

' renders the element
Mosque('Mosque', 'Mosque', 'an optional tech label')
@enduml
```

