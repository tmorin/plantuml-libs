# SquareVimeo


```text
fontawesome-6/Brands/SquareVimeo
```

```text
include('fontawesome-6/Brands/SquareVimeo')
```



| Illustration | SquareVimeo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/SquareVimeo.png) | ![illustration for SquareVimeo](../../fontawesome-6/Brands/SquareVimeo.Local.png) |




## SquareVimeo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquareVimeo
include('fontawesome-6/Brands/SquareVimeo')

' renders the element
SquareVimeo('SquareVimeo', 'Square Vimeo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareVimeo
include('fontawesome-6/Brands/SquareVimeo')

' renders the element
SquareVimeo('SquareVimeo', 'Square Vimeo', 'an optional tech label', 'an optional description')
@enduml
```

