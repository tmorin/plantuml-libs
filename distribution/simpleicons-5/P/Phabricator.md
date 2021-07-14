# Phabricator


```text
simpleicons-5/P/Phabricator
```

```text
include('simpleicons-5/P/Phabricator')
```



| Illustration | Phabricator |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Phabricator.png) | ![illustration for Phabricator](../../simpleicons-5/P/Phabricator.Local.png) |




## Phabricator

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Phabricator
include('simpleicons-5/P/Phabricator')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Phabricator
include('simpleicons-5/P/Phabricator')

' renders the element
Phabricator('Phabricator', 'Phabricator', 'an optional tech label')
@enduml
```

