# Delicious


```text
fontawesome-6/Brands/Delicious
```

```text
include('fontawesome-6/Brands/Delicious')
```



| Illustration | Delicious |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Delicious.png) | ![illustration for Delicious](../../fontawesome-6/Brands/Delicious.Local.png) |




## Delicious

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Delicious
include('fontawesome-6/Brands/Delicious')

' renders the element
Delicious('Delicious', 'Delicious', 'an optional tech label')
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

' loads the Item which embeds the element Delicious
include('fontawesome-6/Brands/Delicious')

' renders the element
Delicious('Delicious', 'Delicious', 'an optional tech label')
@enduml
```

