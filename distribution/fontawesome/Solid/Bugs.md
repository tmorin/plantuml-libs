# Bugs


```text
fontawesome/Solid/Bugs
```

```text
include('fontawesome/Solid/Bugs')
```



| Illustration | Bugs |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Bugs.png) | ![illustration for Bugs](../../fontawesome/Solid/Bugs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BugsXs>`
- `<$BugsSm>`
- `<$BugsMd>`
- `<$BugsLg>`





## Bugs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Bugs
include('fontawesome/Solid/Bugs')

' renders the element
Bugs('Bugs', 'Bugs', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Bugs
include('fontawesome/Solid/Bugs')

' renders the element
Bugs('Bugs', 'Bugs', 'an optional tech label', 'an optional description')
@enduml
```

