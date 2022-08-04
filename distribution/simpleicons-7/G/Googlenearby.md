# Googlenearby


```text
simpleicons-7/G/Googlenearby
```

```text
include('simpleicons-7/G/Googlenearby')
```



| Illustration | Googlenearby |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Googlenearby.png) | ![illustration for Googlenearby](../../simpleicons-7/G/Googlenearby.Local.png) |




## Googlenearby

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Googlenearby
include('simpleicons-7/G/Googlenearby')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Googlenearby
include('simpleicons-7/G/Googlenearby')

' renders the element
Googlenearby('Googlenearby', 'Googlenearby', 'an optional tech label', 'an optional description')
@enduml
```

