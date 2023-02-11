# Marketo


```text
simpleicons-8/M/Marketo
```

```text
include('simpleicons-8/M/Marketo')
```



| Illustration | Marketo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/M/Marketo.png) | ![illustration for Marketo](../../simpleicons-8/M/Marketo.Local.png) |




## Marketo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Marketo
include('simpleicons-8/M/Marketo')

' renders the element
Marketo('Marketo', 'Marketo', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Marketo
include('simpleicons-8/M/Marketo')

' renders the element
Marketo('Marketo', 'Marketo', 'an optional tech label', 'an optional description')
@enduml
```

