# Phabricator


```text
fontawesome-6/Brands/Phabricator
```

```text
include('fontawesome-6/Brands/Phabricator')
```



| Illustration | Phabricator |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Phabricator.png) | ![illustration for Phabricator](../../fontawesome-6/Brands/Phabricator.Local.png) |




## Phabricator

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Phabricator
include('fontawesome-6/Brands/Phabricator')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Phabricator
include('fontawesome-6/Brands/Phabricator')

' renders the element
Phabricator('Phabricator', 'Phabricator', 'an optional tech label')
@enduml
```

