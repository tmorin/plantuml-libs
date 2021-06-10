# TwitterSquare


```text
fontawesome-5/Brands/TwitterSquare
```

```text
include('fontawesome-5/Brands/TwitterSquare')
```



| Illustration | TwitterSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/TwitterSquare.png) | ![illustration for TwitterSquare](../../fontawesome-5/Brands/TwitterSquare.Local.png) |




## TwitterSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element TwitterSquare
include('fontawesome-5/Brands/TwitterSquare')

' renders the element
TwitterSquare('TwitterSquare', 'Twitter Square', 'an optional tech label')
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

' loads the Item which embeds the element TwitterSquare
include('fontawesome-5/Brands/TwitterSquare')

' renders the element
TwitterSquare('TwitterSquare', 'Twitter Square', 'an optional tech label')
@enduml
```

