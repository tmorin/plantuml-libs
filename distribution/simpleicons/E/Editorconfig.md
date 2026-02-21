# Editorconfig


```text
simpleicons/E/Editorconfig
```

```text
include('simpleicons/E/Editorconfig')
```



| Illustration | Editorconfig |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/E/Editorconfig.png) | ![illustration for Editorconfig](../../simpleicons/E/Editorconfig.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EditorconfigXs>`
- `<$EditorconfigSm>`
- `<$EditorconfigMd>`
- `<$EditorconfigLg>`





## Editorconfig

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Editorconfig
include('simpleicons/E/Editorconfig')

' renders the element
Editorconfig('Editorconfig', 'Editorconfig', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Editorconfig
include('simpleicons/E/Editorconfig')

' renders the element
Editorconfig('Editorconfig', 'Editorconfig', 'an optional tech label', 'an optional description')
@enduml
```

