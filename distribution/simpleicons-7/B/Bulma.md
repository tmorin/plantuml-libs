# Bulma


```text
simpleicons-7/B/Bulma
```

```text
include('simpleicons-7/B/Bulma')
```



| Illustration | Bulma |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/B/Bulma.png) | ![illustration for Bulma](../../simpleicons-7/B/Bulma.Local.png) |




## Bulma

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Bulma
include('simpleicons-7/B/Bulma')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Bulma
include('simpleicons-7/B/Bulma')

' renders the element
Bulma('Bulma', 'Bulma', 'an optional tech label')
@enduml
```

