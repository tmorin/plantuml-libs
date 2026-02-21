# Udotsdotnews


```text
simpleicons/U/Udotsdotnews
```

```text
include('simpleicons/U/Udotsdotnews')
```



| Illustration | Udotsdotnews |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/U/Udotsdotnews.png) | ![illustration for Udotsdotnews](../../simpleicons/U/Udotsdotnews.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UdotsdotnewsXs>`
- `<$UdotsdotnewsSm>`
- `<$UdotsdotnewsMd>`
- `<$UdotsdotnewsLg>`





## Udotsdotnews

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Udotsdotnews
include('simpleicons/U/Udotsdotnews')

' renders the element
Udotsdotnews('Udotsdotnews', 'Udotsdotnews', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Udotsdotnews
include('simpleicons/U/Udotsdotnews')

' renders the element
Udotsdotnews('Udotsdotnews', 'Udotsdotnews', 'an optional tech label', 'an optional description')
@enduml
```

