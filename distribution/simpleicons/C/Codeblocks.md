# Codeblocks


```text
simpleicons/C/Codeblocks
```

```text
include('simpleicons/C/Codeblocks')
```



| Illustration | Codeblocks |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Codeblocks.png) | ![illustration for Codeblocks](../../simpleicons/C/Codeblocks.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CodeblocksXs>`
- `<$CodeblocksSm>`
- `<$CodeblocksMd>`
- `<$CodeblocksLg>`





## Codeblocks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Codeblocks
include('simpleicons/C/Codeblocks')

' renders the element
Codeblocks('Codeblocks', 'Codeblocks', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Codeblocks
include('simpleicons/C/Codeblocks')

' renders the element
Codeblocks('Codeblocks', 'Codeblocks', 'an optional tech label', 'an optional description')
@enduml
```

