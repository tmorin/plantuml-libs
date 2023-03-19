# SquareLastfm


```text
fontawesome-6/Brands/SquareLastfm
```

```text
include('fontawesome-6/Brands/SquareLastfm')
```



| Illustration | SquareLastfm |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/SquareLastfm.png) | ![illustration for SquareLastfm](../../fontawesome-6/Brands/SquareLastfm.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquareLastfm
include('fontawesome-6/Brands/SquareLastfm')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquareLastfm
include('fontawesome-6/Brands/SquareLastfm')

' renders the element
SquareLastfm('SquareLastfm', 'Square Lastfm', 'an optional tech label', 'an optional description')
@enduml
```

