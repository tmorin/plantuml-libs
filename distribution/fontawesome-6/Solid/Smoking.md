# Smoking


```text
fontawesome-6/Solid/Smoking
```

```text
include('fontawesome-6/Solid/Smoking')
```



| Illustration | Smoking |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Smoking.png) | ![illustration for Smoking](../../fontawesome-6/Solid/Smoking.Local.png) |




## Smoking

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Smoking
include('fontawesome-6/Solid/Smoking')

' renders the element
Smoking('Smoking', 'Smoking', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Smoking
include('fontawesome-6/Solid/Smoking')

' renders the element
Smoking('Smoking', 'Smoking', 'an optional tech label', 'an optional description')
@enduml
```

