# StumbleuponCircle


```text
fontawesome-6/Brands/StumbleuponCircle
```

```text
include('fontawesome-6/Brands/StumbleuponCircle')
```



| Illustration | StumbleuponCircle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/StumbleuponCircle.png) | ![illustration for StumbleuponCircle](../../fontawesome-6/Brands/StumbleuponCircle.Local.png) |




## StumbleuponCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element StumbleuponCircle
include('fontawesome-6/Brands/StumbleuponCircle')

' renders the element
StumbleuponCircle('StumbleuponCircle', 'Stumbleupon Circle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element StumbleuponCircle
include('fontawesome-6/Brands/StumbleuponCircle')

' renders the element
StumbleuponCircle('StumbleuponCircle', 'Stumbleupon Circle', 'an optional tech label', 'an optional description')
@enduml
```

