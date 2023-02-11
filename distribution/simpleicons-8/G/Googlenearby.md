# Googlenearby


```text
simpleicons-8/G/Googlenearby
```

```text
include('simpleicons-8/G/Googlenearby')
```



| Illustration | Googlenearby |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Googlenearby.png) | ![illustration for Googlenearby](../../simpleicons-8/G/Googlenearby.Local.png) |




## Googlenearby

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Googlenearby
include('simpleicons-8/G/Googlenearby')

' renders the element
Googlenearby('Googlenearby', 'Googlenearby', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googlenearby
include('simpleicons-8/G/Googlenearby')

' renders the element
Googlenearby('Googlenearby', 'Googlenearby', 'an optional tech label', 'an optional description')
@enduml
```

