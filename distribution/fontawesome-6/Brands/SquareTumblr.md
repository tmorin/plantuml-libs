# SquareTumblr


```text
fontawesome-6/Brands/SquareTumblr
```

```text
include('fontawesome-6/Brands/SquareTumblr')
```



| Illustration | SquareTumblr |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/SquareTumblr.png) | ![illustration for SquareTumblr](../../fontawesome-6/Brands/SquareTumblr.Local.png) |




## SquareTumblr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquareTumblr
include('fontawesome-6/Brands/SquareTumblr')

' renders the element
SquareTumblr('SquareTumblr', 'Square Tumblr', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareTumblr
include('fontawesome-6/Brands/SquareTumblr')

' renders the element
SquareTumblr('SquareTumblr', 'Square Tumblr', 'an optional tech label', 'an optional description')
@enduml
```

