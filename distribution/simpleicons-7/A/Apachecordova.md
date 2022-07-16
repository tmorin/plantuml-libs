# Apachecordova


```text
simpleicons-7/A/Apachecordova
```

```text
include('simpleicons-7/A/Apachecordova')
```



| Illustration | Apachecordova |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Apachecordova.png) | ![illustration for Apachecordova](../../simpleicons-7/A/Apachecordova.Local.png) |




## Apachecordova

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Apachecordova
include('simpleicons-7/A/Apachecordova')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Apachecordova
include('simpleicons-7/A/Apachecordova')

' renders the element
Apachecordova('Apachecordova', 'Apachecordova', 'an optional tech label')
@enduml
```

