# Letterboxd


```text
simpleicons-7/L/Letterboxd
```

```text
include('simpleicons-7/L/Letterboxd')
```



| Illustration | Letterboxd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/L/Letterboxd.png) | ![illustration for Letterboxd](../../simpleicons-7/L/Letterboxd.Local.png) |




## Letterboxd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Letterboxd
include('simpleicons-7/L/Letterboxd')

' renders the element
Letterboxd('Letterboxd', 'Letterboxd', 'an optional tech label')
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

' loads the Item which embeds the element Letterboxd
include('simpleicons-7/L/Letterboxd')

' renders the element
Letterboxd('Letterboxd', 'Letterboxd', 'an optional tech label')
@enduml
```
