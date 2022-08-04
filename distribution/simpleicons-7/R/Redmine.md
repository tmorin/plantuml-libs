# Redmine


```text
simpleicons-7/R/Redmine
```

```text
include('simpleicons-7/R/Redmine')
```



| Illustration | Redmine |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/R/Redmine.png) | ![illustration for Redmine](../../simpleicons-7/R/Redmine.Local.png) |




## Redmine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Redmine
include('simpleicons-7/R/Redmine')

' renders the element
Redmine('Redmine', 'Redmine', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Redmine
include('simpleicons-7/R/Redmine')

' renders the element
Redmine('Redmine', 'Redmine', 'an optional tech label', 'an optional description')
@enduml
```

