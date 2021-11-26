# GrinHearts


```text
fontawesome-5/Regular/GrinHearts
```

```text
include('fontawesome-5/Regular/GrinHearts')
```



| Illustration | GrinHearts |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/GrinHearts.png) | ![illustration for GrinHearts](../../fontawesome-5/Regular/GrinHearts.Local.png) |




## GrinHearts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GrinHearts
include('fontawesome-5/Regular/GrinHearts')

' renders the element
GrinHearts('GrinHearts', 'Grin Hearts', 'an optional tech label')
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

' loads the Item which embeds the element GrinHearts
include('fontawesome-5/Regular/GrinHearts')

' renders the element
GrinHearts('GrinHearts', 'Grin Hearts', 'an optional tech label')
@enduml
```

