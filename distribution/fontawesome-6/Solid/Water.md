# Water


```text
fontawesome-6/Solid/Water
```

```text
include('fontawesome-6/Solid/Water')
```



| Illustration | Water |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Water.png) | ![illustration for Water](../../fontawesome-6/Solid/Water.Local.png) |




## Water

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Water
include('fontawesome-6/Solid/Water')

' renders the element
Water('Water', 'Water', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Water
include('fontawesome-6/Solid/Water')

' renders the element
Water('Water', 'Water', 'an optional tech label', 'an optional description')
@enduml
```

