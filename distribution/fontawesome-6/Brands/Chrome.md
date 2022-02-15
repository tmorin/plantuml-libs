# Chrome


```text
fontawesome-6/Brands/Chrome
```

```text
include('fontawesome-6/Brands/Chrome')
```



| Illustration | Chrome |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Chrome.png) | ![illustration for Chrome](../../fontawesome-6/Brands/Chrome.Local.png) |




## Chrome

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Chrome
include('fontawesome-6/Brands/Chrome')

' renders the element
Chrome('Chrome', 'Chrome', 'an optional tech label')
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

' loads the Item which embeds the element Chrome
include('fontawesome-6/Brands/Chrome')

' renders the element
Chrome('Chrome', 'Chrome', 'an optional tech label')
@enduml
```

