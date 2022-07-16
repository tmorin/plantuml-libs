# Phabricator


```text
simpleicons-7/P/Phabricator
```

```text
include('simpleicons-7/P/Phabricator')
```



| Illustration | Phabricator |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Phabricator.png) | ![illustration for Phabricator](../../simpleicons-7/P/Phabricator.Local.png) |




## Phabricator

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Phabricator
include('simpleicons-7/P/Phabricator')

' renders the element
Phabricator('Phabricator', 'Phabricator', 'an optional tech label')
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

' loads the Item which embeds the element Phabricator
include('simpleicons-7/P/Phabricator')

' renders the element
Phabricator('Phabricator', 'Phabricator', 'an optional tech label')
@enduml
```

