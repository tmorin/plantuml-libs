# Phabricator


```text
simpleicons/P/Phabricator
```

```text
include('simpleicons/P/Phabricator')
```



| Illustration | Phabricator |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Phabricator.png) | ![illustration for Phabricator](../../simpleicons/P/Phabricator.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhabricatorXs>`
- `<$PhabricatorSm>`
- `<$PhabricatorMd>`
- `<$PhabricatorLg>`





## Phabricator

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Phabricator
include('simpleicons/P/Phabricator')

' renders the element
Phabricator('Phabricator', 'Phabricator', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Phabricator
include('simpleicons/P/Phabricator')

' renders the element
Phabricator('Phabricator', 'Phabricator', 'an optional tech label', 'an optional description')
@enduml
```

