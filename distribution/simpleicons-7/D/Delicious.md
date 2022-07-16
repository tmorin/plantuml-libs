# Delicious


```text
simpleicons-7/D/Delicious
```

```text
include('simpleicons-7/D/Delicious')
```



| Illustration | Delicious |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/D/Delicious.png) | ![illustration for Delicious](../../simpleicons-7/D/Delicious.Local.png) |




## Delicious

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Delicious
include('simpleicons-7/D/Delicious')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Delicious
include('simpleicons-7/D/Delicious')

' renders the element
Delicious('Delicious', 'Delicious', 'an optional tech label')
@enduml
```

