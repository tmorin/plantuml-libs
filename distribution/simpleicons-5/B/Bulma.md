# Bulma


```text
simpleicons-5/B/Bulma
```

```text
include('simpleicons-5/B/Bulma')
```



| Illustration | Bulma |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Bulma.png) | ![illustration for Bulma](../../simpleicons-5/B/Bulma.Local.png) |




## Bulma

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Bulma
include('simpleicons-5/B/Bulma')

' renders the element
Bulma('Bulma', 'Bulma', 'an optional tech label')
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

' loads the Item which embeds the element Bulma
include('simpleicons-5/B/Bulma')

' renders the element
Bulma('Bulma', 'Bulma', 'an optional tech label')
@enduml
```

