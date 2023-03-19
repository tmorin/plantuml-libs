# SquareReddit


```text
fontawesome-6/Brands/SquareReddit
```

```text
include('fontawesome-6/Brands/SquareReddit')
```



| Illustration | SquareReddit |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/SquareReddit.png) | ![illustration for SquareReddit](../../fontawesome-6/Brands/SquareReddit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareRedditXs>`
- `<$SquareRedditSm>`
- `<$SquareRedditMd>`
- `<$SquareRedditLg>`





## SquareReddit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquareReddit
include('fontawesome-6/Brands/SquareReddit')

' renders the element
SquareReddit('SquareReddit', 'Square Reddit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareReddit
include('fontawesome-6/Brands/SquareReddit')

' renders the element
SquareReddit('SquareReddit', 'Square Reddit', 'an optional tech label', 'an optional description')
@enduml
```

