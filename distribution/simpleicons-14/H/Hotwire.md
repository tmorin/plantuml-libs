# Hotwire


```text
simpleicons-14/H/Hotwire
```

```text
include('simpleicons-14/H/Hotwire')
```



| Illustration | Hotwire |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Hotwire.png) | ![illustration for Hotwire](../../simpleicons-14/H/Hotwire.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HotwireXs>`
- `<$HotwireSm>`
- `<$HotwireMd>`
- `<$HotwireLg>`





## Hotwire

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Hotwire
include('simpleicons-14/H/Hotwire')

' renders the element
Hotwire('Hotwire', 'Hotwire', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Hotwire
include('simpleicons-14/H/Hotwire')

' renders the element
Hotwire('Hotwire', 'Hotwire', 'an optional tech label', 'an optional description')
@enduml
```

