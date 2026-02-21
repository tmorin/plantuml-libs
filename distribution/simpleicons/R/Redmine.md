# Redmine


```text
simpleicons/R/Redmine
```

```text
include('simpleicons/R/Redmine')
```



| Illustration | Redmine |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Redmine.png) | ![illustration for Redmine](../../simpleicons/R/Redmine.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RedmineXs>`
- `<$RedmineSm>`
- `<$RedmineMd>`
- `<$RedmineLg>`





## Redmine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Redmine
include('simpleicons/R/Redmine')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Redmine
include('simpleicons/R/Redmine')

' renders the element
Redmine('Redmine', 'Redmine', 'an optional tech label', 'an optional description')
@enduml
```

