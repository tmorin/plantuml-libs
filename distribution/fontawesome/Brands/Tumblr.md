# Tumblr


```text
fontawesome/Brands/Tumblr
```

```text
include('fontawesome/Brands/Tumblr')
```



| Illustration | Tumblr |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Tumblr.png) | ![illustration for Tumblr](../../fontawesome/Brands/Tumblr.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TumblrXs>`
- `<$TumblrSm>`
- `<$TumblrMd>`
- `<$TumblrLg>`





## Tumblr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Tumblr
include('fontawesome/Brands/Tumblr')

' renders the element
Tumblr('Tumblr', 'Tumblr', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tumblr
include('fontawesome/Brands/Tumblr')

' renders the element
Tumblr('Tumblr', 'Tumblr', 'an optional tech label', 'an optional description')
@enduml
```

