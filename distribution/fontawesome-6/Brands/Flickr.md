# Flickr


```text
fontawesome-6/Brands/Flickr
```

```text
include('fontawesome-6/Brands/Flickr')
```



| Illustration | Flickr |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Flickr.png) | ![illustration for Flickr](../../fontawesome-6/Brands/Flickr.Local.png) |




## Flickr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Flickr
include('fontawesome-6/Brands/Flickr')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Flickr
include('fontawesome-6/Brands/Flickr')

' renders the element
Flickr('Flickr', 'Flickr', 'an optional tech label')
@enduml
```

