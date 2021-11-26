# ExclamationCircle


```text
fontawesome-5/Solid/ExclamationCircle
```

```text
include('fontawesome-5/Solid/ExclamationCircle')
```



| Illustration | ExclamationCircle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ExclamationCircle.png) | ![illustration for ExclamationCircle](../../fontawesome-5/Solid/ExclamationCircle.Local.png) |




## ExclamationCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ExclamationCircle
include('fontawesome-5/Solid/ExclamationCircle')

' renders the element
ExclamationCircle('ExclamationCircle', 'Exclamation Circle', 'an optional tech label')
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

' loads the Item which embeds the element ExclamationCircle
include('fontawesome-5/Solid/ExclamationCircle')

' renders the element
ExclamationCircle('ExclamationCircle', 'Exclamation Circle', 'an optional tech label')
@enduml
```

