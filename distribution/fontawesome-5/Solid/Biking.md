# Biking


```text
fontawesome-5/Solid/Biking
```

```text
include('fontawesome-5/Solid/Biking')
```



| Illustration | Biking |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Biking.png) | ![illustration for Biking](../../fontawesome-5/Solid/Biking.Local.png) |




## Biking

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Biking
include('fontawesome-5/Solid/Biking')

' renders the element
Biking('Biking', 'Biking', 'an optional tech label')
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

' loads the Item which embeds the element Biking
include('fontawesome-5/Solid/Biking')

' renders the element
Biking('Biking', 'Biking', 'an optional tech label')
@enduml
```

