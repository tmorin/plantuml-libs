# Eslint


```text
simpleicons-8/E/Eslint
```

```text
include('simpleicons-8/E/Eslint')
```



| Illustration | Eslint |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/E/Eslint.png) | ![illustration for Eslint](../../simpleicons-8/E/Eslint.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EslintXs>`
- `<$EslintSm>`
- `<$EslintMd>`
- `<$EslintLg>`





## Eslint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Eslint
include('simpleicons-8/E/Eslint')

' renders the element
Eslint('Eslint', 'Eslint', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Eslint
include('simpleicons-8/E/Eslint')

' renders the element
Eslint('Eslint', 'Eslint', 'an optional tech label', 'an optional description')
@enduml
```

