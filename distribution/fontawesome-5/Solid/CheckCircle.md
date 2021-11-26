# CheckCircle


```text
fontawesome-5/Solid/CheckCircle
```

```text
include('fontawesome-5/Solid/CheckCircle')
```



| Illustration | CheckCircle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/CheckCircle.png) | ![illustration for CheckCircle](../../fontawesome-5/Solid/CheckCircle.Local.png) |




## CheckCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CheckCircle
include('fontawesome-5/Solid/CheckCircle')

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
include('fontawesome-5/Solid/CheckCircle')

' renders the element
CheckCircle('CheckCircle', 'Check Circle', 'an optional tech label')
@enduml
```

