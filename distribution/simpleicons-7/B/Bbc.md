# Bbc


```text
simpleicons-7/B/Bbc
```

```text
include('simpleicons-7/B/Bbc')
```



| Illustration | Bbc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/B/Bbc.png) | ![illustration for Bbc](../../simpleicons-7/B/Bbc.Local.png) |




## Bbc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Bbc
include('simpleicons-7/B/Bbc')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Bbc
include('simpleicons-7/B/Bbc')

' renders the element
Bbc('Bbc', 'Bbc', 'an optional tech label')
@enduml
```

