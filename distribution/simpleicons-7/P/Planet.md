# Planet


```text
simpleicons-7/P/Planet
```

```text
include('simpleicons-7/P/Planet')
```



| Illustration | Planet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Planet.png) | ![illustration for Planet](../../simpleicons-7/P/Planet.Local.png) |




## Planet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Planet
include('simpleicons-7/P/Planet')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Planet
include('simpleicons-7/P/Planet')

' renders the element
Planet('Planet', 'Planet', 'an optional tech label')
@enduml
```

