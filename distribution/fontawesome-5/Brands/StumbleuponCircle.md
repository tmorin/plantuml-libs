# StumbleuponCircle


```text
fontawesome-5/Brands/StumbleuponCircle
```

```text
include('fontawesome-5/Brands/StumbleuponCircle')
```



| Illustration | StumbleuponCircle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/StumbleuponCircle.png) | ![illustration for StumbleuponCircle](../../fontawesome-5/Brands/StumbleuponCircle.Local.png) |




## StumbleuponCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element StumbleuponCircle
include('fontawesome-5/Brands/StumbleuponCircle')

' renders the element
StumbleuponCircle('StumbleuponCircle', 'Stumbleupon Circle', 'an optional tech label')
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

' loads the Item which embeds the element StumbleuponCircle
include('fontawesome-5/Brands/StumbleuponCircle')

' renders the element
StumbleuponCircle('StumbleuponCircle', 'Stumbleupon Circle', 'an optional tech label')
@enduml
```

