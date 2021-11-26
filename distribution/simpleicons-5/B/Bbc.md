# Bbc


```text
simpleicons-5/B/Bbc
```

```text
include('simpleicons-5/B/Bbc')
```



| Illustration | Bbc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Bbc.png) | ![illustration for Bbc](../../simpleicons-5/B/Bbc.Local.png) |




## Bbc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Bbc
include('simpleicons-5/B/Bbc')

' renders the element
Bbc('Bbc', 'Bbc', 'an optional tech label')
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

' loads the Item which embeds the element Bbc
include('simpleicons-5/B/Bbc')

' renders the element
Bbc('Bbc', 'Bbc', 'an optional tech label')
@enduml
```

