# Pandoc


```text
simpleicons/P/Pandoc
```

```text
include('simpleicons/P/Pandoc')
```



| Illustration | Pandoc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Pandoc.png) | ![illustration for Pandoc](../../simpleicons/P/Pandoc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PandocXs>`
- `<$PandocSm>`
- `<$PandocMd>`
- `<$PandocLg>`





## Pandoc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Pandoc
include('simpleicons/P/Pandoc')

' renders the element
Pandoc('Pandoc', 'Pandoc', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pandoc
include('simpleicons/P/Pandoc')

' renders the element
Pandoc('Pandoc', 'Pandoc', 'an optional tech label', 'an optional description')
@enduml
```

