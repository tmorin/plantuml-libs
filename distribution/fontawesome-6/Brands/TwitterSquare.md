# TwitterSquare


```text
fontawesome-6/Brands/TwitterSquare
```

```text
include('fontawesome-6/Brands/TwitterSquare')
```



| Illustration | TwitterSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/TwitterSquare.png) | ![illustration for TwitterSquare](../../fontawesome-6/Brands/TwitterSquare.Local.png) |




## TwitterSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TwitterSquare
include('fontawesome-6/Brands/TwitterSquare')

' renders the element
TwitterSquare('TwitterSquare', 'Twitter Square', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TwitterSquare
include('fontawesome-6/Brands/TwitterSquare')

' renders the element
TwitterSquare('TwitterSquare', 'Twitter Square', 'an optional tech label', 'an optional description')
@enduml
```

