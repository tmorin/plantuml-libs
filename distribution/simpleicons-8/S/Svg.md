# Svg


```text
simpleicons-8/S/Svg
```

```text
include('simpleicons-8/S/Svg')
```



| Illustration | Svg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Svg.png) | ![illustration for Svg](../../simpleicons-8/S/Svg.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SvgXs>`
- `<$SvgSm>`
- `<$SvgMd>`
- `<$SvgLg>`





## Svg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Svg
include('simpleicons-8/S/Svg')

' renders the element
Svg('Svg', 'Svg', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Svg
include('simpleicons-8/S/Svg')

' renders the element
Svg('Svg', 'Svg', 'an optional tech label', 'an optional description')
@enduml
```

