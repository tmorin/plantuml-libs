# RateReview


```text
material/Maps/RateReview
```

```text
include('material/Maps/RateReview')
```



| Illustration | RateReview |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/RateReview.png) | ![illustration for RateReview](../../material/Maps/RateReview.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RateReviewXs>`
- `<$RateReviewSm>`
- `<$RateReviewMd>`
- `<$RateReviewLg>`





## RateReview

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element RateReview
include('material/Maps/RateReview')

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
include('material/bootstrap')

' loads the Item which embeds the element RateReview
include('material/Maps/RateReview')

' renders the element
RateReview('RateReview', 'Rate Review', 'an optional tech label', 'an optional description')
@enduml
```

