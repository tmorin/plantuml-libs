# DotCircle


```text
fontawesome-5/Regular/DotCircle
```

```text
include('fontawesome-5/Regular/DotCircle')
```



| Illustration | DotCircle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/DotCircle.png) | ![illustration for DotCircle](../../fontawesome-5/Regular/DotCircle.Local.png) |




## DotCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element DotCircle
include('fontawesome-5/Regular/DotCircle')

' renders the element
DotCircle('DotCircle', 'Dot Circle', 'an optional tech label')
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

' loads the Item which embeds the element DotCircle
include('fontawesome-5/Regular/DotCircle')

' renders the element
DotCircle('DotCircle', 'Dot Circle', 'an optional tech label')
@enduml
```

