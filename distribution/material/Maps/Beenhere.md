# Beenhere


```text
material/Maps/Beenhere
```

```text
include('material/Maps/Beenhere')
```



| Illustration | Beenhere |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/Beenhere.png) | ![illustration for Beenhere](../../material/Maps/Beenhere.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BeenhereXs>`
- `<$BeenhereSm>`
- `<$BeenhereMd>`
- `<$BeenhereLg>`





## Beenhere

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Beenhere
include('material/Maps/Beenhere')

' renders the element
Beenhere('Beenhere', 'Beenhere', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Beenhere
include('material/Maps/Beenhere')

' renders the element
Beenhere('Beenhere', 'Beenhere', 'an optional tech label', 'an optional description')
@enduml
```

