# Insomnia


```text
simpleicons-6/I/Insomnia
```

```text
include('simpleicons-6/I/Insomnia')
```



| Illustration | Insomnia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/I/Insomnia.png) | ![illustration for Insomnia](../../simpleicons-6/I/Insomnia.Local.png) |




## Insomnia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Insomnia
include('simpleicons-6/I/Insomnia')

' renders the element
Insomnia('Insomnia', 'Insomnia', 'an optional tech label')
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

' loads the Item which embeds the element Insomnia
include('simpleicons-6/I/Insomnia')

' renders the element
Insomnia('Insomnia', 'Insomnia', 'an optional tech label')
@enduml
```

