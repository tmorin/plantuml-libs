# Pandoc


```text
simpleicons-14/P/Pandoc
```

```text
include('simpleicons-14/P/Pandoc')
```



| Illustration | Pandoc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Pandoc.png) | ![illustration for Pandoc](../../simpleicons-14/P/Pandoc.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Pandoc
include('simpleicons-14/P/Pandoc')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Pandoc
include('simpleicons-14/P/Pandoc')

' renders the element
Pandoc('Pandoc', 'Pandoc', 'an optional tech label', 'an optional description')
@enduml
```

