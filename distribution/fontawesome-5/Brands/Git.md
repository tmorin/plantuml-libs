# Git


```text
fontawesome-5/Brands/Git
```

```text
include('fontawesome-5/Brands/Git')
```



| Illustration | Git |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Git.png) | ![illustration for Git](../../fontawesome-5/Brands/Git.Local.png) |




## Git

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Git
include('fontawesome-5/Brands/Git')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Git
include('fontawesome-5/Brands/Git')

' renders the element
Git('Git', 'Git', 'an optional tech label')
@enduml
```

