# Bitbucket


```text
fontawesome-6/Brands/Bitbucket
```

```text
include('fontawesome-6/Brands/Bitbucket')
```



| Illustration | Bitbucket |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Bitbucket.png) | ![illustration for Bitbucket](../../fontawesome-6/Brands/Bitbucket.Local.png) |




## Bitbucket

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Bitbucket
include('fontawesome-6/Brands/Bitbucket')

' renders the element
Bitbucket('Bitbucket', 'Bitbucket', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bitbucket
include('fontawesome-6/Brands/Bitbucket')

' renders the element
Bitbucket('Bitbucket', 'Bitbucket', 'an optional tech label', 'an optional description')
@enduml
```

