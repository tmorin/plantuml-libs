# Kaaba


```text
fontawesome-6/Solid/Kaaba
```

```text
include('fontawesome-6/Solid/Kaaba')
```



| Illustration | Kaaba |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Kaaba.png) | ![illustration for Kaaba](../../fontawesome-6/Solid/Kaaba.Local.png) |




## Kaaba

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Kaaba
include('fontawesome-6/Solid/Kaaba')

' renders the element
Kaaba('Kaaba', 'Kaaba', 'an optional tech label')
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

' loads the Item which embeds the element Kaaba
include('fontawesome-6/Solid/Kaaba')

' renders the element
Kaaba('Kaaba', 'Kaaba', 'an optional tech label')
@enduml
```

