# Flickr


```text
simpleicons-5/F/Flickr
```

```text
include('simpleicons-5/F/Flickr')
```



| Illustration | Flickr |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Flickr.png) | ![illustration for Flickr](../../simpleicons-5/F/Flickr.Local.png) |




## Flickr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Flickr
include('simpleicons-5/F/Flickr')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Flickr
include('simpleicons-5/F/Flickr')

' renders the element
Flickr('Flickr', 'Flickr', 'an optional tech label')
@enduml
```

