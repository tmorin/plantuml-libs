# SquareLastfm


```text
fontawesome/Brands/SquareLastfm
```

```text
include('fontawesome/Brands/SquareLastfm')
```



| Illustration | SquareLastfm |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/SquareLastfm.png) | ![illustration for SquareLastfm](../../fontawesome/Brands/SquareLastfm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareLastfmXs>`
- `<$SquareLastfmSm>`
- `<$SquareLastfmMd>`
- `<$SquareLastfmLg>`





## SquareLastfm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SquareLastfm
include('fontawesome/Brands/SquareLastfm')

' renders the element
SquareLastfm('SquareLastfm', 'Square Lastfm', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element SquareLastfm
include('fontawesome/Brands/SquareLastfm')

' renders the element
SquareLastfm('SquareLastfm', 'Square Lastfm', 'an optional tech label', 'an optional description')
@enduml
```

