# Directions


```text
fontawesome-5/Solid/Directions
```

```text
include('fontawesome-5/Solid/Directions')
```



| Illustration | Directions |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Directions.png) | ![illustration for Directions](../../fontawesome-5/Solid/Directions.Local.png) |




## Directions

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Directions
include('fontawesome-5/Solid/Directions')

' renders the element
Directions('Directions', 'Directions', 'an optional tech label')
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

' loads the Item which embeds the element Directions
include('fontawesome-5/Solid/Directions')

' renders the element
Directions('Directions', 'Directions', 'an optional tech label')
@enduml
```

