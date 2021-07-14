# Apachecordova


```text
simpleicons-5/A/Apachecordova
```

```text
include('simpleicons-5/A/Apachecordova')
```



| Illustration | Apachecordova |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Apachecordova.png) | ![illustration for Apachecordova](../../simpleicons-5/A/Apachecordova.Local.png) |




## Apachecordova

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Apachecordova
include('simpleicons-5/A/Apachecordova')

' renders the element
Apachecordova('Apachecordova', 'Apachecordova', 'an optional tech label')
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

' loads the Item which embeds the element Apachecordova
include('simpleicons-5/A/Apachecordova')

' renders the element
Apachecordova('Apachecordova', 'Apachecordova', 'an optional tech label')
@enduml
```

