# Pastafarianism


```text
fontawesome-5/Solid/Pastafarianism
```

```text
include('fontawesome-5/Solid/Pastafarianism')
```



| Illustration | Pastafarianism |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Pastafarianism.png) | ![illustration for Pastafarianism](../../fontawesome-5/Solid/Pastafarianism.Local.png) |




## Pastafarianism

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Pastafarianism
include('fontawesome-5/Solid/Pastafarianism')

' renders the element
Pastafarianism('Pastafarianism', 'Pastafarianism', 'an optional tech label')
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

' loads the Item which embeds the element Pastafarianism
include('fontawesome-5/Solid/Pastafarianism')

' renders the element
Pastafarianism('Pastafarianism', 'Pastafarianism', 'an optional tech label')
@enduml
```

