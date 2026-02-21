# Instagram


```text
simpleicons/I/Instagram
```

```text
include('simpleicons/I/Instagram')
```



| Illustration | Instagram |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/I/Instagram.png) | ![illustration for Instagram](../../simpleicons/I/Instagram.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InstagramXs>`
- `<$InstagramSm>`
- `<$InstagramMd>`
- `<$InstagramLg>`





## Instagram

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Instagram
include('simpleicons/I/Instagram')

' renders the element
Instagram('Instagram', 'Instagram', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Instagram
include('simpleicons/I/Instagram')

' renders the element
Instagram('Instagram', 'Instagram', 'an optional tech label', 'an optional description')
@enduml
```

