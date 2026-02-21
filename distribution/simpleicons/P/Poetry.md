# Poetry


```text
simpleicons/P/Poetry
```

```text
include('simpleicons/P/Poetry')
```



| Illustration | Poetry |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Poetry.png) | ![illustration for Poetry](../../simpleicons/P/Poetry.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PoetryXs>`
- `<$PoetrySm>`
- `<$PoetryMd>`
- `<$PoetryLg>`





## Poetry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Poetry
include('simpleicons/P/Poetry')

' renders the element
Poetry('Poetry', 'Poetry', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Poetry
include('simpleicons/P/Poetry')

' renders the element
Poetry('Poetry', 'Poetry', 'an optional tech label', 'an optional description')
@enduml
```

