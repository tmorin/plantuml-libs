# Buefy


```text
simpleicons-5/B/Buefy
```

```text
include('simpleicons-5/B/Buefy')
```



| Illustration | Buefy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Buefy.png) | ![illustration for Buefy](../../simpleicons-5/B/Buefy.Local.png) |




## Buefy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Buefy
include('simpleicons-5/B/Buefy')

' renders the element
Buefy('Buefy', 'Buefy', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Buefy
include('simpleicons-5/B/Buefy')

' renders the element
Buefy('Buefy', 'Buefy', 'an optional tech label')
@enduml
```

