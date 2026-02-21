# Pug


```text
simpleicons/P/Pug
```

```text
include('simpleicons/P/Pug')
```



| Illustration | Pug |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Pug.png) | ![illustration for Pug](../../simpleicons/P/Pug.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PugXs>`
- `<$PugSm>`
- `<$PugMd>`
- `<$PugLg>`





## Pug

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Pug
include('simpleicons/P/Pug')

' renders the element
Pug('Pug', 'Pug', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pug
include('simpleicons/P/Pug')

' renders the element
Pug('Pug', 'Pug', 'an optional tech label', 'an optional description')
@enduml
```

