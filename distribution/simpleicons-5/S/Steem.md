# Steem


```text
simpleicons-5/S/Steem
```

```text
include('simpleicons-5/S/Steem')
```



| Illustration | Steem |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Steem.png) | ![illustration for Steem](../../simpleicons-5/S/Steem.Local.png) |




## Steem

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Steem
include('simpleicons-5/S/Steem')

' renders the element
Steem('Steem', 'Steem', 'an optional tech label')
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

' loads the Item which embeds the element Steem
include('simpleicons-5/S/Steem')

' renders the element
Steem('Steem', 'Steem', 'an optional tech label')
@enduml
```

