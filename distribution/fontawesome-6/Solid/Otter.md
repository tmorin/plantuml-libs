# Otter


```text
fontawesome-6/Solid/Otter
```

```text
include('fontawesome-6/Solid/Otter')
```



| Illustration | Otter |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Otter.png) | ![illustration for Otter](../../fontawesome-6/Solid/Otter.Local.png) |




## Otter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Otter
include('fontawesome-6/Solid/Otter')

' renders the element
Otter('Otter', 'Otter', 'an optional tech label')
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

' loads the Item which embeds the element Otter
include('fontawesome-6/Solid/Otter')

' renders the element
Otter('Otter', 'Otter', 'an optional tech label')
@enduml
```

