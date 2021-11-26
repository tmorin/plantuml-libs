# Hackerrank


```text
simpleicons-5/H/Hackerrank
```

```text
include('simpleicons-5/H/Hackerrank')
```



| Illustration | Hackerrank |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/Hackerrank.png) | ![illustration for Hackerrank](../../simpleicons-5/H/Hackerrank.Local.png) |




## Hackerrank

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Hackerrank
include('simpleicons-5/H/Hackerrank')

' renders the element
Hackerrank('Hackerrank', 'Hackerrank', 'an optional tech label')
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

' loads the Item which embeds the element Hackerrank
include('simpleicons-5/H/Hackerrank')

' renders the element
Hackerrank('Hackerrank', 'Hackerrank', 'an optional tech label')
@enduml
```

