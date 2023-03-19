# Webpack


```text
simpleicons-8/W/Webpack
```

```text
include('simpleicons-8/W/Webpack')
```



| Illustration | Webpack |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/W/Webpack.png) | ![illustration for Webpack](../../simpleicons-8/W/Webpack.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WebpackXs>`
- `<$WebpackSm>`
- `<$WebpackMd>`
- `<$WebpackLg>`





## Webpack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Webpack
include('simpleicons-8/W/Webpack')

' renders the element
Webpack('Webpack', 'Webpack', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Webpack
include('simpleicons-8/W/Webpack')

' renders the element
Webpack('Webpack', 'Webpack', 'an optional tech label', 'an optional description')
@enduml
```

