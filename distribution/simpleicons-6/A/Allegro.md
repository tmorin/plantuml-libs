# Allegro


```text
simpleicons-6/A/Allegro
```

```text
include('simpleicons-6/A/Allegro')
```



| Illustration | Allegro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Allegro.png) | ![illustration for Allegro](../../simpleicons-6/A/Allegro.Local.png) |




## Allegro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Allegro
include('simpleicons-6/A/Allegro')

' renders the element
Allegro('Allegro', 'Allegro', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Allegro
include('simpleicons-6/A/Allegro')

' renders the element
Allegro('Allegro', 'Allegro', 'an optional tech label')
@enduml
```

