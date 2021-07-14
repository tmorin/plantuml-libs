# Planet


```text
simpleicons-5/P/Planet
```

```text
include('simpleicons-5/P/Planet')
```



| Illustration | Planet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Planet.png) | ![illustration for Planet](../../simpleicons-5/P/Planet.Local.png) |




## Planet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Planet
include('simpleicons-5/P/Planet')

' renders the element
Planet('Planet', 'Planet', 'an optional tech label')
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

' loads the Item which embeds the element Planet
include('simpleicons-5/P/Planet')

' renders the element
Planet('Planet', 'Planet', 'an optional tech label')
@enduml
```

