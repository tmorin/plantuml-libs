# SquareTwitter


```text
fontawesome-6/Brands/SquareTwitter
```

```text
include('fontawesome-6/Brands/SquareTwitter')
```



| Illustration | SquareTwitter |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/SquareTwitter.png) | ![illustration for SquareTwitter](../../fontawesome-6/Brands/SquareTwitter.Local.png) |




## SquareTwitter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquareTwitter
include('fontawesome-6/Brands/SquareTwitter')

' renders the element
SquareTwitter('SquareTwitter', 'Square Twitter', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareTwitter
include('fontawesome-6/Brands/SquareTwitter')

' renders the element
SquareTwitter('SquareTwitter', 'Square Twitter', 'an optional tech label', 'an optional description')
@enduml
```

