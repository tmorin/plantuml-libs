# Git


```text
simpleicons-5/G/Git
```

```text
include('simpleicons-5/G/Git')
```



| Illustration | Git |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Git.png) | ![illustration for Git](../../simpleicons-5/G/Git.Local.png) |




## Git

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Git
include('simpleicons-5/G/Git')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Git
include('simpleicons-5/G/Git')

' renders the element
Git('Git', 'Git', 'an optional tech label')
@enduml
```

