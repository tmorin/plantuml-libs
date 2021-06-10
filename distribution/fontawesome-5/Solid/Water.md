# Water


```text
fontawesome-5/Solid/Water
```

```text
include('fontawesome-5/Solid/Water')
```



| Illustration | Water |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Water.png) | ![illustration for Water](../../fontawesome-5/Solid/Water.Local.png) |




## Water

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Water
include('fontawesome-5/Solid/Water')

' renders the element
Water('Water', 'Water', 'an optional tech label')
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

' loads the Item which embeds the element Water
include('fontawesome-5/Solid/Water')

' renders the element
Water('Water', 'Water', 'an optional tech label')
@enduml
```

