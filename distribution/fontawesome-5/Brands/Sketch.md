# Sketch


```text
fontawesome-5/Brands/Sketch
```

```text
include('fontawesome-5/Brands/Sketch')
```



| Illustration | Sketch |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Sketch.png) | ![illustration for Sketch](../../fontawesome-5/Brands/Sketch.Local.png) |




## Sketch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Sketch
include('fontawesome-5/Brands/Sketch')

' renders the element
Sketch('Sketch', 'Sketch', 'an optional tech label')
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

' loads the Item which embeds the element Sketch
include('fontawesome-5/Brands/Sketch')

' renders the element
Sketch('Sketch', 'Sketch', 'an optional tech label')
@enduml
```

