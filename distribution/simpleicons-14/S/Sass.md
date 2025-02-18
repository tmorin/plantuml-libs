# Sass


```text
simpleicons-14/S/Sass
```

```text
include('simpleicons-14/S/Sass')
```



| Illustration | Sass |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Sass.png) | ![illustration for Sass](../../simpleicons-14/S/Sass.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SassXs>`
- `<$SassSm>`
- `<$SassMd>`
- `<$SassLg>`





## Sass

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sass
include('simpleicons-14/S/Sass')

' renders the element
Sass('Sass', 'Sass', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sass
include('simpleicons-14/S/Sass')

' renders the element
Sass('Sass', 'Sass', 'an optional tech label', 'an optional description')
@enduml
```

