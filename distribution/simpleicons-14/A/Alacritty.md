# Alacritty


```text
simpleicons-14/A/Alacritty
```

```text
include('simpleicons-14/A/Alacritty')
```



| Illustration | Alacritty |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Alacritty.png) | ![illustration for Alacritty](../../simpleicons-14/A/Alacritty.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AlacrittyXs>`
- `<$AlacrittySm>`
- `<$AlacrittyMd>`
- `<$AlacrittyLg>`





## Alacritty

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Alacritty
include('simpleicons-14/A/Alacritty')

' renders the element
Alacritty('Alacritty', 'Alacritty', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Alacritty
include('simpleicons-14/A/Alacritty')

' renders the element
Alacritty('Alacritty', 'Alacritty', 'an optional tech label', 'an optional description')
@enduml
```

