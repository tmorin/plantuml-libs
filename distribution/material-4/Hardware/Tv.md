# Tv


```text
material-4/Hardware/Tv
```

```text
include('material-4/Hardware/Tv')
```



| Illustration | Tv |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/Tv.png) | ![illustration for Tv](../../material-4/Hardware/Tv.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TvXs>`
- `<$TvSm>`
- `<$TvMd>`
- `<$TvLg>`





## Tv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Tv
include('material-4/Hardware/Tv')

' renders the element
Tv('Tv', 'Tv', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Tv
include('material-4/Hardware/Tv')

' renders the element
Tv('Tv', 'Tv', 'an optional tech label', 'an optional description')
@enduml
```

