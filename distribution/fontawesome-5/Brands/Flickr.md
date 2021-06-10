# Flickr


```text
fontawesome-5/Brands/Flickr
```

```text
include('fontawesome-5/Brands/Flickr')
```



| Illustration | Flickr |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Flickr.png) | ![illustration for Flickr](../../fontawesome-5/Brands/Flickr.Local.png) |




## Flickr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Flickr
include('fontawesome-5/Brands/Flickr')

' renders the element
Flickr('Flickr', 'Flickr', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Flickr
include('fontawesome-5/Brands/Flickr')

' renders the element
Flickr('Flickr', 'Flickr', 'an optional tech label')
@enduml
```

