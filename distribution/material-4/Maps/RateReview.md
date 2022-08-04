# RateReview


```text
material-4/Maps/RateReview
```

```text
include('material-4/Maps/RateReview')
```



| Illustration | RateReview |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/RateReview.png) | ![illustration for RateReview](../../material-4/Maps/RateReview.Local.png) |




## RateReview

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element RateReview
include('material-4/Maps/RateReview')

' renders the element
RateReview('RateReview', 'Rate Review', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element RateReview
include('material-4/Maps/RateReview')

' renders the element
RateReview('RateReview', 'Rate Review', 'an optional tech label', 'an optional description')
@enduml
```

