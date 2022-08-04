# GithubAlt


```text
fontawesome-6/Brands/GithubAlt
```

```text
include('fontawesome-6/Brands/GithubAlt')
```



| Illustration | GithubAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/GithubAlt.png) | ![illustration for GithubAlt](../../fontawesome-6/Brands/GithubAlt.Local.png) |




## GithubAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element GithubAlt
include('fontawesome-6/Brands/GithubAlt')

' renders the element
GithubAlt('GithubAlt', 'Github Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GithubAlt
include('fontawesome-6/Brands/GithubAlt')

' renders the element
GithubAlt('GithubAlt', 'Github Alt', 'an optional tech label', 'an optional description')
@enduml
```

