# Inoreader


```text
simpleicons/I/Inoreader
```

```text
include('simpleicons/I/Inoreader')
```



| Illustration | Inoreader |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/I/Inoreader.png) | ![illustration for Inoreader](../../simpleicons/I/Inoreader.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Inoreader
include('simpleicons/I/Inoreader')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Inoreader
include('simpleicons/I/Inoreader')

' renders the element
Inoreader('Inoreader', 'Inoreader', 'an optional tech label', 'an optional description')
@enduml
```

