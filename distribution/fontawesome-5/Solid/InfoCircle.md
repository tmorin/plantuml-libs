# InfoCircle


```text
fontawesome-5/Solid/InfoCircle
```

```text
include('fontawesome-5/Solid/InfoCircle')
```



| Illustration | InfoCircle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/InfoCircle.png) | ![illustration for InfoCircle](../../fontawesome-5/Solid/InfoCircle.Local.png) |




## InfoCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element InfoCircle
include('fontawesome-5/Solid/InfoCircle')

' renders the element
InfoCircle('InfoCircle', 'Info Circle', 'an optional tech label')
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

' loads the Item which embeds the element InfoCircle
include('fontawesome-5/Solid/InfoCircle')

' renders the element
InfoCircle('InfoCircle', 'Info Circle', 'an optional tech label')
@enduml
```

