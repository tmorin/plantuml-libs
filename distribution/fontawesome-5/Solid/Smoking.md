# Smoking


```text
fontawesome-5/Solid/Smoking
```

```text
include('fontawesome-5/Solid/Smoking')
```



| Illustration | Smoking |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Smoking.png) | ![illustration for Smoking](../../fontawesome-5/Solid/Smoking.Local.png) |




## Smoking

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Smoking
include('fontawesome-5/Solid/Smoking')

' renders the element
Smoking('Smoking', 'Smoking', 'an optional tech label')
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

' loads the Item which embeds the element Smoking
include('fontawesome-5/Solid/Smoking')

' renders the element
Smoking('Smoking', 'Smoking', 'an optional tech label')
@enduml
```

