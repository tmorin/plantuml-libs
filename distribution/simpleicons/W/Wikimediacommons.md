# Wikimediacommons


```text
simpleicons/W/Wikimediacommons
```

```text
include('simpleicons/W/Wikimediacommons')
```



| Illustration | Wikimediacommons |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Wikimediacommons.png) | ![illustration for Wikimediacommons](../../simpleicons/W/Wikimediacommons.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WikimediacommonsXs>`
- `<$WikimediacommonsSm>`
- `<$WikimediacommonsMd>`
- `<$WikimediacommonsLg>`





## Wikimediacommons

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Wikimediacommons
include('simpleicons/W/Wikimediacommons')

' renders the element
Wikimediacommons('Wikimediacommons', 'Wikimediacommons', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wikimediacommons
include('simpleicons/W/Wikimediacommons')

' renders the element
Wikimediacommons('Wikimediacommons', 'Wikimediacommons', 'an optional tech label', 'an optional description')
@enduml
```

