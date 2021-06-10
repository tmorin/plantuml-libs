# Otter


```text
fontawesome-5/Solid/Otter
```

```text
include('fontawesome-5/Solid/Otter')
```



| Illustration | Otter |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Otter.png) | ![illustration for Otter](../../fontawesome-5/Solid/Otter.Local.png) |




## Otter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Otter
include('fontawesome-5/Solid/Otter')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Otter
include('fontawesome-5/Solid/Otter')

' renders the element
Otter('Otter', 'Otter', 'an optional tech label')
@enduml
```

