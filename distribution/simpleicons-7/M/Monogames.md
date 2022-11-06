# Monogames


```text
simpleicons-7/M/Monogames
```

```text
include('simpleicons-7/M/Monogames')
```



| Illustration | Monogames |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Monogames.png) | ![illustration for Monogames](../../simpleicons-7/M/Monogames.Local.png) |




## Monogames

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Monogames
include('simpleicons-7/M/Monogames')

' renders the element
Monogames('Monogames', 'Monogames', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Monogames
include('simpleicons-7/M/Monogames')

' renders the element
Monogames('Monogames', 'Monogames', 'an optional tech label', 'an optional description')
@enduml
```

