# Inoreader


```text
simpleicons-14/I/Inoreader
```

```text
include('simpleicons-14/I/Inoreader')
```



| Illustration | Inoreader |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/I/Inoreader.png) | ![illustration for Inoreader](../../simpleicons-14/I/Inoreader.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InoreaderXs>`
- `<$InoreaderSm>`
- `<$InoreaderMd>`
- `<$InoreaderLg>`





## Inoreader

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Inoreader
include('simpleicons-14/I/Inoreader')

' renders the element
Inoreader('Inoreader', 'Inoreader', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Inoreader
include('simpleicons-14/I/Inoreader')

' renders the element
Inoreader('Inoreader', 'Inoreader', 'an optional tech label', 'an optional description')
@enduml
```

