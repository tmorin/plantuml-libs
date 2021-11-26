# Newspaper


```text
fontawesome-5/Solid/Newspaper
```

```text
include('fontawesome-5/Solid/Newspaper')
```



| Illustration | Newspaper |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Newspaper.png) | ![illustration for Newspaper](../../fontawesome-5/Solid/Newspaper.Local.png) |




## Newspaper

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Newspaper
include('fontawesome-5/Solid/Newspaper')

' renders the element
Newspaper('Newspaper', 'Newspaper', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Newspaper
include('fontawesome-5/Solid/Newspaper')

' renders the element
Newspaper('Newspaper', 'Newspaper', 'an optional tech label')
@enduml
```

