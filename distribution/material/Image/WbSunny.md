# WbSunny


```text
material/Image/WbSunny
```

```text
include('material/Image/WbSunny')
```



| Illustration | WbSunny |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/WbSunny.png) | ![illustration for WbSunny](../../material/Image/WbSunny.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WbSunnyXs>`
- `<$WbSunnySm>`
- `<$WbSunnyMd>`
- `<$WbSunnyLg>`





## WbSunny

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element WbSunny
include('material/Image/WbSunny')

' renders the element
WbSunny('WbSunny', 'Wb Sunny', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element WbSunny
include('material/Image/WbSunny')

' renders the element
WbSunny('WbSunny', 'Wb Sunny', 'an optional tech label', 'an optional description')
@enduml
```

