# Tags


```text
fontawesome-5/Solid/Tags
```

```text
include('fontawesome-5/Solid/Tags')
```



| Illustration | Tags |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Tags.png) | ![illustration for Tags](../../fontawesome-5/Solid/Tags.Local.png) |




## Tags

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Tags
include('fontawesome-5/Solid/Tags')

' renders the element
Tags('Tags', 'Tags', 'an optional tech label')
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

' loads the Item which embeds the element Tags
include('fontawesome-5/Solid/Tags')

' renders the element
Tags('Tags', 'Tags', 'an optional tech label')
@enduml
```

