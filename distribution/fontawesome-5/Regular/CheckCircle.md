# CheckCircle


```text
fontawesome-5/Regular/CheckCircle
```

```text
include('fontawesome-5/Regular/CheckCircle')
```



| Illustration | CheckCircle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/CheckCircle.png) | ![illustration for CheckCircle](../../fontawesome-5/Regular/CheckCircle.Local.png) |




## CheckCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CheckCircle
include('fontawesome-5/Regular/CheckCircle')

' renders the element
CheckCircle('CheckCircle', 'Check Circle', 'an optional tech label')
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

' loads the Item which embeds the element CheckCircle
include('fontawesome-5/Regular/CheckCircle')

' renders the element
CheckCircle('CheckCircle', 'Check Circle', 'an optional tech label')
@enduml
```

