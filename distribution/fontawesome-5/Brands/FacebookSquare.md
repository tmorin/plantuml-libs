# FacebookSquare


```text
fontawesome-5/Brands/FacebookSquare
```

```text
include('fontawesome-5/Brands/FacebookSquare')
```



| Illustration | FacebookSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/FacebookSquare.png) | ![illustration for FacebookSquare](../../fontawesome-5/Brands/FacebookSquare.Local.png) |




## FacebookSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FacebookSquare
include('fontawesome-5/Brands/FacebookSquare')

' renders the element
FacebookSquare('FacebookSquare', 'Facebook Square', 'an optional tech label')
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

' loads the Item which embeds the element FacebookSquare
include('fontawesome-5/Brands/FacebookSquare')

' renders the element
FacebookSquare('FacebookSquare', 'Facebook Square', 'an optional tech label')
@enduml
```

