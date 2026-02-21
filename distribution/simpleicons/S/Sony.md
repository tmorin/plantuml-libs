# Sony


```text
simpleicons/S/Sony
```

```text
include('simpleicons/S/Sony')
```



| Illustration | Sony |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Sony.png) | ![illustration for Sony](../../simpleicons/S/Sony.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SonyXs>`
- `<$SonySm>`
- `<$SonyMd>`
- `<$SonyLg>`





## Sony

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Sony
include('simpleicons/S/Sony')

' renders the element
Sony('Sony', 'Sony', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sony
include('simpleicons/S/Sony')

' renders the element
Sony('Sony', 'Sony', 'an optional tech label', 'an optional description')
@enduml
```

