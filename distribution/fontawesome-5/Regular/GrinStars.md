# GrinStars


```text
fontawesome-5/Regular/GrinStars
```

```text
include('fontawesome-5/Regular/GrinStars')
```



| Illustration | GrinStars |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/GrinStars.png) | ![illustration for GrinStars](../../fontawesome-5/Regular/GrinStars.Local.png) |




## GrinStars

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GrinStars
include('fontawesome-5/Regular/GrinStars')

' renders the element
GrinStars('GrinStars', 'Grin Stars', 'an optional tech label')
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

' loads the Item which embeds the element GrinStars
include('fontawesome-5/Regular/GrinStars')

' renders the element
GrinStars('GrinStars', 'Grin Stars', 'an optional tech label')
@enduml
```

