# Ruler


```text
fontawesome-5/Solid/Ruler
```

```text
include('fontawesome-5/Solid/Ruler')
```



| Illustration | Ruler |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Ruler.png) | ![illustration for Ruler](../../fontawesome-5/Solid/Ruler.Local.png) |




## Ruler

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Ruler
include('fontawesome-5/Solid/Ruler')

' renders the element
Ruler('Ruler', 'Ruler', 'an optional tech label')
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

' loads the Item which embeds the element Ruler
include('fontawesome-5/Solid/Ruler')

' renders the element
Ruler('Ruler', 'Ruler', 'an optional tech label')
@enduml
```

