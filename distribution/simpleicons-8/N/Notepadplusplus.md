# Notepadplusplus


```text
simpleicons-8/N/Notepadplusplus
```

```text
include('simpleicons-8/N/Notepadplusplus')
```



| Illustration | Notepadplusplus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/N/Notepadplusplus.png) | ![illustration for Notepadplusplus](../../simpleicons-8/N/Notepadplusplus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NotepadplusplusXs>`
- `<$NotepadplusplusSm>`
- `<$NotepadplusplusMd>`
- `<$NotepadplusplusLg>`





## Notepadplusplus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Notepadplusplus
include('simpleicons-8/N/Notepadplusplus')

' renders the element
Notepadplusplus('Notepadplusplus', 'Notepadplusplus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Notepadplusplus
include('simpleicons-8/N/Notepadplusplus')

' renders the element
Notepadplusplus('Notepadplusplus', 'Notepadplusplus', 'an optional tech label', 'an optional description')
@enduml
```

