# Prettier


```text
simpleicons/P/Prettier
```

```text
include('simpleicons/P/Prettier')
```



| Illustration | Prettier |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Prettier.png) | ![illustration for Prettier](../../simpleicons/P/Prettier.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PrettierXs>`
- `<$PrettierSm>`
- `<$PrettierMd>`
- `<$PrettierLg>`





## Prettier

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Prettier
include('simpleicons/P/Prettier')

' renders the element
Prettier('Prettier', 'Prettier', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Prettier
include('simpleicons/P/Prettier')

' renders the element
Prettier('Prettier', 'Prettier', 'an optional tech label', 'an optional description')
@enduml
```

