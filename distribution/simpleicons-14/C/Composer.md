# Composer


```text
simpleicons-14/C/Composer
```

```text
include('simpleicons-14/C/Composer')
```



| Illustration | Composer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Composer.png) | ![illustration for Composer](../../simpleicons-14/C/Composer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ComposerXs>`
- `<$ComposerSm>`
- `<$ComposerMd>`
- `<$ComposerLg>`





## Composer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Composer
include('simpleicons-14/C/Composer')

' renders the element
Composer('Composer', 'Composer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Composer
include('simpleicons-14/C/Composer')

' renders the element
Composer('Composer', 'Composer', 'an optional tech label', 'an optional description')
@enduml
```

