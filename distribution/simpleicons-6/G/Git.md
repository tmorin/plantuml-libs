# Git


```text
simpleicons-6/G/Git
```

```text
include('simpleicons-6/G/Git')
```



| Illustration | Git |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Git.png) | ![illustration for Git](../../simpleicons-6/G/Git.Local.png) |




## Git

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Git
include('simpleicons-6/G/Git')

' renders the element
Git('Git', 'Git', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Git
include('simpleicons-6/G/Git')

' renders the element
Git('Git', 'Git', 'an optional tech label')
@enduml
```

