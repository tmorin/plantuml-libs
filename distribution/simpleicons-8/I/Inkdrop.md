# Inkdrop


```text
simpleicons-8/I/Inkdrop
```

```text
include('simpleicons-8/I/Inkdrop')
```



| Illustration | Inkdrop |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/I/Inkdrop.png) | ![illustration for Inkdrop](../../simpleicons-8/I/Inkdrop.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InkdropXs>`
- `<$InkdropSm>`
- `<$InkdropMd>`
- `<$InkdropLg>`





## Inkdrop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Inkdrop
include('simpleicons-8/I/Inkdrop')

' renders the element
Inkdrop('Inkdrop', 'Inkdrop', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Inkdrop
include('simpleicons-8/I/Inkdrop')

' renders the element
Inkdrop('Inkdrop', 'Inkdrop', 'an optional tech label', 'an optional description')
@enduml
```

