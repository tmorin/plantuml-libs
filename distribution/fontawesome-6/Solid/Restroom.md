# Restroom


```text
fontawesome-6/Solid/Restroom
```

```text
include('fontawesome-6/Solid/Restroom')
```



| Illustration | Restroom |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Restroom.png) | ![illustration for Restroom](../../fontawesome-6/Solid/Restroom.Local.png) |




## Restroom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Restroom
include('fontawesome-6/Solid/Restroom')

' renders the element
Restroom('Restroom', 'Restroom', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Restroom
include('fontawesome-6/Solid/Restroom')

' renders the element
Restroom('Restroom', 'Restroom', 'an optional tech label', 'an optional description')
@enduml
```

