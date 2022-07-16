# Insomnia


```text
simpleicons-7/I/Insomnia
```

```text
include('simpleicons-7/I/Insomnia')
```



| Illustration | Insomnia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/I/Insomnia.png) | ![illustration for Insomnia](../../simpleicons-7/I/Insomnia.Local.png) |




## Insomnia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Insomnia
include('simpleicons-7/I/Insomnia')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Insomnia
include('simpleicons-7/I/Insomnia')

' renders the element
Insomnia('Insomnia', 'Insomnia', 'an optional tech label')
@enduml
```

