# Googleads


```text
simpleicons-5/G/Googleads
```

```text
include('simpleicons-5/G/Googleads')
```



| Illustration | Googleads |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Googleads.png) | ![illustration for Googleads](../../simpleicons-5/G/Googleads.Local.png) |




## Googleads

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Googleads
include('simpleicons-5/G/Googleads')

' renders the element
Googleads('Googleads', 'Googleads', 'an optional tech label')
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

' loads the Item which embeds the element Googleads
include('simpleicons-5/G/Googleads')

' renders the element
Googleads('Googleads', 'Googleads', 'an optional tech label')
@enduml
```

