# Bem


```text
simpleicons-8/B/Bem
```

```text
include('simpleicons-8/B/Bem')
```



| Illustration | Bem |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/B/Bem.png) | ![illustration for Bem](../../simpleicons-8/B/Bem.Local.png) |




## Bem

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Bem
include('simpleicons-8/B/Bem')

' renders the element
Bem('Bem', 'Bem', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bem
include('simpleicons-8/B/Bem')

' renders the element
Bem('Bem', 'Bem', 'an optional tech label', 'an optional description')
@enduml
```
