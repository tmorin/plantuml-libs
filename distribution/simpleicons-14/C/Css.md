# Css


```text
simpleicons-14/C/Css
```

```text
include('simpleicons-14/C/Css')
```



| Illustration | Css |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Css.png) | ![illustration for Css](../../simpleicons-14/C/Css.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CssXs>`
- `<$CssSm>`
- `<$CssMd>`
- `<$CssLg>`





## Css

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Css
include('simpleicons-14/C/Css')

' renders the element
Css('Css', 'Css', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Css
include('simpleicons-14/C/Css')

' renders the element
Css('Css', 'Css', 'an optional tech label', 'an optional description')
@enduml
```

