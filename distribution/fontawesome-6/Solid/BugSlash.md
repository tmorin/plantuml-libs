# BugSlash


```text
fontawesome-6/Solid/BugSlash
```

```text
include('fontawesome-6/Solid/BugSlash')
```



| Illustration | BugSlash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BugSlash.png) | ![illustration for BugSlash](../../fontawesome-6/Solid/BugSlash.Local.png) |




## BugSlash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BugSlash
include('fontawesome-6/Solid/BugSlash')

' renders the element
BugSlash('BugSlash', 'Bug Slash', 'an optional tech label')
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

' loads the Item which embeds the element BugSlash
include('fontawesome-6/Solid/BugSlash')

' renders the element
BugSlash('BugSlash', 'Bug Slash', 'an optional tech label')
@enduml
```

