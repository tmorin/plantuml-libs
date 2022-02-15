# Git


```text
fontawesome-6/Brands/Git
```

```text
include('fontawesome-6/Brands/Git')
```



| Illustration | Git |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Git.png) | ![illustration for Git](../../fontawesome-6/Brands/Git.Local.png) |




## Git

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Git
include('fontawesome-6/Brands/Git')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Git
include('fontawesome-6/Brands/Git')

' renders the element
Git('Git', 'Git', 'an optional tech label')
@enduml
```

