# Phpbb


```text
simpleicons-14/P/Phpbb
```

```text
include('simpleicons-14/P/Phpbb')
```



| Illustration | Phpbb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Phpbb.png) | ![illustration for Phpbb](../../simpleicons-14/P/Phpbb.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhpbbXs>`
- `<$PhpbbSm>`
- `<$PhpbbMd>`
- `<$PhpbbLg>`





## Phpbb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Phpbb
include('simpleicons-14/P/Phpbb')

' renders the element
Phpbb('Phpbb', 'Phpbb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Phpbb
include('simpleicons-14/P/Phpbb')

' renders the element
Phpbb('Phpbb', 'Phpbb', 'an optional tech label', 'an optional description')
@enduml
```

