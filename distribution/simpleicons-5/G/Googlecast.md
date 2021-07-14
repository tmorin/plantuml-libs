# Googlecast


```text
simpleicons-5/G/Googlecast
```

```text
include('simpleicons-5/G/Googlecast')
```



| Illustration | Googlecast |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Googlecast.png) | ![illustration for Googlecast](../../simpleicons-5/G/Googlecast.Local.png) |




## Googlecast

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Googlecast
include('simpleicons-5/G/Googlecast')

' renders the element
Googlecast('Googlecast', 'Googlecast', 'an optional tech label')
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

' loads the Item which embeds the element Googlecast
include('simpleicons-5/G/Googlecast')

' renders the element
Googlecast('Googlecast', 'Googlecast', 'an optional tech label')
@enduml
```

