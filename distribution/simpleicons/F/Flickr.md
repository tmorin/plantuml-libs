# Flickr


```text
simpleicons/F/Flickr
```

```text
include('simpleicons/F/Flickr')
```



| Illustration | Flickr |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Flickr.png) | ![illustration for Flickr](../../simpleicons/F/Flickr.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FlickrXs>`
- `<$FlickrSm>`
- `<$FlickrMd>`
- `<$FlickrLg>`





## Flickr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Flickr
include('simpleicons/F/Flickr')

' renders the element
Flickr('Flickr', 'Flickr', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Flickr
include('simpleicons/F/Flickr')

' renders the element
Flickr('Flickr', 'Flickr', 'an optional tech label', 'an optional description')
@enduml
```

