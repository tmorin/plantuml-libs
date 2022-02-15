# Bem


```text
simpleicons-6/B/Bem
```

```text
include('simpleicons-6/B/Bem')
```



| Illustration | Bem |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/B/Bem.png) | ![illustration for Bem](../../simpleicons-6/B/Bem.Local.png) |




## Bem

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Bem
include('simpleicons-6/B/Bem')

' renders the element
Bem('Bem', 'Bem', 'an optional tech label')
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

' loads the Item which embeds the element Bem
include('simpleicons-6/B/Bem')

' renders the element
Bem('Bem', 'Bem', 'an optional tech label')
@enduml
```

