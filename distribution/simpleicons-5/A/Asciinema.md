# Asciinema


```text
simpleicons-5/A/Asciinema
```

```text
include('simpleicons-5/A/Asciinema')
```



| Illustration | Asciinema |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Asciinema.png) | ![illustration for Asciinema](../../simpleicons-5/A/Asciinema.Local.png) |




## Asciinema

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Asciinema
include('simpleicons-5/A/Asciinema')

' renders the element
Asciinema('Asciinema', 'Asciinema', 'an optional tech label')
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

' loads the Item which embeds the element Asciinema
include('simpleicons-5/A/Asciinema')

' renders the element
Asciinema('Asciinema', 'Asciinema', 'an optional tech label')
@enduml
```

