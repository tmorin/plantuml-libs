# Alacritty


```text
simpleicons-7/A/Alacritty
```

```text
include('simpleicons-7/A/Alacritty')
```



| Illustration | Alacritty |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Alacritty.png) | ![illustration for Alacritty](../../simpleicons-7/A/Alacritty.Local.png) |




## Alacritty

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Alacritty
include('simpleicons-7/A/Alacritty')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Alacritty
include('simpleicons-7/A/Alacritty')

' renders the element
Alacritty('Alacritty', 'Alacritty', 'an optional tech label', 'an optional description')
@enduml
```

