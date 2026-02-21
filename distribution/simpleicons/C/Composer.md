# Composer


```text
simpleicons/C/Composer
```

```text
include('simpleicons/C/Composer')
```



| Illustration | Composer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Composer.png) | ![illustration for Composer](../../simpleicons/C/Composer.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Composer
include('simpleicons/C/Composer')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Composer
include('simpleicons/C/Composer')

' renders the element
Composer('Composer', 'Composer', 'an optional tech label', 'an optional description')
@enduml
```

